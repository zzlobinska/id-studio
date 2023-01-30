import styles from './Profile.module.scss';
import twitter from '../../img/twitter.png';
import linkedin from '../../img/linkedin.png';
import facebook from '../../img/facebook.png';

type ProfileProps = {
	photo: string;
	name: string;
	job: string;
	text: string;
};

const Profile = (props: ProfileProps) => {
	return (
		<div className={styles.profile}>
			<div className={styles.description}>
				<img className={styles.person} alt='a reviewer' src={props.photo} />
				<div className={styles.presention}>
					<p className={styles.name}>{props.name}</p>
					<p className={styles.job}>{props.job}</p>
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
			</div>
			<p className={styles.text}>{props.text}</p>
		</div>
	);
};

export default Profile;
