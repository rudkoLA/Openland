import React from "react";

import styles from "./Button.module.css";

export class Button extends React.Component {
  render() {
    const { children, theme, className } = this.props;

    let classNames = styles.button;

    if (theme === "white") {
      classNames += " " + styles.whiteButton;
    }
    if (className !== undefined ) {
      classNames +=  " " + className;
    }
    
    return (
      <button className={classNames}>
        {children}
      </button>
    );
  }
}
