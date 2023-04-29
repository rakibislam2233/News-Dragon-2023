import React, { useContext } from 'react';
import { UserContext } from '../../Provider/AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivetRoute = ({children}) => {
    const {users,loading} = useContext(UserContext);
    const location = useLocation();
    if(loading){
        return <div>Loading..........</div>
    }
    if(users){
        return children
    }
    return (
        <Navigate state={{from:location}} to={'/login'} replace>
            
        </Navigate>
    );
};

export default PrivetRoute;