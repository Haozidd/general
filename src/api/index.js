import axiosAjax from "@/api/axiosAjax";
import mockAjax from "@/api/mockAjax";
import qs from 'qs'
export const reqLoginToken = (data)=>axiosAjax.post('/login',data)
export const reqStudentList = (params)=>axiosAjax({
    url:`/students`,
    method:'get',
    params

})
export const reqDeleteStudent = (id)=>axiosAjax({
    url:`/students/${id}`,
    method:'delete',
})
export const reqQuery = ()=>axiosAjax({
    url:`/info`,
    method:'get'
})
export const reqAddInfo = (dataObj)=>{
    dataObj = qs.stringify(dataObj)
    return axiosAjax({
        url:`/info`,
        method:'post',
        data:dataObj
    })
}

export const reqModifyInfo = (dataObj)=>{
    dataObj = qs.stringify(dataObj)
    return axiosAjax({
    url:`/info`,
    method:'put',
    data:dataObj
})}

export const reqDeleteInfo = (id)=>axiosAjax({
    url:`/info/${id}`,
    method:'delete',
})