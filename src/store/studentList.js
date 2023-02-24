import {reqStudentList} from "@/api";
import {dealStudentData} from "@/utils/dealApiData";

const state={
    studentList:[],
    total:undefined
}
const mutations={
    dealStudentList(state,result){
        result.data.forEach(item=>{
            item.sex ===1 ? item.sex_text='男' : item.sex_text = '女'
            switch (item.state){
                case '1': item.state_text = '已入学'
                    break
                case '2': item.state_text = '未入学'
                    break
                case '3': item.state_text = '休学中'
                    break
            }
        })
        state.total=result.total
        state.studentList = result.data
    },
}
const actions={
    getStudentList(context,params){
        dealStudentData.getStudentList(context,params)
    },
    deleteStudentData(context,id){
        dealStudentData.deleteStudentData(context,id)
    }
}
const getters={
}
export default{
    state,
    actions,
    mutations,
    getters
}