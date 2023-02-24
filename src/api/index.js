import axiosAjax from "@/api/axiosAjax";
import mockAjax from "@/api/mockAjax";
import qs from 'qs'

export const reqLoginToken = (data) => axiosAjax.post('/login', data)
export const reqStudentList = (params) => axiosAjax({
    url: `/students`,
    method: 'get',
    params

})
export const reqApi2Data = ({url,data='',method,id=''}) => {
    let stringifyData = qs.stringify(data)
    return axiosAjax({
        url: `${url}/${id}`,
        method: method,
        data: stringifyData
    })
}


