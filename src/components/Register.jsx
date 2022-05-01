import React from "react";
import { auth } from '../config/fire.js';
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import '../css/Login.css';
import { Link } from 'react-router-dom';

class Register extends React.Component {
    state = {
        email: '',
        password: '',
        displayName: '',
        fireErrors: ''
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    register = e => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, this.state.email,this.state.password).then((userCredential) => {
            const currentUser = userCredential.user;
            updateProfile(currentUser, {
                displayName: this.state.displayName
            })
        })
        .catch((error) => {
            this.setState({fireErrors: error.message})
        });
    }
    
    render () {
        let errorNotification = this.state.fireErrors ? 
            (<div className="Error">{this.state.fireErrors}</div>) : null;
        return (
            <>
                <div className="mainBlock">
                    {errorNotification}
                    <form>
                        <input type="text"
                            className="regField"
                            placeholder="Your Name"
                            onChange={this.handleChange}
                            value={this.state.displayName}
                            name="displayName"/>
                        <input type="text"
                            className="regField"
                            placeholder="Email"
                            onChange={this.handleChange}
                            value={this.state.email}
                            name="email"/>
                        <input type="password"
                            className="regField"
                            placeholder="Password"
                            onChange={this.handleChange}
                            value={this.state.password}
                            name="password"
                            type="password"/>
                        <input onClick={this.register} type="submit" className="submitBtn" value="REGISTER" />
                    </form>
                    <span className="underLine">
                        Have an account? <Link to="/Login"><button className="linkBtn">Sign in here</button></Link>
                    </span>
                </div>
            </>
        )
    }
}

export default Register;