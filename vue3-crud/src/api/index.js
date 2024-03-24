//import axios
import axios from 'axios';

const Api = axios.create({
    //set default endpoint API
    baseURL: 'http://localhost/projek_vue_laravel/projek1/backend/public/'
})

export default Api