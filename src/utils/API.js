import axios from 'axios';

const endpoint = `https://randomuser.me/api/`;
const results = `?results=10`;
const nationality = `nat=us`;

const baseURL = `${endpoint}${results}&${nationality}`;

export default {
    getEmployees() {
        return axios.get(baseURL);
    }
};