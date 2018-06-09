import axios from "axios";
import cmt from './commodity';


axios.defaults.timeout = 20000;
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';


const api = Object.assign(cmt);

export default api;
