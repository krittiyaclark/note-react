import React from 'react';

import './Input.css';

const input = ({ change, submit, value, validation }) => (
	<form onSubmit={submit} noValidate>
		<input
			type='text'
			onChange={change}
			value={value}
			className={validation}
			required
		/>
		<button type='submit'>Add</button>
	</form>
);

export default input;
