import Profile from '../../../Components/UI/Profile/Profile';
import profile1 from '../../../Components/img/profile1.png';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import styles from './ReviewsPage.module.scss';

const ReviewsPage = () => {
	const items = [
		<Profile
			photo={profile1}
			name='Anette Black'
			job='Merchandising Associate'
			text='Convallis non proin ac bibendum. At pharetra sed ultrices semper. Lectus et ornare ultrices urna in. Id non fringilla dignissim ac risus amet eget egestas vestibulum. Aliquet etiam eget nulla nulla odio vel.'
		/>,
		<Profile
			photo={profile1}
			name='Anette Black'
			job='Merchandising Associate'
			text='Convallis non proin ac bibendum. At pharetra sed ultrices semper. Lectus et ornare ultrices urna in. Id non fringilla dignissim ac risus amet eget egestas vestibulum. Aliquet etiam eget nulla nulla odio vel.'
		/>,
		<Profile
			photo={profile1}
			name='Anette Black'
			job='Merchandising Associate'
			text='Convallis non proin ac bibendum. At pharetra sed ultrices semper. Lectus et ornare ultrices urna in. Id non fringilla dignissim ac risus amet eget egestas vestibulum. Aliquet etiam eget nulla nulla odio vel.'
		/>,
		<Profile
			photo={profile1}
			name='Anette Black'
			job='Merchandising Associate'
			text='Convallis non proin ac bibendum. At pharetra sed ultrices semper. Lectus et ornare ultrices urna in. Id non fringilla dignissim ac risus amet eget egestas vestibulum. Aliquet etiam eget nulla nulla odio vel.'
		/>,
		<Profile
			photo={profile1}
			name='Anette Black'
			job='Merchandising Associate'
			text='Convallis non proin ac bibendum. At pharetra sed ultrices semper. Lectus et ornare ultrices urna in. Id non fringilla dignissim ac risus amet eget egestas vestibulum. Aliquet etiam eget nulla nulla odio vel.'
		/>,
		<Profile
			photo={profile1}
			name='Anette Black'
			job='Merchandising Associate'
			text='Convallis non proin ac bibendum. At pharetra sed ultrices semper. Lectus et ornare ultrices urna in. Id non fringilla dignissim ac risus amet eget egestas vestibulum. Aliquet etiam eget nulla nulla odio vel.'
		/>,
		<Profile
			photo={profile1}
			name='Anette Black'
			job='Merchandising Associate'
			text='Convallis non proin ac bibendum. At pharetra sed ultrices semper. Lectus et ornare ultrices urna in. Id non fringilla dignissim ac risus amet eget egestas vestibulum. Aliquet etiam eget nulla nulla odio vel.'
		/>,
	];

	const responsive = {
		0: {
			items: 1,
		},
		1024: {
			items:2,
			// itemsFit: 'fill',
		},
	};

	return (
		<div className={styles.reviews}>
			<div className={styles.title}>
				<h2 className={styles.title__1}>What</h2>
				<h2 className={styles.title__2}>People Say</h2>
			</div>
			<div className={styles.profiles}>
				<AliceCarousel mouseTracking items={items} responsive={responsive} />
			</div>
		</div>
	);
};

export default ReviewsPage;
