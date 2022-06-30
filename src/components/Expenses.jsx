import React, { useEffect } from 'react';
import '../css/Expenses.css'
// import { connect } from 'react-redux';
import { addExpense, editExpense, deleteExpense, selectExpenses } from '../Redux/store/expensesSlice';
import { FaRegTrashAlt, FaPlus } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { setExpenseAmountPerCategory, selectCategories } from "../Redux/store/statisticsSlice";


const getExpensesByCategory = (expenses) => {
    return Object.values(expenses.reduce((r, {category, cost}) =>
        (r[category] = {category, totalCost: (r[category]?.totalCost || 0)+ + cost}, r),
    {}))
}

function Expenses() {
    const expenses = useSelector(selectExpenses);
    const dispatch = useDispatch();

    const handleAdd = () => {
        const key = expenses.length;
        dispatch(addExpense(key));
    }

    const handleEdit = (key, e) => {
        dispatch(editExpense( key, {
            [e.target.name]: e.target.value
        }));
    };

    const handleDelete = (key) => {
        dispatch(deleteExpense(key));
    };

    //update expenses by category after user update
    useEffect(() => {
        dispatch(setExpenseAmountPerCategory(getExpensesByCategory(expenses)));
    }, [dispatch, expenses]);

    return (
        <div className="expenseList">
            <h3> Monthly Expenses </h3>
            {expenses.map(expense => {
                return(
                    <li className="expense-item" key={expense.key}>
                        <input type="text" className="description" name="description" defaultValue={expense.description} onChange={e => handleEdit(expense.key, e)}></input>
                        <select className="category" name="category" defaultValue={expense.category} onChange={e => handleEdit(expense.key, e)}>
                            <option name="wants">Wants</option>
                            <option name="needs">Needs</option>
                            <option name="savings">Savings</option>
                        </select>
                        <input type="number" className="cost" name="cost" defaultValue={expense.cost} onChange={e => handleEdit(expense.key, e)}></input>
                        <div className="remove">
                            <button onClick={() => handleDelete(expense.key)}><FaRegTrashAlt /></button>
                        </div> 
                    </li>
                )
            })}
            {console.log(expenses)}
            <button onClick={() => handleAdd()}><FaPlus/>Add expense</button>
        </div>
    )
}


// const mapDispatchToProps = (dispatch) => {
//     return{
//         login: () => {dispatch(login())}
//     }
// }

// const mapStateToProps = (state) => {
//     return {
//         expenses: state.expenses
//     }
// }

export default Expenses;