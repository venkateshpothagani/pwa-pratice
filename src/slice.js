import { createSlice } from '@reduxjs/toolkit';

export const todoArraySlice = createSlice({
	name: 'todo',
	initialState: {
		list: [],
	},
	reducers: {
		addTodo: (state, action) => {
			state = { ...state, list: state.list.push(action.payload) };
		},
	},
});

// Action creators are generated for each case reducer function
export const { addTodo } = todoArraySlice.actions;

export default todoArraySlice.reducer;
