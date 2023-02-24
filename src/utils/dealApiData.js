import {reqApi2Data, reqLoginToken, reqStudentList} from "@/api";
import {setToken} from "@/utils/getToken";

export const dealInfoData = {
    url: '/info',

    addInfoData: function (root, data, url = this.url) {
        this.dealPromise({root, data, url, type: 'add', method: 'post'})
    },
    deleteInfoData: function (root, id, url = this.url) {
        this.dealPromise({root,id,url,type:'delete',method:'delete'})
    },
    modifyInfoData: function (root, data, url = this.url) {
        this.dealPromise({root, data, url, type: 'modify', method: 'put'})
    },
    getInfoList: function (root, url = this.url) {
        this.dealPromise({root, url, type: 'get', method: 'get'})
    },
    dealPromise: async function ({root, url, data, id, method, type}) {
        try {
            let result = await reqApi2Data({url,stringifyData:data, method, id})
            if (result.status === 200) {
                switch (type) {
                    case 'add':
                        console.log(result)
                        root.$message({type: "success", message: result.message})
                        root.tableData = result.data
                        root.dialogFormVisible = false
                        break
                    case 'delete':
                        root.$message({type: "success", message: result.message})
                        this.getInfoList(root)
                        break
                    case 'modify':
                        root.$message({type: "success", message: result.message})
                        this.getInfoList(root)
                        root.dialogFormVisible = false
                        break
                    case 'get':
                        root.tableData = result.data
                        break
                }
                return 'ok'
            } else {
                console.log(result.message)
            }
        } catch (error) {
            console.log(error)
        }
    }
}
export const dealStudentData = {
    url:'/students',
    getStudentList:function (root,params,url=this.url){
       this.dealPromise({root,params,url,type:'get',method:'get'})
    },
    deleteStudentData:function (root,id,url=this.url){
        this.dealPromise({root,url,id,type:'delete',method:'delete'})
    },
    dealPromise:async function ({root,params,url,id,type,method}){
        try {
            let result = await reqApi2Data({url,params,method,id})
            if (result.status === 200){
                switch (type) {
                    case 'get':
                        root.commit('dealStudentList',result)
                        break
                    case 'delete':
                        this.getStudentList(root)
                        break
                }
                return 'ok'
            }else {
                return Promise.reject(new Error(result.message))
            }
        }catch (e) {
            console.log(e)
        }

    }
}
export const dealLoginData = {
    url:'/login',
    reqLogin:async function (root,data,url=this.url){
        try {
            let result = await reqApi2Data({url,data,method:'post'})
            if (result.status === 200) {
                setToken('username', result.username)
                setToken('token', result.token)
                root.$message({message: result.message, type: 'success'})
                await root.$router.push('/home')
                return 'ok'
            }else {
                console.log(result.message)
            }
        }catch (error){
            console.log(error)
        }

    }
}