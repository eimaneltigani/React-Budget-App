import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from '../Redux/store/userSlice';
import { auth } from './Firebase/firebase';
import { onAuthStateChanged } from '@firebase/auth';

import Dashboard from './Dashboard';
import Login from './Login';
import { useAuthValue } from './Firebase/context';


function Authentication() {
    const user = useAuthValue();
    const dispatch = useDispatch();
  
    //check at page load if a user is authenticated
    useEffect(() => {
      onAuthStateChanged(auth, userAuth => {
        if (userAuth) {
          // Dispatch user information for persistance in redux state
          dispatch(
            login({
              email: userAuth.email,
              uid: userAuth.uid,
              displayName: userAuth.displayName,
              photoUrl: userAuth.photoURL,
            })
          );
        } 
        else {
            dispatch(logout());
        }
      });
      console.log('page loaded');
    }, [dispatch]);

    return (
        <div>
            {user.user ? (
              <div>
                <h1>Hello, {user.displayName}</h1>
                <Dashboard />
              </div>
            ) : (
              <Login />
            )}
        </div>
    );
}
  

export default Authentication;
