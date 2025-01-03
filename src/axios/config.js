import axios from "axios";

axios.defaults.baseURL = "http://localhost:3000";

axios.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";

axios.defaults.withCredentials = true;

export default axios;