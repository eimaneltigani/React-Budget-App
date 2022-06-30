import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom';

import LandingPage from './LandingPage';
import Dashboard from './Dashboard';
import Login from './Login';
import Authentication from './Authentication';

import { AuthProvider } from './Firebase/context'
import { useSelector } from 'react-redux';
import { selectUser } from '../Redux/store/userSlice';



function App() {

    const user = useSelector(selectUser);

    return (
        <Router>
            <AuthProvider value={{user}}>
                <Routes>
                    <Route name="LandingPage" exact path="/" element={<LandingPage />}/>
                    <Route name="Login" exact path="/Login" element={<Authentication />}/>
                    <Route name="Dashboard" exact path="/Dashboard" element={<Dashboard />}/>      
                </Routes>
            </AuthProvider>
        </Router>
    ) 
}

export default App;