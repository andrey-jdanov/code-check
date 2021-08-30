import axios from 'axios';

export const BASE_URL = process.env.NODE_ENV === 'production' ? 'http://' : 'http://';
export const API = axios.create({
    baseURL: BASE_URL
});

// APIs

export const ALL_FAQ = '/stack/faq/';  //faq/{lang} , faq/{lang}/{tag} : GET
export const ALL_NEWS = '/stack/news/'; //news/{lang} : GET
export const REGISTRATION = '/registration/'; //registration/{appId} : POST,   registration/{appId}/{id} : GET
export const STATIC_PAGE = 'stack/static/'; // stack/static/{lang} : GET