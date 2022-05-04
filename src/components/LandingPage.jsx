import React from 'react';
import Income from './Income';
import Header from './Header';

class LandingPage extends React.Component {
    render() {
        return(
            <div>
                <Header />
                <div className="left-col">
                    <div className="app-desc">
                        <h2>Own your money</h2>
                        <p>This virtual budget program keeps you on track of your spending habits. Spend, save, and give toward what's important in life. </p>
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