import React, { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false
    };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  /*componentDidCatch(error, errorInfo) {
    //Error Logger service call here.
  }*/

  render() {
    const { hasError } = this.state;
    if (hasError) {
      return <div>An unexpected Error occured</div>;
    }
    return this.props.children;
  }
}
export default ErrorBoundary;
