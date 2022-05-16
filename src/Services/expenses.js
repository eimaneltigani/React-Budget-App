// import { setExpenses, newExpense, editExpense, deleteExpense } from "../Redux/store/expensesSlice";
// import { db } from "../Firebase/fire";
// import { uid } from "uid";
// import { set, ref } from "@firebase/database";
// import { uid } from "uid";

// export const getExpenses = () => {
//     return (dispatch) => {
//         db.ref
//     }
// }

// export const NewExpense = (expenseData = {}) => {
//     return (dispatch) => {
//         const uuid = uid();
//         const {
//             description = '',
//             category = '',
//             amount = 0
//         } = expenseData;
//         const expense = { description, category, amount };

//         set(ref(db, 'expenses'), expense).then(() => {
//             dispatch(newExpense())
//         });
//     };
// };
