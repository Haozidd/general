import {reqApi2Data} from "@/api";

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
            let result = await reqApi2Data({url, data, method, id})
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
export const dealStudentData = {}