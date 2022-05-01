import React from 'react';
import { Link } from 'react-router-dom';
import Income from './Income';

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
                        <Link to="/Login">
                            <button type="button">
                                Sign up
                            </button>
                        </Link>
                    </div>
                </div>
                <div className="left-col">
                    <div className="app-desc">
                        <h2>Own your money</h2>
                        <p>This virtual budget program keeps you on track of yours spending habits. Spend, save, and give toward what's important in life. </p>
                    </div>
                    <div className="user-income">
                        <h3> Annual Income</h3>
                        <Income />
                    </div>
                    <div className="monthly-expenses">
                        
                    </div>
                </div>
            </div>
        )
    }
}

export default LandingPage;