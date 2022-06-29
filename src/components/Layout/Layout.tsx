import React from 'react';
import styles from './layout.module.css';

class Layout extends React.Component {

	render() {
		return (
			<header className={styles.header}>
				<div className={styles.header__flexBox}>
					<div className={styles.header__img}></div>
					<div>
						<p>Войти</p>
					</div>
				</div>
			</header>
		)
	}
}

export default Layout;
