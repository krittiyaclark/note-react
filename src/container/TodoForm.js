import React, { Component } from 'react';

import '../App.css';

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

		// if (this.state.content === '') {
		// 	this.setState({ error: true });
		// 	return;
		// } else if (this.state.content !== '') {
		// 	this.props.addTodo(this.state);
		// } else if (this.state.content !== '') {
		// 	this.props.addTodo(this.state.content);
		// }
		// this.setState({
		// 	content: '',
		// 	error: false,
		// });
		const checkValidation = this.state.content;
		if (checkValidation === '') {
			this.setState({ validation: true });
			return;
		} else if (checkValidation !== '') {
			this.props.addTodo(this.state);
		}
		this.setState({
			content: '',
		});
	};

	// checkValidation = () => {
	// 	if (this.state.content === '') {
	// 	} else if (this.state.content !== '') this.setState({ validation: true });
	// };

	render() {
		let { validation } = this.state;
		// if (validation) {
		// 	return <p>Form is not valid</p>;
		// }
		return (
			<>
				<form onSubmit={this.handleSubmit} noValidate>
					<input
						type='text'
						onChange={this.handleChange}
						value={this.state.content}
						// className={validation ? 'error' : ''}
						required
					/>
					<button type='submit'>Add</button>
				</form>

				{validation ? <p>Please enter your todo</p> : null}
			</>
		);
	}
}

export default AddForm;
