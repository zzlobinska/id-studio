import classNames from 'classnames';
import Button from '../Button';
import styles from './Card.module.scss';

type CardProps = {
	title: string;
	price: string;
	services: string[];
	golden?: boolean;
};

const Card = (props: CardProps) => {
	return (
		<div
			className={classNames(styles.card, {
				[styles.golden]: props.golden,
			})}
		>
			<div className={styles.content}>
				<h3 className={styles.content__title}>{props.title}</h3>
				<div className={styles.content__price}>
					<h2 className={styles.content__price__1}>${props.price}</h2>
					<p className={styles.content__price__2}>per month</p>
				</div>
                <hr className={styles.line}/>
				<div className={styles.content__services}>
					{props.services.map((service) => (
						<p className={styles.content__services__service} key={service}>
							{service}
						</p>
					))}
				</div>
				<Button  className={styles.btn} text='buy now' />
				<button className={styles.btn_mobile}>buy now</button>
			</div>
		</div>
	);
};

export default Card;
