import React from 'react';

import styles from './MenuBar.module.css';

import { ReactComponent as LogoIcon } from './LogoIcon.svg';
import { ReactComponent as CompassIcon } from './CompassIcon.svg';
import { ReactComponent as UserIcon } from './UserIcon.svg';
import { Button } from '../Button';

export class MenuBar extends React.Component {
	render() {
		return (
			<div className={styles.wrapper}>
				<Button className={styles.iconButton} theme="icon">
					<LogoIcon />
				</Button>
				<Button className={styles.iconButton} theme="icon">
					<CompassIcon />
				</Button>
				<Button className={styles.iconButton} theme="icon">
					<UserIcon />
				</Button>
			</div>
		);
	}
}
