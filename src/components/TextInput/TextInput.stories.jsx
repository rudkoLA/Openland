import React from 'react';
import { storiesOf } from '@storybook/react';

import { TextInput } from './TextInput';

storiesOf('TextInput', module).add('default', () => (
	<div style={{ width: 200 }}>
		<TextInput placeholder="Phone number">test </TextInput>
	</div>
));
storiesOf('TextInput', module).add('drop down', () => {
	let options = [{ name: "Ukraine", value: "+380" }, { name: "Poland", value: "+48" }, { name: "Germany", value: "+49" } ];
	return (
		<div style={{ width: 200 }}>
			<TextInput options={options}  kakak={12354454}> </TextInput>
		</div>
	);
});
