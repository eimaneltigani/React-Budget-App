import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout, selectUser } from '../Redux/store/userSlice'
import { FaSignOutAlt } from 'react-icons/fa';
import { withFirebase } from './Firebase';

import '../css/Header.css';

const NavigationNonAuth = () => {
    return (
        <div className="sign-up">
            <p className="header-text">Sign in to save</p>
            <Link to="/Login">
                <button className="header-button">
                    Sign up
                </button>
            </Link>
        </div>
    ) 
}

const NavigationAuth = ({ firebase }) => {
    // const firebase = useFirebase();
    const dispatch = useDispatch();

    const logoutOfApp = () => {
        dispatch(logout());
        firebase.doSignOut();
    }

    return (        
        <div className="sign-out">
            <button className="header-button" onClick={logoutOfApp}>
                <FaSignOutAlt />
                <span>Logout</span>
            </button>
        </div>
    )
}

const Header = ({ firebase }) => {
    
    const user = useSelector(selectUser);

    return (
        <div className="header">
            <div className="logo">
                <img src='https://logodix.com/logo/1299984.png' width="40px" height="40px"></img>
                <p className="title">Budgeter<span className="app">App</span></p>
            </div>
            {!user ? (
                <NavigationNonAuth />
            ) : (
                <NavigationAuth firebase={firebase} />
            )}
        </div>
    )
}


export default withFirebase(Header);