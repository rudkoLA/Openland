import React from 'react';

import { numberToWord } from '../../utils';
import styles from './NumToWords.module.css';

export class NumToWords extends React.Component {
	state = {
        value: ''
    };

	handleChange = (e) => {
		let value = e.target.value.replace(/[^0-9]/g,'');
		let word = numberToWord(value);

		this.setState({ word, value });
	};

	render() {
		const { word, value} = this.state;

		return (
			<div>
				<input value={value} onChange={this.handleChange} type="text" pattern="[0-9]+" />
				<div>{word}</div>
			</div>
		);
	}
}
