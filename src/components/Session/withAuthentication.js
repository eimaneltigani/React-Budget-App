import React from 'react';

import AuthUserContext from './context';
import { withFirebase } from '../Firebase';

// import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from '../../Redux/store/userSlice';
import { onAuthStateChanged } from '@firebase/auth';
import { connect } from 'react-redux';



const withAuthentication = Component => {
  class WithAuthentication extends React.Component {

      componentDidMount() {
        this.listener = onAuthStateChanged(this.props.firebase.auth, 
          authUser => {
            //dispath user information for persistance in redux state
            authUser 
              ? this.props.login({
                email: authUser.email,
                uid: authUser.uid,
                displayName: authUser.displayName,
                photoUrl: authUser.photoURL,
              }) :
              this.props.logout();
          }
        );
      }

      componentWillUnmount() {
        this.listener();
      }

      render() {
        const user = this.props.state.user;
        return (
          <AuthUserContext.Provider value={user}>
            <Component {...this.props} />
          </AuthUserContext.Provider>
        );
      }
  }

  const mapStateToProps = (state) => {
    return {state}
  }

  const mapDispatchToProps = (dispatch) => {
    return{
        logout: () => {dispatch(logout())},
        login: () => {dispatch(login())}
    }
  }

  return connect(mapStateToProps, mapDispatchToProps)(withFirebase(WithAuthentication));

}

export default withAuthentication;
