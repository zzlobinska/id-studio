import classNames from 'classnames';
import { useEffect, useState } from 'react';

import styles from './PortfolioPage.module.scss';

type CatType = { url: string; id: number };

const PortfolioPage = () => {
	const [pussies, setPussies] = useState<CatType[]>([]);
	const [newType, setNewType] = useState<string>('all');

	const typesHandler = (buttonText: string) => {
		setNewType(buttonText);
	};

	const buttonArray = [
		{ text: 'all', className: styles.types__type__1 },
		{ text: 'comercial' },
		{ text: 'residental' },
		{ text: 'office' },
		{ text: 'other' },
	];

	const fetchCatsHandler = async () => {
		try {
			const response = await fetch(
				'https://api.thecatapi.com/v1/images/search?limit=8'
			);
			const data = await response.json();
			setPussies(data.splice(2));
		} catch (error) {
			console.error(error);
		}
	};
	useEffect(() => {
		fetchCatsHandler();
	}, [newType]);

	return (
		<div className={styles.portfolio} id='portfolio'>
			<div className={styles.header}>
				<h2 className={styles.header__1}>Our </h2>
				<h2 className={styles.header__2}> Portfolio</h2>
			</div>
			<div className={styles.links}>
				<div className={styles.types}>
					{buttonArray.map((button) => (
						<button
							className={classNames(styles.types__type, button.className, {
								[styles.active]: newType === button.text,
							})}
							onClick={() => typesHandler(button.text)}
							key={button.text}
						>
							{button.text}
						</button>
					))}
				</div>
				<button className={styles.more}>view more</button>
			</div>
			<div className={styles.photos}>
				{pussies.map((cat) => (
					<img
						className={styles.photos__photo}
						src={cat.url}
						alt=''
						key={cat.id}
					/>
				))}
			</div>
            <button className={styles.more__mobile}>view more</button>
		</div>
	);
};

export default PortfolioPage;
