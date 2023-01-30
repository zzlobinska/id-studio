import Button from '../../../Components/UI/Button';
import styles from './ContactPage.module.scss';


const ContactPage = () => {


	return (
		<div className={styles.contact}>
			<div className={styles.title}>
				<h2 className={styles.title__1}>Do you have</h2>
				<h2 className={styles.title__2}>any question?</h2>
			</div>
			<Button className='btn' text='order a call' />
		</div>
	);
};

export default ContactPage;
