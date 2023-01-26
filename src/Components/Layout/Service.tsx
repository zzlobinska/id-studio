import styles from './Service.module.scss';

type ServiceProps = {
	alt: string;
	src: string;
	titleText: string;
	paragraphText: string;
};

const Service = (props: ServiceProps) => {
    return (
	<div className={styles.service}>
		<img alt={props.alt} className={styles.service__img} src={props.src} />
		<h4 className={styles.service__title}>{props.titleText}</h4>
		<p className={styles.service__text}>{props.paragraphText}</p>
	</div>);
};

export default Service;
