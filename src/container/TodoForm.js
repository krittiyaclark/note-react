import React from 'react';

import './TodoForm.css';

const AddForm = ({ change, submit, value, validation }) => (
	<form onSubmit={submit} noValidate>
		<input
			type='text'
			onChange={change}
			value={value}
			className={validation ? 'error' : ''}
			required
		/>
		<button type='submit'>Add</button>
	</form>
);

export default AddForm;
