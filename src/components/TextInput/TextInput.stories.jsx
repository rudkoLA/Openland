import React from 'react';
import { storiesOf } from '@storybook/react';

import { TextInput } from './TextInput';

storiesOf('TextInput', module).add('default', () => (
	<div style={{ width: 200 }}>
		<TextInput placeholder="Phone number">test </TextInput>
	</div>
));

storiesOf('TextInput', module).add('Read Only', () => (
	<div style={{ width: 200 }}>
		<TextInput readOnly={true} value="+380">test </TextInput>
	</div>
));

storiesOf('TextInput', module).add('Drop Down', () => {
	let options = [{ name: "Ukraine", value: "+380" }, { name: "Poland", value: "+48" }, { name: "Germany", value: "+49" } ];
	return (
		<div style={{ width: 200 }}>
			<TextInput options={options} > </TextInput>
		</div>
	);
});
