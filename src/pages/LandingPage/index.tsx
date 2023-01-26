import MainHeader from '../../Components/Layout/MainHeader';
import AboutPage from './Components/AboutPage';
import HeroPage from './Components/HeroPage';
import ServicesPage from './Components/ServicesPage';

const LandingPage = () => {
	return (
		<>
			<MainHeader />
			<HeroPage />
			<AboutPage />
			<ServicesPage/>
		</>
	);
};

export default LandingPage;
