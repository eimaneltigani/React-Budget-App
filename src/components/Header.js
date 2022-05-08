import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { auth } from '../config/fire';
import { logout, selectUser } from '../redux/store/userSlice'
import { FaSignOutAlt } from 'react-icons/fa';
import { signOut } from '@firebase/auth';
import '../css/Header.css';


function NavigationNonAuth() {
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

function NavigationAuth() {
    const dispatch = useDispatch();

    const logoutOfApp = () => {
        dispatch(logout());
        signOut(auth);
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

const Header = () => {
    
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
                <NavigationAuth />
            )}
        </div>
    )
}


export default Header;