import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../Hooks/useAuth';


const PrivetRoute = ({ children, ...rest }) => {
    let { user, isLoading } = useAuth();
    if (isLoading) {
        return <div style={{ marginTop: "20%" }} className="flex justify-center">
            <div class="relative">
                <div class="w-20 h-20 border-purple-200 border-2 rounded-full"></div>
                <div class="w-20 h-20 border-purple-700 border-t-2 animate-spin rounded-full absolute left-0 top-0"></div>
            </div>
        </div>
    }
    return (
        <Route
            {...rest}
            render={({ location }) =>
                user.email ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
};

export default PrivetRoute;