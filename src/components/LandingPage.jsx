import React from 'react';
import { Link } from 'react-router-dom';
import SignIn from './SignIn';

class LandingPage extends React.Component {
    render() {
        return(
            <div>
                <div className="header">
                    <div className="logo">
                        <img></img>
                        <p className="title">Budgeter App</p>
                    </div>
                    <div className="sign-up">
                        <p>Sign in to save</p>
                        <Link to="/SignIn">
                            <button type="button">
                                Sign up
                            </button>
                        </Link>
                    </div>
                </div>
                <div className="left-col">
                    <div className="app-desc">
                        <h4>Own your money</h4>
                        <p>Spend, save, and give toward what's important in life</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default LandingPage;