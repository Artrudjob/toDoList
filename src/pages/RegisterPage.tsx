import React from 'react';
import styles from '../styles/auth.module.css';
import {Register} from '../components/Register/Register';

class RegisterPage extends React.Component<any, any> {

    render() {
        return (
            <section className={styles.login}>
                <Register />
            </section>
        )
    }
}

export default RegisterPage;