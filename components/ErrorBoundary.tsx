
import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
    children: ReactNode;
}

interface State {
    hasError: boolean;
    error?: Error;
}

class ErrorBoundary extends Component<Props, State> {
    public state: State = {
        hasError: false
    };

    public static getDerivedStateFromError(error: Error): State {
        return { hasError: true, error };
    }

    public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error('Uncaught error:', error, errorInfo);
    }

    public render() {
        if (this.state.hasError) {
            return (
                <div className="min-h-screen flex items-center justify-center bg-[#fcfaf7] p-6 text-center">
                    <div className="max-w-md space-y-6">
                        <h2 className="text-4xl font-just-another-hand text-[#27618E]">Something went wrong</h2>
                        <p className="text-[#27618E]/60 serif italic">
                            "Even the best recipes sometimes need a tweak. Please refresh the page."
                        </p>
                        <div className="p-4 bg-red-50 border border-red-100 rounded-lg text-xs text-left text-red-800 overflow-auto max-h-40">
                            {this.state.error?.toString()}
                        </div>
                        <button
                            onClick={() => window.location.reload()}
                            className="px-8 py-3 bg-[#D1BB94] text-white rounded-full text-xs tracking-[0.2em] font-bold uppercase hover:bg-[#27618E] transition-colors"
                        >
                            Refresh Page
                        </button>
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
