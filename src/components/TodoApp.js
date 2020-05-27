import React from 'react';

const Todos = ({ todos, removeTodo, error }) => {
	const todoList = todos.length ? (
		todos.map((todo) => {
			return (
				<div className='collection-item' key={todo.id}>
					<span
						onClick={() => {
							removeTodo(todo.id);
						}}>
						{todo.content}
					</span>
				</div>
			);
		})
	) : (
		<p className='center'>You have no todo!</p>
	);

	return <div className='todos collection'>{todoList}</div>;
};

export default Todos;
