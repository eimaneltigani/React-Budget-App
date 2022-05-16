import { defaultExpenses, defaultIncome } from "../components/defaultExpenses";
import { recieveIncome } from "../Redux/store/incomeSlice";
import { recieveExpenses } from "../Redux/store/expensesSlice";
import { onValue } from "@firebase/database";


//convert data to Firebase object
const arrayToFirebaseObject = (array, firebase, path) => {
    return array.reduce((obj, item) => {
        const key = firebase.key(path);
        return {
            ...obj,
            [key]: item
        };
    }, {})
}


//if user not logged in, dispatch default data 
// export const handleDefaultData = (firebase) => (dispatch) => {
//     dispatch(recieveIncome(arrayToFirebaseObject(defaultIncome, firebase, 'income')));
//     dispatch(
//         recieveExpenses(arrayToFirebaseObject(defaultExpenses, firebase, 'expenses'))
//     );
// }


export const handleFirebaseData = (uid, firebase) => {
    return dispatch => {
        return onValue(firebase.userRef(uid), (snapshot) => { 
            const { income, expenses } = snapshot.val();

            dispatch(recieveIncome(income));
            dispatch(recieveExpenses(expenses))
        })
    }
}