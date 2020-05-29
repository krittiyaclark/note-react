import React from 'react';

import './Input.css';
import { StyledInputValidation } from './Input.styles';
import { StyledSpanCheckValidation } from './Input.styles';

const input = ({ change, submit, value, validation }) => {
	let checkValidationInput = null;

	if (validation) {
		checkValidationInput = (
			<StyledSpanCheckValidation className='error'>
				{validation ? <p>Please enter your todo</p> : null}
			</StyledSpanCheckValidation>
		);
	}
	return (
		<>
			<form onSubmit={submit} noValidate>
				<StyledInputValidation
					type='text'
					onChange={change}
					value={value}
					className={validation}
					required
				/>
				<button type='submit'>Add</button>
			</form>
			{checkValidationInput}
		</>
	);
};

export default input;
