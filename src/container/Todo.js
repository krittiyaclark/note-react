import React, { Component } from 'react';

import TodoApp from '../components/TodoApp';
import Input from '../components/UI/Input/Input';

class Todo extends Component {
	state = {
		todos: [],
		content: '',
		validation: false,
	};

	removeTodo = (id) => {
		const todoList = this.state.todos.filter((todo) => {
			return todo.id !== id;
		});
		this.setState({
			todos: todoList,
		});
	};

	// addTodo = (todo) => {
	// 	todo.id = Math.random();
	// 	let newTodos = [...this.state.todos, todo];
	// 	this.setState({
	// 		todos: newTodos,
	// 	});
	// };

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
			this.setState({ validation: true });
			return;
		}
		this.addTodo(this.state.content);
		this.setState({
			content: '',
			validation: false,
		});
	};

	render() {
		let { validation } = this.state;
		let { todos } = this.state;

		let checkValidationInput = null;

		if (validation) {
			checkValidationInput = (
				<span className='error'>
					{validation ? <p>Please enter your todo</p> : null}
				</span>
			);
		}

		return (
			<div className='todo-app container'>
				<h1 className='center blue-text'>Todo's</h1>
				<TodoApp todos={this.state.todos} removeTodo={this.removeTodo} />
				<Input
					addTodo={this.addTodo}
					submit={this.handleSubmit}
					change={this.handleChange}
					value={this.state.content}
				/>

				{checkValidationInput}
			</div>
		);
	}
}

export default Todo;
