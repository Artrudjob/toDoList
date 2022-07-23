import React, {FormEvent} from 'react';
import styles from "../Register/register.module.css";

type TState = {
    type: string;
    color: string;
    passwordText: string;
    newPassword: string;
    repeatPassword: string;
    validPasswords: boolean;
    disabled: boolean
}

export class Register extends React.Component<any, TState> {
    constructor(props: any) {
        super(props);
        this.state = {
            type: 'password',
            color: 'black',
            passwordText: 'Показать пароль',
            newPassword: '',
            repeatPassword: '',
            validPasswords: true,
            disabled: true
        }
        this._handleChange = this._handleChange.bind(this);
        this._validateField = this._validateField.bind(this);
    }

    //Валидация нового пароля и повторяющегося
    _validateField() {
        if (this.state.newPassword !== this.state.repeatPassword) {
            this.setState(() => {
                return {
                    validPasswords: false,
                    disabled: true
                };
            })
        } else {
            this.setState(() => {
                return {
                    validPasswords: true,
                    disabled: false
                };
            })
        }
    }

    //обработчик inputs
    _handleChange(e: React.ChangeEvent<HTMLInputElement>): void {
        const name = e.target.name;
        const value = e.target.value;
        if (name === 'newPassword') {
            this.setState(() => {
                return {newPassword: value};
            },
                () => {this._validateField()})
        } else {
            this.setState(() => {
                return {repeatPassword: value};
            },
                () => {this._validateField()})
        }

    }

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
                            <input className={styles.register__input} type={this.state.type} value={this.state.newPassword}
                                   placeholder='Напишите пароль' minLength={7} name='newPassword' required onChange={this._handleChange}></input>
                        </label>
                        <label className={styles.register__text}>Повторите пароль
                            <input className={styles.register__input} type={this.state.type} value={this.state.repeatPassword}
                                   placeholder='Повторите пароль' minLength={7} name='repeatPassword' required onChange={this._handleChange}></input>
                            {!this.state.validPasswords && <p className={styles.register__warn}>Пароли не совпадают</p>}
                        </label>
                        <button className={styles.register__password} style={{color: `${this.state.color}`}} type='button' onClick={() => {this._showHidePassword()}}>{this.state.passwordText}</button>
                        <button className={styles.register__button} type='submit' disabled={this.state.disabled}>Зарегистрироваться</button>
                    </fieldset>
                </form>
            </div>
        )
    }
}