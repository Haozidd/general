import axiosAjax from "@/api/axiosAjax";
import mockAjax from "@/api/mockAjax";

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