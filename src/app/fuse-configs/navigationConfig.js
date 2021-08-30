import i18next from 'i18next';
import ar from './navigation-i18n/ar';
import en from './navigation-i18n/en';

i18next.addResourceBundle('en', 'navigation', en);
i18next.addResourceBundle('ar', 'navigation', ar);

const navigationConfig = [
	{
		id: 'home',
		title: 'Home',
		translate: 'HOME',
		type: 'group',	
		icon: '',
		url: '/'	
	},
	{
		id: 'timeline',
		title: 'Timeline',
		translate: 'TIMELINE',
		type: 'group',
		icon: '',
	},
	{
		id: 'streaming_partners',
		title: 'streaming partners',
		translate: 'STREAMING PARTNERS',
		type: 'group',
		icon: '',
	},
	{
		id: 'news',
		title: 'News',
		translate: 'NEWS',
		type: 'group',
		icon: '',
	},
	{
		id: 'faq',
		title: 'Faq',
		translate: 'FAQ',
		type: 'group',
		icon: '',
		url: '/faq'
	},
	{
		id: 'country_qualifiers',
		title: 'Country Qualifiers',
		translate: 'COUNTRY QUALIFIERS',
		type: 'group',
		icon: '',
		children: [
			{
				id: 'qualifier_schedule',
				title: 'schedule',
				translate: 'SCHEDULE',
				type: 'item',
				icon: '',
				url: '/country-leagues/schedule'
			},
			{
				id: 'qualifier_leagues',
				title: 'leagues',
				translate: 'LEAGUES',
				type: 'item',
				icon: '',
				url: '/country-leagues/leagues'
			},
			{
				id: 'qualifier_participants',
				title: 'participants',
				translate: 'PARTICIPANTS',
				type: 'item',
				icon: '',
				url: '/country-leagues/participants'
			},
			{
				id: 'qualifier_latest_results',
				title: 'latest results',
				translate: 'LATEST RESULTS',
				type: 'item',
				icon: '',
				url: '/country-leagues/latest-results/0/range/0-9'
			},
			{
				id: 'qualifier_upcoming_matches',
				title: 'upcoming matches',
				translate: 'UPCOMING MATCHES',
				type: 'item',
				icon: '',
				url: '/country-leagues/upcoming-matches/0/range/0-9'
			},
			{
				id: 'qualifier_rankings',
				title: 'rankings',
				translate: 'RANKINGS',
				type: 'item',
				icon: '',
				url: '/country-leagues/rankings'
			}
		]
	},
	{
		id: 'competitors_league',
		title: 'Competitors League',
		translate: 'COMPETITORS LEAGUE',
		type: 'group',
		icon: '',
		children: [
			{
				id: 'competitors_schedule',
				title: 'schedule',
				translate: 'SCHEDULE',
				type: 'item',
				icon: '',
				url: '/regional-qualifiers/schedule'
			},
			{
				id: 'competitors_participants',
				title: 'participants',
				translate: 'PARTICIPANTS',
				type: 'item',
				icon: '',
				url: '/regional-qualifiers/participants'
			},
			{
				id: 'competitors_latest_results',
				title: 'latest results',
				translate: 'LATEST RESULTS',
				type: 'item',
				icon: '',
				url: '/regional-qualifiers/latest-results'
			},
			{
				id: 'competitors_upcoming_matches',
				title: 'upcoming matches',
				translate: 'UPCOMING MATCHES',
				type: 'item',
				icon: '',
				url: '/regional-qualifiers/upcoming-matches'
			},
			{
				id: 'competitors_rankings',
				title: 'rankings',
				translate: 'RANKINGS',
				type: 'item',
				icon: '',
				url: '/regional-qualifiers/rankings'
			}
		]
	},
	{
		id: 'champions_league',
		title: 'Champions League',
		translate: 'CHAMPIONS LEAGUE',
		type: 'group',
		icon: '',
		children: [
			{
				id: 'pro_schedule',
				title: 'schedule',
				translate: 'SCHEDULE',
				type: 'item',
				icon: '',
				url: '/pro-league/schedule'
			},
			{
				id: 'pro_participants',
				title: 'participants',
				translate: 'PARTICIPANTS',
				type: 'item',
				icon: '',
				url: '/pro-league/participants'
			},
			{
				id: 'pro_latest_results',
				title: 'latest results',
				translate: 'LATEST RESULTS',
				type: 'item',
				icon: '',
				url: '/pro-league/latest-results'
			},
			{
				id: 'pro_upcoming_matches',
				title: 'upcoming matches',
				translate: 'UPCOMING MATCHES',
				type: 'item',
				icon: '',
				url: '/pro-league/upcoming-matches'
			},
			{
				id: 'pro_rankings',
				title: 'rankings',
				translate: 'RANKINGS',
				type: 'item',
				icon: '',
				url: '/pro-league/rankings'
			}
		]
	}
];

export default navigationConfig;
