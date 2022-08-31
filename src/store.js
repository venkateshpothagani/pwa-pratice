import { configureStore } from '@reduxjs/toolkit';
import todoArrayReducer from './slice';

export default configureStore({
	reducer: { todoArray: todoArrayReducer },
});
