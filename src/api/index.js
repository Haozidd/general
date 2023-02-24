import axiosAjax from "@/api/axiosAjax";
import mockAjax from "@/api/mockAjax";
import qs from 'qs'

export const reqApi2Data = ({url,stringifyData='',data='',method,id='',params=''}) => {
    if (stringifyData){
        let stringifyData = qs.stringify(data)
        return axiosAjax({
            url: `${url}/${id}`,
            method: method,
            data: stringifyData,
            params
        })
    }
    return axiosAjax({
        url: `${url}/${id}`,
        method: method,
        data,
        params
    })
}


