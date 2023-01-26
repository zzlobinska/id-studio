import classNames from 'classnames';
import { useState } from 'react';
import styles from './AboutPage.module.scss';

const AboutPage = () => {
	const [moreText, setMoretext] = useState(false);

	const showTextHandler = () => {
		setMoretext((prev) => !prev);
	};

	const activeText = classNames(styles.about__text__paragraph__2, {
		[styles.active]: moreText,
	});

	return (
		<div className={styles.about}>
			<div className={styles.about__header}>
				<h2 className={styles.about__header__1}>About </h2>
				<h2 className={styles.about__header__2}> Studio</h2>
			</div>
			<div className={styles.about__text}>
				<p className={styles.about__text__paragraph}>
					Interiart is an award-winning architecture and interior design
					practice based in NYC. We work internationally on projects of
					residential & commercial interior design that require a creative
					approach. Our talented and experienced designers leverage their
					knowledge and expertise to create unique and comfortable interiors for
					you.
				</p>
				<p className={activeText}>
					Our team knows that interior design can be stressful for the client
					and we do our best to make it as easy as possible. We listen to your
					needs, ideas, and inputs. And most importantly, we make it exciting
					and enjoyable for our clients.
				</p>
			</div>
			<button onClick={showTextHandler} className={styles.about__more}>
				read {!moreText ? 'more' : 'less'}
			</button>
		</div>
	);
};

export default AboutPage;
