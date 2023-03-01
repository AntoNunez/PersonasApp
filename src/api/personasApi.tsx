import axios from 'axios';



const personasApi=axios.create({
    baseURL:'http://localhost:8080/api'
})


export default personasApi;