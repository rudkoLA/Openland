import React from 'react';
import { storiesOf } from '@storybook/react';

import { MenuBar } from './MenuBar';

storiesOf('MenuBar', module).add('default', () => {
	return (
		<div
			style={{
				height: 1000,
			}}
		>
			<MenuBar> </MenuBar>
		</div>
	);
});
