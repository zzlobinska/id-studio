import Button from '../../../Components/UI/Button';
import img from '../../../Components/img/img.png';
import styles from './HeroPage.module.scss';

const HeroPage = () => {
	return (
		<div className={styles.hero}>
			<div className={styles.main}>
				<div className={styles.main__text}>
					<h1 className={styles.main__header}>We create your space better</h1>
					<p className={styles.main__below}>
						Our team creates comfortable spaces for our clients. We've been
						designing your everyday life and work through great ideas since
						1999.
					</p>
				</div>
				<Button text={'get started'} />
			</div>
			<div className={styles.hero__image}>
				<img
					className={styles.hero__image__img}
					alt='an interior design with minimalistic finish'
					src={img}
				/>
			</div>
		</div>
	);
};

export default HeroPage;
