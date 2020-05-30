import React, { Component } from 'react';

import NotesList from '../../components/Notes/NotesList/NotesList';
import Input from '../../components/UI/Input/Input';

import {
	StyledTodo,
	StyledTodoContainer,
	StyledH1,
} from './CreateNotes.styles.js';

class Todo extends Component {
	state = {
		todos: [],
		content: '',
		isValid: false,
	};

	removeTodo = (id) => {
		const todoList = this.state.todos.filter((todo) => {
			return todo.id !== id;
		});
		this.setState({
			todos: todoList,
		});
	};

	addTodo = (todo) => {
		const newTodo = { id: Math.random(), content: todo };

		const newTodos = [...this.state.todos, newTodo];
		this.setState({ todos: newTodos });
	};

	handleChange = (event) => {
		this.setState({
			content: event.target.value,
		});
	};

	handleSubmit = (event) => {
		event.preventDefault();

		const checkValidation = this.state.content;
		if (checkValidation === '') {
			this.setState({ isValid: true });
			return;
		}
		this.addTodo(this.state.content);
		this.setState({
			content: '',
			isValid: false,
		});
	};

	render() {
		const { isValid } = this.state;
		const { todos } = this.state;
		let totalTodos = todos.length;

		return (
			<StyledTodo>
				<StyledH1>Notes</StyledH1>
				<h2>Note: {totalTodos}</h2>
				<StyledTodoContainer>
					<Input
						addTodo={this.addTodo}
						submit={this.handleSubmit}
						change={this.handleChange}
						isValid={isValid ? 'error' : null}
						value={this.state.content}
					/>
				</StyledTodoContainer>
				<NotesList todos={this.state.todos} removeTodo={this.removeTodo} />
			</StyledTodo>
		);
	}
}

export default Todo;
