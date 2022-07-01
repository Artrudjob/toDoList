import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/homepage.module.css'

class Homepage extends React.Component {

	render(): React.ReactNode {
		return (
			<section className={styles.home}>
				<div className={styles.home__box}>
					<div>
						<h1 className={styles.home__title}>To do list</h1>
						<p className={styles.home__text}>Планируйте свой день и следуйте плану.</p>
					</div>
					<Link to="/planday" className={`${styles.home__text} ${styles.home__link}`}><p className={styles.home__paragraph}>Подробнее</p></Link>
				</div>
				<img className={styles.home__img} src={require("../images/planday.png")} alt="Day planning."/>
			</section>
		)
	}
}

export default Homepage;