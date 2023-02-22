import axios from "axios";
import nprogress from 'nprogress';
import "nprogress/nprogress.css"

const mockAjax = axios.create({
    baseURL:"/mock",
    timeout:5000
})
mockAjax.interceptors.request.use((config)=>{
    nprogress.start()
    return config
})
mockAjax.interceptors.response.use(res=>{
    nprogress.done();
    return res.data
},error => {
    return Promise.reject(new Error('fail'))
})

export default mockAjax

