import styles from './MainHeader.module.scss';
import logo from '../../Components/img/logo.png';
import menu from '../../Components/img/Hamburger.png';

import menu3 from '../../Components/img/Hamburger3.png';
import { useState } from 'react';
import classNames from 'classnames';

const MainHeader = () => {
	const [isActive, setIsActive] = useState(false);
	const menuHandler = () => {
		setIsActive((prev) => !prev);
	};

	const activeMenu = classNames(styles.main_header__menu, {
		[styles.active]: isActive,
	});

	const hideMenu = classNames(styles.mobile__1, {
		[styles.hide]: isActive,
	});

	return (
		<header className={styles.main_header}>
			<img
				className={styles.main_header__logo}
				alt='a logo of id Studio'
				src={logo}
			/>
			<div className={activeMenu}>
				<div className={styles.left}>
					<div className={styles.left__links}>
						<a href='#services' className={styles.left__links__link}>
							Services
						</a>
						<a href='#portfolio' className={styles.left__links__link}>
							Portfolio
						</a>
						<a href='#pricing' className={styles.left__links__link}>
							Pricing
						</a>
					</div>
				</div>

				<div className={styles.right}>
					<p>(303) 555-0105</p>
					<select className={styles.right__language}>
						<option value='0'>EN</option>
						<option value='1'>PLN</option>
					</select>
				</div>
			</div>
			<div className={styles.mobile}>
				<img
					className={hideMenu}
					onClick={menuHandler}
					alt='icon of a mobile menu'
					src={isActive ? menu : menu3}
				/>
			</div>
		</header>
	);
};

export default MainHeader;
