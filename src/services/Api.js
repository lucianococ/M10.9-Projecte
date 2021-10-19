import axios from 'axios'

export default () => {
    return axios.create({
        baseURL:'http://jsonplaceholder.typicode.com/',
        headers:{
            'Accept':'application/json',
            'Content-Type':'application/json'
        }
    });
};