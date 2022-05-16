import { createSlice } from '@reduxjs/toolkit';

export const statisticsSlice = createSlice({
    name: 'statistics',
    initialState: {
        split: [],
    },
    reducers: {
        setExpenseAmountPerCategory: (state, action) => {
            return { ...state, split: [...action.payload] };
        },
        resetSplit: (state) => {
            return {...state, split: []}
        }
    }
});

export const { setExpenseAmountPerCategory } = statisticsSlice.actions;

export default statisticsSlice.reducer;
