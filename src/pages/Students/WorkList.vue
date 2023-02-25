<template>
  <div id="homework">
    <el-table
        :data="tableData"
        border
        style="width: 100%;height: 100%;"

    >
      <el-table-column prop="id" label="Id" align="center"/>
      <el-table-column prop="userId" label="Class" align="center"/>
      <el-table-column prop="title" label="Homework" align="center"/>
      <el-table-column prop="completed_text" label="IsComplete" align="center"/>

    </el-table>


    <Pagination :goods-total="total" :page-size="pageSize" :pages-continuous="3" @buttonJump="buttonJump"></Pagination>
  </div>

</template>

<script>
import {DealHomework} from "@/utils/dealApiData";
import Pagination from "@/components/Pagination";
import {debounce} from 'lodash'

export default {
  name: "",
  components: {
    Pagination
  },
  data() {
    return {
      tableData: [],
      total: '',
      pageSize: 10,
      pageNo: 1
    }
  },
  methods: {
    buttonJump: debounce(function (pageNo) {
      this.pageNo = pageNo
      new DealHomework(this).getHomeworkList({page: this.pageNo, size: this.pageSize})
    }, 200)
  },
  mounted() {
    new DealHomework(this).getHomeworkList({page: this.pageNo, size: this.pageSize})
  }
}
</script>

<style scoped>

</style>