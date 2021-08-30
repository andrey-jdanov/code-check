import i18next from 'i18next';
import News from './News';
import DetailNews from './DetailNews';
import en from 'app/i18n/en';
import ar from 'app/i18n/ar';

i18next.addResourceBundle('en', 'NewsTranslate', en);
i18next.addResourceBundle('ar', 'NewsTranslate', ar);

const NewsConfig = {
	settings: {
		layout: {
			config: {}
		}
	},
	routes: [
		{
			path: '/news/*',
			component: DetailNews
		},
		{
			path: '/news',
			component: News
		}
	]
};

export default NewsConfig;