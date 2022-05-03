import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { auth } from '../config/fire';
import { logout, selectUser } from '../redux/store/userSlice'
import { FaSignOutAlt } from 'react-icons/fa';
import { signOut } from '@firebase/auth';


function NavigationNonAuth() {
    return (
        <div className="sign-up">
            <p>Sign in to save</p>
            <Link to="/Login">
                <button type="button">
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
            <button onClick={logoutOfApp}>
                <FaSignOutAlt />
                <span>Logout</span>
            </button>
        </div>
    )
}

const Header = () => {
    
    const user = useSelector(selectUser);

    return (
        <header>
            <div className="logo">
                <img></img>
                <p className="title">Budgeter App</p>
            </div>
            {!user ? (
                <NavigationNonAuth />
            ) : (
                <NavigationAuth />
            )}
        </header>
    )
}


export default Header;