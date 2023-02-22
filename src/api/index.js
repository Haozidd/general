import axiosAjax from "@/api/axiosAjax";
import mockAjax from "@/api/mockAjax";

export const reqLoginToken = ()=>mockAjax.get('/loginToken')