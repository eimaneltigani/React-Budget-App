import React from 'react';
import '../css/LandingPage.css'
import Income from './Income';
import Header from './Header';
import Expenses from './Expenses';

class LandingPage extends React.Component {
    render() {
        return(
            <div>
                <Header />
                <div className="main">
                    <div className="left-col">
                        <div className="app-desc">
                            <h2 className="own">Own your money</h2>
                            <p>This virtual budget program keeps you on track of your spending habits. Spend, save, and give toward what's important in life. </p>
                        </div>
                        <div className="user-income">
                            <h3> Annual Income</h3>
                            <Income />
                        </div>
                        <div className="monthly-expenses">
                            <Expenses />
                        </div>
                    </div>
                
                <div className="right-col">
                    <div className="expenses-desc">
                        <h2>How do you spend?</h2>
                        <div className="donut-placeholder"></div>
                        <div className="report-placeholder"></div>
                    </div>
                    <h3>What now?</h3>
                    <p>Great job staying within your burdget</p>
                </div>
                </div>
            </div>
        )
    }
}

export default LandingPage;