import React from "react";
import '../css/Login.css';
import { Link } from 'react-router-dom';
import { login } from "../redux/store/userSlice";
import { connect } from 'react-redux';
import { auth } from '../config/fire';
import { signInWithEmailAndPassword } from 'firebase/auth';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            fireErrors: ''
        }
    }

    login = () => {
        this.props.login();
    }

    loginToApp = (e) => {
        e.preventDefault();

        signInWithEmailAndPassword(auth, this.state.email, this.state.password)
        .then((userAuth) => {
            this.login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: userAuth.user.displayName,
                photoUrl: userAuth.user.photoURL,
            })
        })
        .catch((error) => {
            this.setState({fireErrors: error.message})
        });
    };

    handleChange = e => {
        this.setState({[e.target.name]: e.target.value});
    }
    
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
                        <input type="submit" className="submitBtn" onClick={this.loginToApp} value="ENTER" />
                    </form>
                    <span className="underLine">
                        Not Registered?  <Link to="/Register"><button className="linkBtn">Create an account</button></Link>
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

export default connect(mapStateToProps,mapDispatchToProps)(Login);