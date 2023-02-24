<template>
<div id="studentList" style="height: 100%;">
  <el-form :inline="true" :model="formInline" class="demo-form-inline" size="medium">
    <el-form-item label="">
      <el-input v-model="formInline.name" placeholder="请输入你要查询的名字"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="clickEvent('search')">查询</el-button>
      <el-button type="primary" @click="clickEvent('get')">重置</el-button>
    </el-form-item>
  </el-form>


  <el-table
      :data="sliceTableData"
      border
      style="width: 100%;height: 100%;"

  >
    <el-table-column prop="id" label="Id" align="center"/>
    <el-table-column prop="name" label="姓名" align="center"/>
    <el-table-column prop="age" label="年龄" align="center"/>
    <el-table-column prop="sex_text" label="性别" align="center"/>
    <el-table-column prop="number" label="学号" align="center"/>
    <el-table-column prop="class" label="班级" align="center"/>
    <el-table-column prop="state_text" label="状态" align="center"/>
    <el-table-column prop="address" label="地址" align="center"/>
    <el-table-column prop="phone" label="电话" align="center"/>
    <el-table-column label="操作" align="center">
      <template v-slot="scope">
        <el-button type="danger" size="mini" @click="clickEvent('delete',scope.row.id)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>

  <Pagination :goods-total="total" :page-size="pageSize" :pages-continuous="3" @buttonJump="buttonJump"></Pagination>

</div>
</template>

<script>
import Pagination from "@/components/Pagination";
import {mapGetters,mapState} from "vuex";
export default {
  name: "",
  components:{
    Pagination
  },
data(){
  return{
    pageNo:1,
    pageSize:5,
    formInline:{
      name:''
    }
  }
},
  mounted() {
    this.getData()
  },
  computed:{
    ...mapState({
      tableData: state => state.studentList.studentList,
      total:state => state.studentList.total
    }),
    sliceTableData(){
      return this.tableData.slice(((this.pageNo-1)*this.pageSize),(this.pageNo)*this.pageSize)
    }
  },
  methods:{
    getData(params){
      this.$store.dispatch('getStudentList',params)
    },
    clickEvent(type,id){
      switch (type){
        case 'search':
          this.getData(this.formInline)
          break
        case 'get':
          this.getData()
          break
        case 'delete':
          this.$store.dispatch('deleteStudentData',id)
          break
      }
    },
    buttonJump(pageNo){
      this.pageNo=pageNo
    }
  }
}
</script>

<style scoped>
.demo-form-inline{
  padding: 24px 0 0 20px ;
  text-align: left;
}
::before{
  height: 0;
}
</style>