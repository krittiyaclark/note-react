import React, { Component } from 'react';

import './TodoForm.css';

class AddForm extends Component {
	state = {
		content: '',
		validation: false,
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
		} else if (checkValidation !== '') {
			this.props.addTodo(this.state);
		}
		this.setState({
			content: '',
			validation: !checkValidation,
		});
	};

	render() {
		let { validation } = this.state;
		let checkValidationInput = null;

		if (validation) {
			checkValidationInput = (
				<span className='error'>
					{validation ? <p>Please enter your todo</p> : null}
				</span>
			);
		}
		return (
			<>
				<form onSubmit={this.handleSubmit} noValidate>
					<input
						type='text'
						onChange={this.handleChange}
						value={this.state.content}
						className={validation ? 'error' : ''}
						required
					/>
					<button type='submit'>Add</button>
				</form>

				{checkValidationInput}
			</>
		);
	}
}

export default AddForm;
