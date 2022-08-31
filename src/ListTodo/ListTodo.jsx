import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const ListTodo = () => {
	const todoArray = useSelector((state) => state.todoArray.list);
	return (
		<>
			<div className="list-group">
				{(() => {
					if (todoArray.length === 0) {
						return (
							<>
								<Link to="/" className="list-group-item list-group-item-action" aria-current="true">
									No todo added yet
								</Link>
							</>
						);
					}
				})()}

				{todoArray.map((todo, index) => {
					return (
						<Link to="/" className="list-group-item list-group-item-action" aria-current="true" key={index}>
							{todo.title}
						</Link>
					);
				})}
			</div>
		</>
	);
};

export default ListTodo;
