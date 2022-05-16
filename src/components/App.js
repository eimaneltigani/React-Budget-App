import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom';

import LandingPage from './LandingPage';
import withAuthentication from './Session/withAuthentication';
import Dashboard from './Dashboard';
import Login from './Login';


function App() {

    return (
        <Router>
            <Routes>
                <Route name="LandingPage" exact path="/" element={<LandingPage />}/>
                <Route name="Login" exact path="/Login" element={<Login />}/>
                <Route name="Dashboard" exact path="/Dashboard" element={<Dashboard />}/>      
            </Routes>
        </Router>
    ) 
}

export default withAuthentication(App);