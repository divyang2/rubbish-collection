import { configureStore } from '@reduxjs/toolkit';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './rootReducer';

//adding all the reducer in one store and used thunkMiddleware
const store = configureStore({
  reducer: rootReducer,
  middleware: [thunkMiddleware],
});

export default store;
