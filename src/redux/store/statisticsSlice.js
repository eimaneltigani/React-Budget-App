import { createSlice } from '@reduxjs/toolkit';

export const statisticsSlice = createSlice({
    name: 'statistics',
    initialState: {
        expenseAmountPerCategrory: [],
    },
    reducers: {
        setExpenseAmountPerCategory: (state, action) => {
            return { ...state, expenseAmountPerCategrory: [...action.payload] };
        },
    }
});

export const { setExpenseAmountPerCategory } = statisticsSlice.actions;

export const selectCategories = (state) => state.statistics.expenseAmountPerCategrory;

export default statisticsSlice.reducer;
