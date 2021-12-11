import React from "react";

import logo from "../../images/logo.png";
import { Button } from "../Button/";

import styles from "./OnboardingPage.module.css";

export class OnboardingPage extends React.Component {
    render () {
        return (
            <div className={styles.wrapper}>
                <img className={styles.logo} src={logo}/>
                <div className={styles.title}>Openland</div>
                <div className={styles.subTitle}>Modern social network </div>
                <div className={styles.subTitle}> built for you, not advertisers </div>
                <Button className={styles.topButton}>Continue with phone</Button>
                <Button theme="white">Continue with email</Button>

            </div>
        );
    };
};