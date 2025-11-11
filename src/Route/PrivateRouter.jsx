import React, { use } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { Navigate, useLocation } from 'react-router';
import Loader from '../Pages/Loader';

const PrivateRouter = ({ children }) => {
    const { user, loading } = use(AuthContext);
    const location = useLocation();
    console.log(location);

    if (loading) {
        return <Loader></Loader>
    }

    if (user) {
        return children;
    }
    return (
        <Navigate state={location.pathname} to='/login'></Navigate>
    );
};

export default PrivateRouter;