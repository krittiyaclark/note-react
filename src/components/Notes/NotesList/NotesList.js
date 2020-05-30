import React from 'react';

import { StyledTodoList, StyledTodoListContainer } from './NotesList.styles';

const notesList = ({ todos, removeTodo }) => {
	const todoList = todos.length ? (
		todos.map((todo) => {
			return (
				<StyledTodoListContainer key={todo.id}>
					<StyledTodoList
						onClick={() => {
							removeTodo(todo.id);
						}}>
						{todo.content}
					</StyledTodoList>
				</StyledTodoListContainer>
			);
		})
	) : (
		<p>You have no todo!</p>
	);

	return <StyledTodoListContainer>{todoList}</StyledTodoListContainer>;
};

export default notesList;
