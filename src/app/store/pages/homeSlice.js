import {createSlice} from '@reduxjs/toolkit';
import { fetchNewsData } from 'app/store/pages/newsSlice';
import { fetchFaqData } from 'app/store/pages/faqSlice';

export function fetchHomeData() {
    return dispatch => {
        dispatch(readyHome());
    }
}

export function fetchNewsAndFaqData() {
    return (dispatch, getState) => { 
        dispatch(fetchNewsData());
        dispatch(fetchFaqData());
    }
}

const homeSlice = createSlice({
    name: 'home',
    initialState: {
        loading: false,
    },
    reducers: {
        loadHome: (state, action) => {
            state.loading = true;
        },
        readyHome: (state, action) => {
            state.loading = false;
            state.data = action.payload;
        }       
        
    },
    extraReducers: {}
});

export const { loadHome, readyHome } = homeSlice.actions;

export default homeSlice.reducer;