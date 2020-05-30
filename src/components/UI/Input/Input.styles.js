import styled from 'styled-components';

export const StyledInputValidation = styled.input`
	border-color: ${(props) => (props.className ? 'red' : '#eee')};

	border-style: none;
	background: transparent;
	outline: none;
	-webkit-box-flex: 1;
	flex-grow: 1;
	color: #bfd2ff;
	font-size: 1.8rem;
	line-height: 2.4rem;
	vertical-align: middle;
`;

export const StyledSpanCheckValidation = styled.span`
	color: ${(props) => (props.className ? ' red' : '#eee')};
`;
