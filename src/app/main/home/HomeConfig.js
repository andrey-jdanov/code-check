import i18next from 'i18next';
import Home from './Home';
import en from 'app/i18n/en';
import ar from 'app/i18n/ar';

i18next.addResourceBundle('en', 'HomePageTranslate', en);
i18next.addResourceBundle('ar', 'HomePageTranslate', ar);

const HomeConfig = {
	settings: {
		layout: {
			config: {}
		}
	},
	routes: [
		{
			path: '/',
			component: Home
		}
	]
};

export default HomeConfig;
