import { useSelector } from 'react-redux';
import { useLocation, Navigate } from 'react-router-dom';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import React from 'react';
import { authSelector } from 'entities/User/model/selectors/userSelectors';

// eslint-disable-next-line no-undef
const RequireAuth = ({ children }:{children: JSX.Element}) => {
    const authData = useSelector(authSelector);
    const location = useLocation();
    if (!authData) {
        return <Navigate to={RoutePath.main} state={{ from: location }} replace />;
    }
    return children;
};

export default RequireAuth;
