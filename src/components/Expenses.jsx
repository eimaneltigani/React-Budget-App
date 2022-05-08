import React from 'react';
import '../css/Expenses.css'
import { useDispatch, useSelector } from 'react-redux';
import { addExpense, updateExpense, deleteExpense, setExpenses, selectExpenses } from '../redux/store/expensesSlice';
import { FaRegTrashAlt, FaPlus } from 'react-icons/fa'

function Expenses() {
    const dispatch = useDispatch();
    const expenses = useSelector(selectExpenses);

    // const handleAdd = () => {

    // }

    // const handleUpdate = () => {
        
    // }

    // const handleDelete = (id) => {
    //     dispatch(deleteExpense(id));
    // }

    return (
        <div className="expenseList">
            <h3> Monthly Expenses </h3>
            {expenses.map(expense => {
                return(
                    <li className="expense-item" key= {expense.id}>
                        <div className="expense-desc">{expense.description}</div>
                        <div className="expense-category">{expense.category}</div>
                        <div className="expense-cost">{expense.cost}</div>
                        <div className="remove">
                            <button onClick={() => deleteExpense(dispatch, expense)}><FaRegTrashAlt /></button>
                        </div> 
                        {console.log(expense)}
                    </li>
                )
            })}
            {console.log(expenses)}
            <button ><FaPlus/>Add expense</button>
        </div>
    )
}

export default Expenses;