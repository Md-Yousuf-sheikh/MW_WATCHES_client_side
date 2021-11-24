import React from 'react';
import { Navigate, useLocation } from 'react-router';
import useAuth from '../Hooks/useAuth';


const AdminRoute = ({ children, ...rest }) => {
    let { user, isLoading, admin } = useAuth();
    const location = useLocation()
    if (isLoading) {
        return <div style={{ marginTop: "20%" }} className="flex justify-center">
            <div class="relative">
                <div class="w-20 h-20 border-purple-200 border-2 rounded-full"></div>
                <div class="w-20 h-20 border-purple-700 border-t-2 animate-spin rounded-full absolute left-0 top-0"></div>
            </div>
        </div>
    }
    if (user?.email && admin) {
        return children;
    }
    return <Navigate to='/' state={{ form: location }} />

};

export default AdminRoute;