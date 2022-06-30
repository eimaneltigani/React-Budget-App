import { createSlice } from "@reduxjs/toolkit";
import { defaultExpenses } from "../../components/constants";
import { PayloadAction } from "@reduxjs/toolkit";


// export const setExpensesError = createAction('setExpensesError');
// export const newExpenseError = createAction('newExpenseError');
// export const editExpenseError = createAction('editExpenseError');
// export const deleteExpenseError = createAction('deleteExpenseError');


export const expensesSlice = createSlice({
    name: 'expenses',
    initialState: {
        expenses: defaultExpenses,
    },
    reducers: {
        recieveExpenses: (state, action) => {
            return {...state, expenses: [action.payload]};
        },
        addExpense: (state, action) => {
            return { ...state, expenses: [...state.expenses, action.payload]};
        },
        editExpense: {
            reducer: (state, action) => {
                const { key, value } = action.payload;
                const expenses = state.expenses.map(expense =>{
                    if (expense.key !== key) return expense
                    return {...expense, ...value}
                })
                return {...state, expenses: [...expenses]}
            },
            prepare: (key, value) => {
                return {
                    payload: {key, value}
                }
            }
        },
        deleteExpense: (state, action) => {
            const expenses = state.expenses.filter(expense =>
                expense.key !== action.payload)
            return {...state, expenses: [...expenses]};
        },
    } 
})

export const { recieveExpenses, addExpense, editExpense, deleteExpense } = expensesSlice.actions;

//Selector
export const selectExpenses = (state) => state.expenses.expenses;

export default expensesSlice.reducer;