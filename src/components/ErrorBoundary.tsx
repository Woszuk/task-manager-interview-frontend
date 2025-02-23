import { Component, ErrorInfo, ReactNode } from "react";
import { toast } from "react-toastify";

type ErrorBoundaryProps = {
  children: ReactNode;
};

type ErrorBoundaryState = {
  hasError: boolean;
};

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
    toast.error("Something went wrong. Please try again later");
  }

  handleClose = () => {
    this.setState({ hasError: false });
  };

  render() {
    return this.props.children;
  }
}

export default ErrorBoundary;
