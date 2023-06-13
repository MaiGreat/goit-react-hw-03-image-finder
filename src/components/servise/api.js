import axios from 'axios';


const API_KEY = '32639885-f1e4dacd717d4e1c1fb5816a4';
axios.defaults.baseURL = 'https://pixabay.com/api/'

export const fetchImages = async (query, page) => {

    const { data } = await axios.get(`search?query=${query}&page=${page}`)
    return data;
};