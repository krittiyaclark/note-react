import React, { Component } from 'react';

import '../App.css';

class AddForm extends Component {
	state = {
		content: '',
		error: true,
	};

	handleChange = (event) => {
		this.setState({
			content: event.target.value,
		});
	};

	handleSubmit = (event) => {
		event.preventDefault();

		if (this.state.content === '') {
			this.setState({ error: true });
			// return;
		} else if (this.state.content !== '') {
			this.props.addTodo(this.state);
		} else if (this.state.content !== '') {
			this.props.addTodo(this.state.content);
		}
		this.setState({
			content: '',
			error: false,
		});
	};

	render() {
		// let { error } = this.state;
		// if (error)
		// {
		// 	return <p>Form is not valid</p>
		// }
		return (
			<>
				<form onSubmit={this.handleSubmit} noValidate>
					<input
						type='text'
						onChange={this.handleChange}
						value={this.state.content}
						// className={error ? 'error' : ''}
						required
					/>
				</form>
				<button onClick={this.handleSubmit}>Add</button>

				{/* <p>{error}</p> */}
			</>
		);
	}
}

export default AddForm;
