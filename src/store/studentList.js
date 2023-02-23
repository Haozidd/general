import {reqStudentList} from "@/api";

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
    async getStudentList(context,params){
        let result = await reqStudentList(params)
        if (result.status === 200){
            context.commit('dealStudentList',result)
            return 'ok'
        }else {
            return Promise.reject(new Error(result.message))
        }
    },
}
const getters={
}
export default{
    state,
    actions,
    mutations,
    getters
}