import React from 'react';
import { connect } from 'react-redux';
import { auth } from '../config/fire';
import { authUserSet } from '../redux/ducks/authReducer'

class Authentication extends React.Component {
    state = {
        user: 1,
        loading: true
    }

    componentDidMount() {
        this.authListener();
    }

    authListener() {
        auth.onAuthStateChanged((authUser) => {
            if (authUser) {
                onSetAuthUser(authUser);
            } else {
                onSetAuthUser(null);
            }
        })
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSetAuthUser: (authUser) => {
            dispatch(authUserSet(authUser))
        }
    }
}

export default connect(mapDispatchToProps)(Authentication);