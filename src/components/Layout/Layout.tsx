import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import styles from './layout.module.css';

class Layout extends React.Component {

	render(): React.ReactNode {
		return (
			<>
				<header className={styles.header}>
				<div className={styles.header__flexBox}>
					<div className={styles.header__img}></div>
					<div>
						<NavLink to="/profile" className={styles.header__link}>Войти</NavLink>
					</div>
				</div>
				</header>
				<main>
					<Outlet />
				</main>
			</>
		)
	}
}

export default Layout;
