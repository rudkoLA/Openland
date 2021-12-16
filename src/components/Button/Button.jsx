import React from 'react';

import styles from './Button.module.css';

export const Button = (props) => {
	const { children, theme, className } = props;

	let classNames = styles.button;

	if (theme === 'white') {
		classNames += ' ' + styles.whiteButton;
	}
	if (theme === 'icon') {
		classNames += ' ' + styles.iconButton;
	}
	if (className !== undefined) {
		classNames += ' ' + className;
	}

	return <button className={classNames}>{children}</button>;
};
