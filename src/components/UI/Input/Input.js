import React from 'react';

import PropTypes from 'prop-types';

import {
	StyledInputValidation,
	StyledSpanCheckValidation,
} from './Input.styles';

const Input = ({ change, submit, value, isValid }) => {
	let checkValidationInput = null;

	if (isValid) {
		checkValidationInput = (
			<StyledSpanCheckValidation className='error'>
				{isValid ? <p className='errorMS'>Please enter your todo</p> : null}
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
					className={isValid}
					placeholder='What needs to be done?'
					aria-describedby='addTODO'
					required
				/>
				{/* <StyledButton type='submit'>Add</StyledButton> */}
			</form>
			{checkValidationInput}
		</>
	);
};

Input.prototype = {
	onSubmit: PropTypes.func.required,
};

export default Input;
