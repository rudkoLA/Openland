import React from 'react';
import { TextInput } from '../TextInput';

import styles from './OnboardingPhone.module.css';

export class OnboardingPhone extends React.Component {
	render() {
		let countryOptions = [
			{ name: 'Ukraine', value: '+380' },
			{ name: 'Poland', value: '+48' },
			{ name: 'Germany', value: '+49' },
		];
		return (
			<div className={styles.wrapper}>
				<div className={styles.title}> What's your phone? </div>
				<div className={styles.subTitle}>We'll send you a sign-in code </div>
				<TextInput
					options={countryOptions}
					className={styles.countryOptions}
                    value="Ukraine"
				></TextInput>
				<div className={styles.row}>
					<TextInput readOnly className={styles.countryCode} value="+380"></TextInput>
					<TextInput className={styles.phoneNumber} placeholder="Phone number"> </TextInput>
				</div>
			</div>
		);
	}
}
