import axios from 'axios';

const instance =  axios.create({
baseURL: 'https://vapi.vetroms.co.za/api/'


})

export default instance;