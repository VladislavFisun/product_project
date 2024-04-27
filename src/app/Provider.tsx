import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ErrorBoundary } from 'app/providers/ErrorBoundary';
import { ThemeProvider } from 'app/providers/ThemeProvider';
import StoreProvider from 'app/providers/StoreProvider/ui/StoreProvider';

interface ProviderProps {
    children: React.ReactNode
}

const Provider = ({ children }: ProviderProps) => (
    <BrowserRouter>
        <StoreProvider>
            <ErrorBoundary>
                <ThemeProvider>
                    {children}
                </ThemeProvider>
            </ErrorBoundary>
        </StoreProvider>
    </BrowserRouter>
);

export default Provider;
