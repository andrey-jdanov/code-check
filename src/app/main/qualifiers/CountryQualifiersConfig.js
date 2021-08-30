import i18next from 'i18next';
import CountryQualifiers from './CountryQualifiers';
import en from 'app/i18n/en';
import ar from 'app/i18n/ar';
// import Schedule from './Schedule';

i18next.addResourceBundle('en', 'CountryQualifiersTranslate', en);
i18next.addResourceBundle('ar', 'CountryQualifiersTranslate', ar);

const CountryQualifiersConfig = {
	settings: {
		layout: {
			config: {}
		}
	},
	routes: [
		{
			path: '/country-leagues',
			component: CountryQualifiers
		}
	]
};

export default CountryQualifiersConfig;