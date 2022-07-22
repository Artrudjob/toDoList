import React, {FormEvent} from 'react';
import styles from './login.module.css';
import closeEye from '../../images/closeEye.png';
import openEye from '../../images/openEyE.png';

type TState = {
	type: string;
	icon: string;
	eye: string;
}

export class Login extends React.Component<{}, TState> {
	constructor(props: any) {
		super(props);
		this.state = {
			type: 'password',
			icon: `${closeEye}`,
			eye: 'Перечеркнутый глаз'
		}
	}

	_showHidePassword() {
		this.setState((prevState) => ({
			type: prevState.type === 'password' ? 'text' : 'password',
			icon: prevState.icon === `${closeEye}` ? `${openEye}` : `${closeEye}`,
			eye: prevState.eye === 'Перечеркнутый глаз' ? 'Открытый глаз' : 'Перечеркнутый глаз'
		}))
	}

	_handleSubmit(e: FormEvent<HTMLFormElement>) {
		e.preventDefault()
	}

	render() {
		return (
			<div className={styles.login}>
				<h1 className={styles.login__title}>Войти</h1>
				<form onSubmit={this._handleSubmit}>
					<fieldset className={styles.login__box}>
						<input className={styles.login__input} type='email' placeholder='Ваш e-mail' required></input>
						<input className={styles.login__input} type={this.state.type} placeholder='Ваш пароль' minLength={7} required></input>
						<img className={styles.login__img} src={this.state.icon} alt={this.state.eye} onClick={() => {this._showHidePassword()}}/>
						<button className={styles.login__button} type='submit'>Войти</button>
					</fieldset>
				</form>
			</div>
		)
	}
}