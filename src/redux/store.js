import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import userSlice from './store/userSlice';
import expensesSlice from './store/expensesSlice';
import incomeSlice from './store/incomeSlice';
import statisticsSlice from './store/statisticsSlice';

export const store = configureStore({
    reducer: {
      user: userSlice,
      expenses: expensesSlice,
      income: incomeSlice,
      split: statisticsSlice
    },
    middleware: (getDefaultMiddleWare) => getDefaultMiddleWare()
});


