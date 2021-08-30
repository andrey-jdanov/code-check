import {createSlice} from '@reduxjs/toolkit';
import { API, ALL_NEWS } from 'app/utils/app.constant';

export function fetchNewsData() {
    return (dispatch, getState) => { 
        dispatch(loadNews());
        Promise.all([
            API.get(ALL_NEWS + 'en'),
            API.get(ALL_NEWS + 'ar'),
        ])
        .then( response => {
            let news_data = { 'news_en': response[0].data, 'news_ar' : response[1].data};
            dispatch(saveNewsData(news_data));  
        })
        .catch(error => {
            console.log(error);
        })
    }
}

export function saveHasMoreData(status) {
    return dispatch => {
        dispatch(readyNews(status));
    }
}

const NewsSlice = createSlice({
    name: 'news',
    initialState: {
        loading: false,
    },
    reducers: {
        loadNews: (state, action) => {
            state.loading = true;
        },
        readyNews: (state, action) => {
            state.loading = false;
            state.hasMore = action.payload;
        },
        saveNewsData: (state, action) => {
            state.loading = false;
            state.allNewsData = action.payload;
        },
    },
    extraReducers: {}
});

export const { loadNews, readyNews, saveNewsData } = NewsSlice.actions;

export default NewsSlice.reducer;