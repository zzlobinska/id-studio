import Logo from '../img/logo.png';
import twitter from '../img/twitter.png';
import linkedin from '../img/linkedin.png';
import facebook from '../img/facebook.png';
import styles from './Footer.module.scss';

const Footer = () => {
	const links = [
		{ text: 'About', href: 'about' },
		{ text: 'Services', href: 'services' },
		{ text: 'Portfolio', href: 'portfolio' },
		{ text: 'Pricing', href: 'pricing' },
		{ text: 'Testemonials', href: 'testemonials' },
	];
	return (
		<footer className={styles.footer}>
			<div className={styles.content}>
				<div className={styles.about}>
					<div className={styles.mobile}>
						<img
							className={styles.logo}
							alt='a logo of our company'
							src={Logo}
						/>
						<div className={styles.icons__mobile}>
							<a href='twitter.com'>
								<img
									className={styles.icons__icon}
									alt='an icon of twitter'
									src={twitter}
								/>
							</a>
							<a href='linkedin.com'>
								<img
									className={styles.icons__icon}
									alt='an icon of linkedin'
									src={linkedin}
								/>
							</a>
							<a href='facebook.com'>
								<img
									className={styles.icons__icon}
									alt='an icon of facebook'
									src={facebook}
								/>
							</a>
						</div>
					</div>
					<p className={styles.description}>
						We are one of the leading interior design and remodeling studios
						available for all of your residential and commercial interior design
						needs.
					</p>
					<p className={styles.copyright}>
						{' '}
						© {new Date().getFullYear()} id Studio. All Rights Reserved.
					</p>
				</div>
				<div className={styles.navigation}>
					<p className={styles.nav_text}>navigation</p>
					<ul className={styles.all_links}>
						{links.map((link) => (
							<li className={styles.links}>
								<a className={styles.link} href={link.href} key={link.href}>
									{link.text}
								</a>
							</li>
						))}
					</ul>
					<div className={styles.icons}>
						<a href='twitter.com'>
							<img
								className={styles.icons__icon}
								alt='an icon of twitter'
								src={twitter}
							/>
						</a>
						<a href='linkedin.com'>
							<img
								className={styles.icons__icon}
								alt='an icon of linkedin'
								src={linkedin}
							/>
						</a>
						<a href='facebook.com'>
							<img
								className={styles.icons__icon}
								alt='an icon of facebook'
								src={facebook}
							/>
						</a>
					</div>
				</div>
				<div className={styles.contact}>
					<p className={styles.contacts}>contacts</p>
					<div className={styles.all_contacts}>
						<div className={styles.box}>
							<p className={styles.box__title}>adress</p>
							<p className={styles.box__text}>
								3517 W. Gray St. Utica, Pennsylvania 57867
							</p>
						</div>
						<div className={styles.box}>
							<p className={styles.box__title}>email</p>
							<p className={styles.box__text}>zuzik@tukindo.rf</p>
						</div>
						<div className={styles.box}>
							<p className={styles.box__title}>phones</p>
							<p className={styles.box__text}>(420) 69 2137</p>
						</div>
					</div>
				</div>
				<p className={styles.copyright_mobile}>{' '}
						© {new Date().getFullYear()} id Studio. All Rights Reserved.</p>
			</div>
		</footer>
	);
};

export default Footer;
