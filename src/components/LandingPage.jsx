import React from 'react';
import '../css/LandingPage.css'
import Income from './Income';
import Header from './Header';
import Expenses from './Expenses';
import { connect } from 'react-redux';
import { handleFirebaseData } from '../Services/handleData';
import { withFirebase } from 'react-redux-firebase';
import Statistics from './Statistics';


class LandingPage extends React.Component {
    // componentDidMount() {
    //     const {authUser, 
    //         firebase, 
    //         onHandleFirebaseData, 
    //         onHandleSampleData 
    //     } = this.props;

    //     authUser ? onHandleFirebaseData(authUser.uid, firebase) : onHandleSampleData(firebase);
    // }

    render() {
        return(
            <div>
                <Header />
                <div className="main">
                    <div className="left-col">
                        <div className="app-desc">
                            <h2 className="own">Own your money</h2>
                            <p>This virtual budget program keeps you on track of your spending habits. Spend, save, and give toward what's important in life. </p>
                        </div>
                        <div className="user-income">
                            <h3>Monthly Income</h3>
                            <div className="income">
                                <Income />
                            </div>
                        </div>
                        <div className="monthly-expenses">
                            <Expenses />
                        </div>
                        <div className="nextSteps">
                            <h3>What now?</h3>
                            <p>Sign up to save your data and set budgeting goals to track against!</p>
                        </div>
                    </div>
      
                <div className="right-col">
                    <div className="expenses-desc">
                        <h2>How do you spend?</h2>
                        <div className="donut">
                            <Statistics />
                        </div>
                        {/* <div className="report">
                            <h3>Breakdown of expenses</h3>
                        </div> */}
                    </div>
                    
                </div>
                </div>
            </div>
        )
    }
}


const mapDispatchToProps = (dispatch) => {
    return{
        onHandleFirebaseData: (uid, firebase) => 
            {dispatch(handleFirebaseData(uid, firebase))},
        // onHandleSampleData: (firebase) => dispatch(handleDefaultData(firebase))
    }
}

const mapStateToProps = ( state ) => {
    return {authUser: state.user}
}

export default connect(mapStateToProps,mapDispatchToProps)(withFirebase(LandingPage));