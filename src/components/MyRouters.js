import React from 'react';
import REACTDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom';
import LandingPage from './LandingPage';
import SignIn from './SignIn';

class MyRouters extends React.Component {
    render() {
        return (
            <Router>
                <Routes>
                    <Route name="LandingPage" exact path="/" element={<LandingPage />}/>
                    <Route name="SignIn" exact path="/SignIn" element={<SignIn />}/>
                </Routes>
            </Router>
        )
    }
}

export default MyRouters;