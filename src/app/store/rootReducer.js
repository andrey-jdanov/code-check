import { combineReducers } from '@reduxjs/toolkit';
import fuse from './fuse';
import i18n from './i18nSlice';
import pages from './pages';

const createReducer = asyncReducers =>
	combineReducers({
		fuse,
		i18n,
		pages,
		...asyncReducers
	});

export default createReducer;
