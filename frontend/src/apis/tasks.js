import axios from 'axios';

const urlJSON = 'http://localhost:3001';
const urlExpress = 'http://localhost:8000';
const urlHeroku = ' https://arcane-headland-69370.herokuapp.com/'

export default axios.create({
    baseURL: urlHeroku
});