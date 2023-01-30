import Footer from '../../Components/Layout/Footer';
import MainHeader from '../../Components/Layout/MainHeader';
import AboutPage from '../Components/AboutPage';
import ContactPage from '../Components/ContactPage';
import HeroPage from '../Components/HeroPage';
import PortfolioPage from '../Components/PortfolioPage';
import PricingPage from '../Components/PricingPage';
import ReviewsPage from '../Components/ReviewsPage';
import ServicesPage from '../Components/ServicesPage';

const LandingPage = () => {
	return (
		<>
			<MainHeader />
			<HeroPage />
			<AboutPage />
			<ServicesPage />
			<PortfolioPage />
			<PricingPage />
			<ReviewsPage />
			<ContactPage/>
			<Footer/>
		</>
	);
};

export default LandingPage;
