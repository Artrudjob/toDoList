import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import styles from './layout.module.css';

function Layout() {

	return (
		<>
			<header className={styles.header}>
				<div className={styles.header__flexBox}>
					<div className={styles.header__img}></div>
					<div>
						<NavLink to="/planning" className={styles.header__link}>Начать планировать</NavLink>
					</div>
				</div>
			</header>
			<main>
				<Outlet />
			</main>
		</>
	)
}

export default Layout;
