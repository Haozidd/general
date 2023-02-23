import axiosAjax from "@/api/axiosAjax";
import mockAjax from "@/api/mockAjax";

export const reqLoginToken = (data)=>axiosAjax.post('/login',data)
export const reqStudentList = ()=>axiosAjax.get('/students')