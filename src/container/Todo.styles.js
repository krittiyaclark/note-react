import styled from 'styled-components';

export const StyledTodo = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;

	@media screen and (max-width: 900px) and (min-width: 500px) {
		width: 900px;
	}
`;

export const StyledTodoContainer = styled.div`
	position: relative;
	width: 100%;
	max-width: 400px;
	margin: 0 auto;
	border-radius: 2px;
	padding: 1.4rem 2rem 1.6rem;
	&:after {
		content: '';
		position: absolute;
		left: 0px;
		right: 0px;
		bottom: 0px;
		z-index: 999;
		height: 2px;
		border-bottom-left-radius: 2px;
		border-bottom-right-radius: 2px;
		background-position: 0% 0%;
		background: linear-gradient(
			to right,
			#b294ff,
			#57e6e6,
			#feffb8,
			#57e6e6,
			#b294ff,
			#57e6e6
		);
		background-size: 500% auto;
		animation: gradient 3s linear infinite;
	}
`;

export const StyledH1 = styled.h1`
	width: 100%;
	font-size: 100px;
	font-weight: 100;
	text-align: center;
	color: rgba(175, 47, 47, 0.15);
	-webkit-text-rendering: optimizeLegibility;
	-moz-text-rendering: optimizeLegibility;
	text-rendering: optimizeLegibility;
`;
