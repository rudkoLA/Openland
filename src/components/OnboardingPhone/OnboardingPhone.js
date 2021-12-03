import React from "react";
import { TextInput } from "../TextInput";

import styles from "./OnboardingPhone.module.css"

export class OnboardingPhone extends React.Component {
    render () {
        return (
            <div className={styles.wrapper}> 
                <div className={styles.title}> What's your phone? </div>
                <div className={styles.subTitle}>We'll send you a sign-in code </div>
                <TextInput> </TextInput>
                
            </div>
        )
    }
}
