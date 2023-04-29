import React, { useState } from 'react';
import { createContext } from 'react';
import app from '../../Firebase/Firebase';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { useEffect } from 'react';
export const UserContext = createContext(null);
const auth = getAuth(app);
const AuthProvider = ({children}) => {
    const [users,setUsers] = useState(null)
    const [loading,setLoading] = useState(true)
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth,email,password)
    }
    const Logout = ()=>{
       return signOut(auth)
    }
    useEffect(()=>{
        const unsubscriber = onAuthStateChanged(auth,loggedUser=>{
            setUsers(loggedUser)
            setLoading(false)
        })
        return ()=>{
            unsubscriber()
        }
    },[])
    const AuthInfo = {
        users,
        createUser,
        signIn,
        Logout,
        loading,
    }
    return (
        <UserContext.Provider value={AuthInfo}>
            {children}
        </UserContext.Provider>
    );
};

export default AuthProvider;