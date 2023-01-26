import styles from './ServicesPage.module.scss';
import Service from '../../../../Components/Layout/Service';

import icon1 from '../../../../Components/img/icon1.png';
import icon2 from '../../../../Components/img/icon2.png';
import icon3 from '../../../../Components/img/icon3.png';
import icon4 from '../../../../Components/img/icon4.png';
import Button from '../../../../Components/UI/Button';

const ServicesPage = () => {
	return (
		<div className={styles.services} id='services'>
			<div className={styles.services__header}>
				<h2 className={styles.services__header__1}>Our </h2>
				<h2 className={styles.services__header__2}> Services</h2>
			</div>
			<div className={styles.services__container}>
				<Service
					alt='an icon of a couch'
					src={icon1}
					titleText='interior design'
					paragraphText='Interior design services offer a vast variety of solutions for our clients’ homes and offices.'
				/>
				<hr className={styles.services__container__line} />
				<Service
					alt='an icon of a framed picture'
					src={icon2}
					titleText='decorative services'
					paragraphText='Our professional decorators will be happy to help you change your house’s inner look.
                    '
				/>
				<hr className={styles.services__container__line} />
				<Service
					alt='an icon of an outspreaded plan of a house'
					src={icon3}
					titleText='space planning'
					paragraphText='We create better interior experiences through our space planning services.'
				/>
				<hr className={styles.services__container__line} />
				<Service
					alt='an icon of a pencil'
					src={icon4}
					titleText='project management'
					paragraphText='We provide proper project management as it’s one of the main success factors in interior design.'
				/>
			</div>
			<Button className={styles.active} text='free consultation' />
		</div>
	);
};

export default ServicesPage;
