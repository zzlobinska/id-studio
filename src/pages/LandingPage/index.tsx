import MainHeader from '../../Components/Layout/MainHeader';
import AboutPage from './Components/AboutPage';
import HeroPage from './Components/HeroPage';
import PortfolioPage from './Components/PortfolioPage';
import ServicesPage from './Components/ServicesPage';

const LandingPage = () => {
	return (
		<>
			<MainHeader />
			<HeroPage />
			<AboutPage />
			<ServicesPage/>
			<PortfolioPage/>
		</>
	);
};

export default LandingPage;
