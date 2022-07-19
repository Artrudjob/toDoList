import React from 'react'; 
import styles from './login.module.css';
import closeEye from '../../images/closeEye.png';
import openEye from '../../images/openEyE.png';

export class Login extends React.Component {
	
	render() {
		return (
			<div className={styles.login}>
				<h1 className={styles.login__title} >Войти</h1>
				<form>
					<fieldset className={styles.login__box}>
						<input className={styles.login__input} type='email' placeholder='Ваш e-mail' required></input>
						<input className={styles.login__input} type='password' placeholder='Ваш пароль' minLength={7} required></input>
						<img className={styles.login__img} src={`${closeEye}`} alt='Значок глаза' />
						<button className={styles.login__button} type='submit' disabled={true}>Войти</button>
					</fieldset>
				</form>
			</div>
		)
	}
}