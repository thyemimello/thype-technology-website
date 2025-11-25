import { Component, ReactNode, ErrorInfo } from "react";
import Spline from "@splinetool/react-spline";

interface SafeSplineProps {
  scene: string;
  style?: React.CSSProperties;
  renderOnDemand?: boolean;
}

interface SafeSplineState {
  hasError: boolean;
}

export class SafeSpline extends Component<SafeSplineProps, SafeSplineState> {
  constructor(props: SafeSplineProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(_: Error): SafeSplineState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.warn('Spline failed to load (WebGL may not be available):', error);
  }

  render() {
    if (this.state.hasError) {
      return null;
    }

    try {
      return <Spline {...this.props} />;
    } catch (error) {
      console.warn('Spline render error:', error);
      return null;
    }
  }
}
