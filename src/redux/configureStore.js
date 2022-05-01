import { combineReducers, createStore } from 'redux';
import AuthReducer from './ducks/authReducer';
import { firebaseReducer } from 'react-redux-firebase';

const reducer = combineReducers({
    authentication: AuthReducer,
    firebase: firebaseReducer
});

const store = createStore(reducer);

export default store;
