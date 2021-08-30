import {combineReducers} from '@reduxjs/toolkit';
import homeSlice from './homeSlice';
import faqSlice from './faqSlice';
import newsSlice from './newsSlice';

const pagesReducers = combineReducers({
    home: homeSlice,
    faq: faqSlice,
    news: newsSlice
});

export default pagesReducers;