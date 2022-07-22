import React, {FormEvent} from 'react';
import styles from "../Register/register.module.css";

type TState = {
    type: string;
    color: string;
    passwordText: string
}

export class Register extends React.Component<any, TState> {
    constructor(props: any) {
        super(props);
        this.state = {
            type: 'password',
            color: 'black',
            passwordText: 'Показать пароль'
        }
    }

    _checkedPassword() {}

    _showHidePassword() {
        this.setState((prevState) => ({
            type: prevState.type === 'text' ? 'password' : 'text',
            color: prevState.color === 'black' ? '#DF2626' : 'black',
            passwordText: prevState.passwordText === 'Скрыть пароль' ? 'Показать пароль' : 'Скрыть пароль'
        }))
    }

    _handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
    }

    render() {
        return(
            <div className={styles.register}>
                <h1 className={styles.register__title}>Зарегистрироваться</h1>
                <form onSubmit={this._handleSubmit}>
                    <fieldset className={styles.register__box}>
                        <label className={styles.register__text}>Ваше имя
                            <input className={styles.register__input} type='text' placeholder='Напишите своё имя' required />
                        </label>
                        <label className={styles.register__text}>Ваш e-mail
                            <input className={styles.register__input} type='email' placeholder='Напишите свой e-mail' required></input>
                        </label>
                        <label className={styles.register__text}>Придумайте пароль
                            <input className={styles.register__input} type={this.state.type} placeholder='Напишите пароль' minLength={7} required></input>
                        </label>
                        <label className={styles.register__text}>Повторите пароль
                            <input className={styles.register__input} type={this.state.type} placeholder='Повторите пароль' minLength={7} required></input>
                        </label>
                        <button className={styles.register__password} style={{color: `${this.state.color}`}} type='button' onClick={() => {this._showHidePassword()}}>{this.state.passwordText}</button>
                        <button className={styles.register__button} type='submit'>Зарегистрироваться</button>
                    </fieldset>
                </form>
            </div>
        )
    }
}