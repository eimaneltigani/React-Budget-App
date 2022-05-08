import { createSlice } from "@reduxjs/toolkit";
import defaultExpenses from "../../components/defaultExpenses";

export const expensesSlice = createSlice({
    name: 'expenses',
    initialState: {
        expenses: defaultExpenses,
    },
    reducers: {
        setExpenses: (state, action) => {
            return { ...state, expenses: [...action.payload]};
        },
        addExpense: (state, action) => {
            return { ...state, expenses: [...action.payload, ...state.expenses]};
        },
        editExpense: (state, action) => {
            const expenses = state.expenses.map(expense => {
                if (expense.id === action.payload.id) {
                    expense = action.payload
                }
                return expense;
            });
            return {...state, expenses: [...expenses]};
        },
        deleteExpense: (state, action) => {
            const expenses = state.expenses.filter(expense => 
                expense.id !== action.payload.id);
            return {...state, expenses: [...expenses]};
        },
    } 
})

export const { setExpenses, addExpense, editExpense, deleteExpense } = expensesSlice.actions;

//Selector
export const selectExpenses = (state) => state.expenses.expenses;

export default expensesSlice.reducer;