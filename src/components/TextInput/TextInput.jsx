import React from 'react';

import styles from './TextInput.module.css';

export class TextInput extends React.Component {
	render() {
		const { placeholder, options, readOnly, value, className } = this.props;
		
		console.log(this.props);
		// let b = options.map((option) => React.createElement('div', {}, option.name))

		if (options) {
			let c = options.map((option) => <option value={option.name} />);

			return (
				<>
					<input
						className={styles.input + ' ' + className}
						placeholder={placeholder}
						value={value}
						list="countries"
					/>
					<datalist id="countries">{c}</datalist>
				</>
			);
		}

		return (
			<input
				className={styles.input + ' ' + className}
				placeholder={placeholder}
				readOnly={readOnly}
				value={value}
			/>
		);
	}
}

/**
 <input list="browsers" name="myBrowser" /></label>
<datalist id="browsers">
  <option value="Chrome">
  <option value="Firefox">
  <option value="Internet Explorer">
  <option value="Opera">
  <option value="Safari">
  <option value="Microsoft Edge">
</datalist>
 */
