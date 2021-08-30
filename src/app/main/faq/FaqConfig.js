import React from 'react';
import i18next from 'i18next';
import en from 'app/i18n/en';
import ar from 'app/i18n/ar';

i18next.addResourceBundle('en', 'FaqPage', en);
i18next.addResourceBundle('ar', 'FaqPage', ar);

const FaqConfig = {
	settings: {
		layout: {
			config: {}
		}
	},
	routes: [
		{
			path: '/faq',
			component: React.lazy( () => import('./Faq')) 
		}
	]
};

export default FaqConfig;