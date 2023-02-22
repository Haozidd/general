import axios from "axios";
import nprogress from 'nprogress';
import "nprogress/nprogress.css"

const axiosAjax = axios.create({
    baseURL:"/api",
    timeout:5000
})
axiosAjax.interceptors.request.use((config)=>{
    nprogress.start()
    return config
})
axiosAjax.interceptors.response.use(res=>{
    nprogress.done();
    return res.data
},error => {
    return Promise.reject(new Error('fail'))
})

export default axiosAjax

