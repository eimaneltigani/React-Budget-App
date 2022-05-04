import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from '../redux/store/userSlice';
import { auth } from '../config/fire';
import { onAuthStateChanged } from '@firebase/auth';

import Dashboard from './Dashboard';
import Login from './Login';

function Authentication() {
    const user = useSelector(selectUser);
    const dispatch = useDispatch();
  
    // check at page load if a user is authenticated
    useEffect(() => {
      onAuthStateChanged(auth, userAuth => {
        if (userAuth) {
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
            {console.log(user)}
            {!user ? (
                <Login />
            ) : (
                <div>
                    <h1>Hello, {user.displayName}</h1>
                    <Dashboard />
                </div>
            )}
        </div>
    );
}
  

export default Authentication;
