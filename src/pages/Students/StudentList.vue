<template>
<div id="studentList" style="height: 100%;">
  <el-table
      :data="tableData"
      border
      style="width: 100%;height: 100%;"

  >
    <el-table-column prop="id" label="Id" align="center"/>
    <el-table-column prop="name" label="姓名" align="center"/>
    <el-table-column prop="age" label="年龄" align="center"/>
    <el-table-column prop="sex" label="性别" align="center"/>
    <el-table-column prop="number" label="学号" align="center"/>
    <el-table-column prop="class" label="班级" align="center"/>
    <el-table-column prop="state" label="状态" align="center"/>
    <el-table-column prop="address" label="地址" align="center"/>
    <el-table-column prop="phone" label="电话" align="center"/>
    <el-table-column label="操作" align="center">
      <template>
        <el-button type="danger" size="mini">删除</el-button>
      </template>
    </el-table-column>


  </el-table>
</div>
</template>

<script>
import {reqStudentList} from "@/api";

export default {
  name: "",
  data(){
    return{
      tableData: []
    }
  },
  mounted() {
    this.getStudentList()
  },
  methods:{
    async getStudentList(){
      let result = await reqStudentList()
      console.log(result)
      if (result.status===200){
        this.tableData = result.data
      }
    }
  }
}
</script>

<style scoped>

</style>