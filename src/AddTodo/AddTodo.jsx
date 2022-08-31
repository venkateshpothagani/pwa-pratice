import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import Success from '../Alerts/Success';
import { addTodo } from '../slice';

function AddTodo() {
	const [todo, setTodo] = useState({});

	const [addTodoAlert, setAddTodoAlert] = useState(true);

	const dispatch = useDispatch();

	const onInputChange = (event) => {
		setTodo({
			...todo,
			[event.target.name]: event.target.value,
		});
	};

	const submitTodo = (event) => {
		event.preventDefault();
		dispatch(addTodo(todo));
		setAddTodoAlert(false);

		setInterval(() => {
			setAddTodoAlert(true);
		}, 2500);
	};

	return (
		<>
			<div hidden={addTodoAlert}>
				<Success />
			</div>
			<Form onSubmit={submitTodo}>
				<Form.Group className="mb-3" controlId="title">
					<Form.Label>Enter title</Form.Label>
					<Form.Control type="text" name="title" placeholder="Enter title" onChange={onInputChange} />
				</Form.Group>

				<Form.Group className="mb-3" controlId="description">
					<Form.Label>Enter description</Form.Label>
					<Form.Control
						type="text"
						name="description"
						placeholder="Enter description"
						onChange={onInputChange}
					/>
				</Form.Group>
				<div className="d-grid gap-2">
					<Button variant="primary" className="btn" type="submit">
						Submit
					</Button>
				</div>
			</Form>

			<div className="d-grid gap-2 mt-4">
				<Link to="/list" className="btn btn-dark" type="submit">
					My Todo List
				</Link>
			</div>
		</>
	);
}

export default AddTodo;
