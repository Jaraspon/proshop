import axios from 'axios';
axios.defaults.baseURL = process.env.NEXT_PUBLIC_AXIOS_HOST;
axios.defaults.headers.post['Content-Type'] = 'application/json';
export default axios;