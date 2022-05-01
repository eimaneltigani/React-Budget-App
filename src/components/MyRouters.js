import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom';
import LandingPage from './LandingPage';
import Login from './Login';
import Register from './Register';

class MyRouters extends React.Component {
    render() {
        return (
            <Router>
                <Routes>
                    <Route name="LandingPage" exact path="/" element={<LandingPage />}/>
                    <Route name="Login" exact path="/Login" element={<Login />}/>
                    <Route name="Register" exact path="/Register" element={<Register />}/>
                </Routes>
            </Router>
        )
    }
}

export default MyRouters;