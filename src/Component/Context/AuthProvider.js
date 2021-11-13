import React, { createContext } from 'react';
import useFirebase from '../Hooks/useFirebase/useFirebase';


export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
    // useFirebase 
    const allContext = useFirebase()
    return (
        <AuthContext.Provider value={allContext}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;