import React from 'react';

import { StyledMain } from '../Layout/Layout.styles';

const layout = (props) => (
	<>
		<div>Toolbars, sidedraw</div>
		<StyledMain>{props.children}</StyledMain>
	</>
);

export default layout;
