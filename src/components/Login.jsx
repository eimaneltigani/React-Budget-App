import React from "react";
import '../css/Login.css';
import { login } from "../Redux/store/userSlice";
import { connect } from 'react-redux';
import { withFirebase } from "./Firebase";
import { updateProfile } from "@firebase/auth";
import { withRouter } from "./withRouter";


class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            displayName: '',
            profilePic: '',
            fireErrors: '',
            redirect: false
        };
    }

    handleChange = e => {
        this.setState({[e.target.name]: e.target.value});
    }

    handleClick = () => {
        this.setState(prevState => ({
            redirect: !prevState.redirect
        }))
    }

    login = () => {
        this.props.login();
    }

    loginToApp = (e) => {
        const { email, password } = this.state

        this.props.firebase
            .doSignInWithEmailAndPassword(email, password)
                .then(() => {
                    this.props.navigate('/Dashboard')
                })
            .catch((error) => {
                this.setState({fireErrors: error.message});
        });

        e.preventDefault();
    };


    register = (e) => {
        const { email, password } = this.state
        e.preventDefault();
        console.log('register the user');

        this.props.firebase
            .doCreateUserWithEmailAndPassword(email, password)
            .then((userAuth) => {
                updateProfile(userAuth.user, {
                    displayName: this.state.displayName,
                    photoURL: this.state.profilePic
                });
                this.props.navigate('/Dashboard')
            })
        .catch((error) => {
            this.setState({fireErrors: error.message})
        });
    };
    
    render () {
        let errorNotification = this.state.fireErrors ? 
        ( <div className="Error"> {this.state.fireErrors} </div> ) : null;

        return (
            <>
                {errorNotification}
                <div className="mainBlock">
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
                            value={this.state.email}
                            onChange={this.handleChange}
                            name="email"/>
                        <input type="password"
                            className="regField"
                            placeholder="Password"
                            value={this.state.password}
                            onChange={this.handleChange}
                            name="password"/>
                        {this.state.redirect ? (
                            <React.Fragment>
                                <input type="submit" className="submitBtn" onClick={this.loginToApp} value="ENTER" />
                                <span className="underLine">
                                    Not Registered?  <button className="linkBtn" onClick={this.handleClick}>Create an account</button>
                                </span>    
                            </React.Fragment>
                        ) : (
                            <React.Fragment>
                                <input type="text"
                                    className="regField"
                                    placeholder="Profile picture URL (optional)"
                                    onChange={this.handleChange}
                                    value={this.state.profilePic}
                                    name="profilePic"/>
                                <input onClick={this.register} type="submit" className="submitBtn" value="REGISTER" />
                                <span className="underLine">
                                    Have an account? <button className="linkBtn" onClick={this.handleClick}>Sign in here</button>
                                </span>
                            </React.Fragment>   
                        )}     
                    </form>  
                </div>
            </>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        login: () => {dispatch(login())}
    }
}

const mapStateToProps = (state) => {
    return {state}
}

export default connect(mapDispatchToProps,mapStateToProps)(withRouter(withFirebase(Login)));