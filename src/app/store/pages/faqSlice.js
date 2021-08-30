import {createSlice} from '@reduxjs/toolkit';
import { API,  ALL_FAQ } from 'app/utils/app.constant';

export function fetchFaqData() {
    return (dispatch, getState) => { console.log('faq');
        dispatch(loadFaq());
        Promise.all([
            API.get(ALL_FAQ + 'en'),
            API.get(ALL_FAQ + 'ar')
        ])
        .then( response => {
            let faq_data = { 'faq_en': response[0].data, 'faq_ar' : response[1].data};        
            dispatch(saveFaq(faq_data));
        })
        .catch(error => {
            console.log(error);
        })
    }

}


const faqSlice = createSlice({
    name: 'faq',
    initialState: {
        loading: false,
    },
    reducers: {
        loadFaq: (state, action) => {
            state.loading = true;
        },
        readyFaq: (state, action) => {
            state.loading = false;
        },
        saveFaq: (state, action) => {
            state.loading = false;
            state.allFaqData = action.payload;
        }
    },
    extraReducers: {}
});

export const { loadFaq, readyFaq, saveFaq } = faqSlice.actions;

export default faqSlice.reducer;