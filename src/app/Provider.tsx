import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ErrorBoundary } from 'app/providers/ErrorBoundary';
import { ThemeProvider } from 'app/providers/ThemeProvider';
import StoreProvider from 'app/providers/StoreProvider/ui/StoreProvider';
import AuthProvider from 'app/providers/AuthProvider/AuthProvider';

interface ProviderProps {
    children: React.ReactNode
}

const Provider = ({ children }: ProviderProps) => (
    <BrowserRouter>
        <StoreProvider>
            <AuthProvider>
                <ErrorBoundary>
                    <ThemeProvider>
                        {children}
                    </ThemeProvider>
                </ErrorBoundary>
            </AuthProvider>
        </StoreProvider>
    </BrowserRouter>
);

export default Provider;
