import styled from 'styled-components';

export const StyledInputValidation = styled.input`
	border-color: ${(props) => (props.className ? 'red' : '#eee')};
`;

export const StyledSpanCheckValidation = styled.span`
	color: ${(props) => (props.className ? ' red' : '#eee')};
`;
