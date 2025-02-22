import { Component, ErrorInfo, ReactNode } from "react";
import { Alert, Fade, Snackbar } from "@mui/material";

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
  }

  handleClose = () => {
    this.setState({ hasError: false });
  };

  render() {
    return (
      <>
        {this.props.children}
        <Snackbar
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          open={this.state.hasError}
          TransitionComponent={Fade}
          autoHideDuration={6000}
          onClose={this.handleClose}
        >
          <Alert
            severity="error"
            variant="filled"
            sx={{ width: "100%" }}
            onClose={this.handleClose}
          >
            Something went wrong. Please try again later.
          </Alert>
        </Snackbar>
      </>
    );
  }
}

export default ErrorBoundary;
