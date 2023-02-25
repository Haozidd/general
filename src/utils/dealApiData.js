import {reqApi2Data, reqLoginToken, reqStudentList} from "@/api";
import {setToken} from "@/utils/getToken";
import {nanoid} from "nanoid";
class DealData{
    constructor(root,params, id, type, method) {
        this.root=root
        this.method = method;
        this.type=type
    }
    showReturnMessage(result){
        if(result.status === 200) {
            this.root.$message({type: "success", message: result.message})
            return 'ok'
        }else{
            this.root.$message({type: "error", message: result.message})
            return Promise.reject(new Error(result.message))
        }
    }
    receiveApi2ReturnData({url,data,method,id,params,stringifyData}){
        try {
            return reqApi2Data({url, stringifyData,data, method, id,params})
        } catch (error) {
            new Error(error)
        }
    }
}
export class DealInfo extends DealData{
    url='/info';
    constructor(root, params, id, type, method) {
        super(root, params, id, type, method);
    }
    async addInfoData(data) {
        data.id=nanoid()
        let result = await super.receiveApi2ReturnData({url:this.url,stringifyData:data,method:'post'})
        super.showReturnMessage(result)
        this.root.tableData = result.data
        this.root.dialogFormVisible = false
    }
    async deleteInfoData(id) {
        let result = await super.receiveApi2ReturnData({url:this.url,method:'delete',id})
        super.showReturnMessage(result)
        await this.getInfoList()
    }
    async modifyInfoData(data) {
        let result = await super.receiveApi2ReturnData({stringifyData:data,url:this.url,method:'put'})
        super.showReturnMessage(result)
        this.root.dialogFormVisible = false
        await this.getInfoList()
    }
    async getInfoList() {
        let result = await super.receiveApi2ReturnData({url:this.url,method:'get'})
        super.showReturnMessage(result)
        this.root.tableData = result.data
    }
}
export class DealStudent extends DealData{
    url='/students';
    constructor(root, params, id, type, method) {
        super(root, params, id, type, method);
    }

    async getStudentList(params) {
        let result = await super.receiveApi2ReturnData({url:this.url,method:'get',params})
        this.root.commit('dealStudentList',result)
    }
    async deleteStudentData(id) {
        await super.receiveApi2ReturnData({url:this.url,method:'delete',id})
        await this.getStudentList()
    }
}
export class DealLogin extends DealData{
    url='/login'
    constructor(root, params, id, type, method) {
        super(root, params, id, type, method);
    }
    async reqLogin(data) {
        let result = await super.receiveApi2ReturnData({url:this.url,method:'post',data})
        try {
            await this.showReturnMessage(result)
            setToken('username', result.username)
            setToken('token', result.token)
            await this.root.$router.push('/home')
        }catch (e) {
            console.log(e)
        }
    }
}