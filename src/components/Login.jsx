import React from "react";
import '../css/Login.css';
import { Link } from 'react-router-dom';

class Login extends React.Component {
    state = {
        email: '',
        password: '',
        fireErrors: ''
    }
    
    render () {
        return (
            <>
                <div className="mainBlock">
                    <form>
                        <input type="text"
                            className="regField"
                            placeholder="Email"
                            name="email"/>
                        <input type="password"
                            className="regField"
                            placeholder="Password"
                            name="password"/>
                        <input type="submit" className="submitBtn" value="ENTER" />
                    </form>
                    <span className="underLine">
                        Not Registered?  <Link to="/Register"><button className="linkBtn">Create an account</button></Link>
                    </span>
                </div>
            </>
        )
    }
}

export default Login;