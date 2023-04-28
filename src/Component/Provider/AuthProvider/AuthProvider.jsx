import React, { useState } from 'react';
import { createContext } from 'react';
import app from '../../Firebase/Firebase';
import { getAuth } from "firebase/auth";
export const UserContext = createContext(null);
const auth = getAuth(app);
const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null)

    const AuthInfo = {
        user,
    }
    return (
        <UserContext.Provider value={AuthInfo}>
            {children}
        </UserContext.Provider>
    );
};

export default AuthProvider;