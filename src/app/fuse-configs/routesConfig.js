// import React from 'react';
// import { Redirect } from 'react-router-dom';
import FuseUtils from '@fuse/utils';
import HomeConfig from 'app/main/home/HomeConfig';
import FaqConfig from 'app/main/faq/FaqConfig';
import NewsConfig from 'app/main/news/NewsConfig';
import CountryQualifiersConfig from 'app/main/qualifiers/CountryQualifiersConfig';

const routeConfigs = [
	FaqConfig,
	NewsConfig,
	CountryQualifiersConfig,
	HomeConfig,
];

const routes = [
	...FuseUtils.generateRoutesFromConfigs(routeConfigs),
	// {
	// 	path: '/',
	// 	component: () => <Redirect to="/" />
	// }
];

export default routes;
