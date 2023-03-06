import axios from 'axios';



const personasApi=axios.create({
    baseURL:'http://192.168.0.102:8080/api'
})


export default personasApi;