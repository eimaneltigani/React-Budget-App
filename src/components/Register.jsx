import React from "react";
import { auth } from '../config/fire.js';
import { connect } from 'react-redux';
import { login } from "../redux/store/userSlice";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import '../css/Login.css';
import { Link } from 'react-router-dom';

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            displayName: '',
            profilePic: '',
            fireErrors: ''
        }
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    login = () => {
        this.props.login();
    }

    register = () => {
        console.log('register the user');

        createUserWithEmailAndPassword(auth, this.state.email,this.state.password)
            .then((userAuth) => {
                updateProfile(userAuth.user, {
                    displayName: this.state.displayName,
                    photoURL: this.state.profilePic
                })
                .then(
                    this.login({
                        email: userAuth.user.email,
                        uid: userAuth.user.uid,
                        displayName: this.state.displayName,
                        phtoUrl: this.state.profilePic
                    })
                )
                .catch((erorr) => {
                    console.log('user not updated');
                });
            })
        .catch((error) => {
            this.setState({fireErrors: error.message})
        });
    };
    
    
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
                            placeholder="Profile picture URL (optional)"
                            onChange={this.handleChange}
                            value={this.state.profilePic}
                            name="profilePic"/>
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
                            name="password"/>
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

const mapStateToProps = state => ({
    state
})

const mapDispatchToProps = dispatch => ({
    login: () => {
        dispatch(login())
    }
})

export default connect(mapDispatchToProps,mapStateToProps)(Register);
