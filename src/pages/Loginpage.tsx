import React from 'react';
import { Login } from '../components/Login/Login';
import styles from '../styles/loginpage.module.css';

class Loginpage extends React.Component {

	render() {
		return (
			<section className={styles.login}>
			    <Login />
			</section>
		)
	}
}

export default Loginpage;