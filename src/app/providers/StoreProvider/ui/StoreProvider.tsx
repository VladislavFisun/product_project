import React from 'react';
import { Provider } from 'react-redux';
import { createReduxStore } from 'app/providers/StoreProvider/config/store';
import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';
import { useNavigate } from 'react-router-dom';

interface StoreProviderProps {
    children: React.ReactNode
    initialState?:StateSchema
}

const StoreProvider = ({ children, initialState }: StoreProviderProps) => {
    const navigate = useNavigate();
    const store = createReduxStore(initialState, navigate);
    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};

export default StoreProvider;
