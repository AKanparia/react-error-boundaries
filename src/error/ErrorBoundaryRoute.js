import React from "react";
import { Route } from "react-router-dom";
import ErrorBoundary from "./ErrorBoundary";

const ErrorBoundaryRoute = props => {
  const { component, render, children, errorBoundaryFor, ...rest } = props;

  if (!component && !render && !children)
    throw new Error(`No Component specified for Path - ${rest.path}`);

  const Component = component || render;

  const encloseInErrorBoundary = routerProps => (
    <ErrorBoundary {...(errorBoundaryFor ? { key: errorBoundaryFor } : {})}>
      {Component ? (
        <Component {...routerProps} />
      ) : (
        <ChildWrapper>{children}</ChildWrapper>
      )}
    </ErrorBoundary>
    /* Error within child will be caught if child is a component, else will be propogated up to nearest parent Errorboundary, 
      Hence Wrapping it with a functional component  */
  );

  return <Route {...rest} render={encloseInErrorBoundary} />;
};

const ChildWrapper = ({ children }) => {
  return <React.Fragment>{children}</React.Fragment>;
};

export default ErrorBoundaryRoute;
