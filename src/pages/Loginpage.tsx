import React from 'react';
import { Login } from '../components/Login/Login';
import styles from '../styles/auth.module.css';

class LoginPage extends React.Component {

	render() {
		return (
			<section className={styles.login}>
			    <Login />
			</section>
		)
	}
}

export default LoginPage;