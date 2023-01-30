import Card from '../../../Components/UI/Card/Card';
import styles from './PricingPage.module.scss';

const cardServices = [
	'Interior Design',
	'Project Discussion',
	'Space Planning',
	'Online Consultation',
];

const PricingPage = () => {
	return (
		<div className={styles.pricing}>
			<p className={styles.title}>
				<h2 className={styles.title__1}>Our</h2>
				<h2 className={styles.title__2}>Pricing</h2>
			</p>
			<div className={styles.card}>
				<Card title='Basic' price='25' services={cardServices} />
				<Card title='Standard' price='50' services={cardServices} golden />
				<Card title='Premium' price='80' services={cardServices} />
			</div>
		</div>
	);
};
export default PricingPage;
