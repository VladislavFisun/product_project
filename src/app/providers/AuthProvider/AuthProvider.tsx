import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import { userActions } from 'entities/User';
import { userSelectors } from 'entities/User/model/selectors/userSelectors';

interface AuthProviderProps {
    children: React.ReactNode
}

const AuthProvider = ({ children }: AuthProviderProps) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(userActions.initAuthData());
    }, [dispatch]);

    return (
        <div>
            {children}
        </div>
    );
};

export default AuthProvider;
