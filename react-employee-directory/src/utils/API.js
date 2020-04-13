import axios from 'axios';

const endpoint = `https://randomuser.me/api/`;
const results = `?results=10`;
const nationality = `nat=us`;

const queryURL = `${endpoint}${results}&${nationality}`;

export default {
    getUsers() {
        return axios.get(queryURL);
    }
};