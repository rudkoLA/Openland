import React from 'react';

import styles from './TextInput.module.css';

export class TextInput extends React.Component {
	render() {
		const { placeholder, options } = this.props;
		console.log(this.props);
		// let b = options.map((option) => React.createElement('div', {}, option.name))
    
		if (options) {
      let c = options.map((option) => <option value={option.name} /> );
      
			return (
				<>
					<input className={styles.input} placeholder={placeholder} list="countries"/>
					<datalist id="countries">{c}</datalist>
				</>
			);
		}
		return <input className={styles.input} placeholder={placeholder} />;
	}
}
