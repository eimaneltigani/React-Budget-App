import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import userReducer from './store/userSlice';
import expensesSlice from './store/expensesSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    expenses: expensesSlice
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false
  })
});

