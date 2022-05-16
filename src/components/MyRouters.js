import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom';
import LandingPage from './LandingPage';
import Authentication from './Authentication';
import Dashboard from './Dashboard';


class MyRouters extends React.Component {
    render() {
        return (
            <Router>
                <Routes>
                    <Route name="LandingPage" exact path="/" element={<LandingPage />}/>
                    <Route name="Login" exact path="/Login" element={<Authentication />}/>
                    <Route name="Dashboard" exact path="/Dashboard" element={<Dashboard />}/>        
                </Routes>
            </Router>
        )
    }
}

export default MyRouters;