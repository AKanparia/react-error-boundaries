import React from "react";
import { Route } from "react-router-dom";
import ErrorBoundary from "./ErrorBoundary";

const ErrorBoundaryRoute = props => {
  const { component, render, children, ...rest } = props;

  if (!component && !render && !children) throw new Error(`No Component specified for Path - ${rest.path}`);

  const Component = component || render;

  const encloseInErrorBoundary = routerProps => (
    <ErrorBoundary>{children ? children : <Component {...routerProps} />}</ErrorBoundary>
    /* Error within child will be caught if child is a component, else will be propogated up to nearest parent Errorboundary  */
  );

  return <Route {...rest} render={encloseInErrorBoundary} />;
};

export default ErrorBoundaryRoute;