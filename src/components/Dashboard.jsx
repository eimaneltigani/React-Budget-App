import React from 'react';
import Header from './Header';

class Dashboard extends React.Component {
    render () {
        return (
            <div>
                <Header />
                <h1> This is the dash board for logged in users</h1>
            </div>
        )
    }
}

export default Dashboard;