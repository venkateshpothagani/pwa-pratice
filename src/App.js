import { BrowserRouter, Route, Routes } from 'react-router-dom';

import AddTodo from './AddTodo/AddTodo';
import ListTodo from './ListTodo/ListTodo';

import './App.css';

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route path="/list" element={<ListTodo />} />
					<Route path="/" element={<AddTodo />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
