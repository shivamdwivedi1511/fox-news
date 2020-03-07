import axios from 'axios';
import { API_URL } from '../constant';

export const getAllNewsSources = () => axios(API_URL.ALL_SOURCES);

export const getNewsFromSource = (s) => {
    let url = API_URL.SOURCE_NEWS_LIST.url + `&sources=${s}`;
    return axios.get(url);
}
