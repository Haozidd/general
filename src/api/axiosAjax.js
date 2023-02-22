import axios from "axios";
import nprogress from 'nprogress';
import "nprogress/nprogress.css"
import {getToken} from "@/utils/Token";
import {Message} from "element-ui";

const axiosAjax = axios.create({
    baseURL:"/api",
    timeout:3000
})
axiosAjax.interceptors.request.use((config)=>{
    nprogress.start()
    config.headers['token'] = getToken('token')
    return config
},error=>{
    return Promise.reject(error)
})
axiosAjax.interceptors.response.use(res=>{
    let {status,message}=res.data
    if(status!==200){
        Message({message:message||'error',type:'warning'})
        return
    }
    nprogress.done();
    return res.data
},error => {
    return Promise.reject(new Error('fail'))
})

export default axiosAjax

