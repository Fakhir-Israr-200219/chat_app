import axios from 'axios';


export const axios_instance = axios.create({
    headers:{
        Authorization: `Bearer ${localStorage.getItem('token')}`
    }
})