import i18next from 'i18next';
import en from 'app/i18n/en';
import ar from 'app/i18n/ar';

i18next.addResourceBundle('en', 'NavMenuLang', en);
i18next.addResourceBundle('ar', 'NavMenuLang', ar);

const config = {
	title: 'Layout 2 - Horizontal',
	defaults: {
		mode: 'fullwidth',
		scroll: 'content',
		navbar: {
			display: false
		},
		toolbar: {
			display: false,
			position: 'below'
		},
		footer: {
			display: true,
			style: 'static'
		},
		leftSidePanel: {
			display: true
		},
		rightSidePanel: {
			display: false
		}
	},
	form: {
		mode: {
			title: 'Mode',
			type: 'radio',
			options: [
				{
					name: 'Boxed',
					value: 'boxed'
				},
				{
					name: 'Full Width',
					value: 'fullwidth'
				},
				{
					name: 'Container',
					value: 'container'
				}
			]
		},
		navbar: {
			type: 'group',
			title: 'Navbar',
			children: {
				display: {
					title: 'Display',
					type: 'switch'
				}
			}
		},		
		footer: {
			type: 'group',
			title: 'Footer',
			children: {
				display: {
					title: 'Display',
					type: 'switch'
				},
				style: {
					title: 'Style',
					type: 'radio',
					options: [
						{
							name: 'Fixed',
							value: 'fixed'
						},
						{
							name: 'Static',
							value: 'static'
						}
					]
				}
			}
		}
	}
};

export default config;
