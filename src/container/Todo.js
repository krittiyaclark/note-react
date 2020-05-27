import React, { Component } from 'react';

import TodoApp from '../components/TodoApp';
import TodoForm from './TodoForm';

class Todo extends Component {
	state = {
		todos: [],
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
		todo.id = Math.random();
		let newTodos = [...this.state.todos, todo];
		this.setState({
			todos: newTodos,
		});
	};

	render() {
		return (
			<div className='todo-app container'>
				<h1 className='center blue-text'>Todo's</h1>
				<TodoApp todos={this.state.todos} removeTodo={this.removeTodo} />
				<TodoForm addTodo={this.addTodo} />
			</div>
		);
	}
}

export default Todo;
