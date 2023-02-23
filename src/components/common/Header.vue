<template>
<div id="Header" style="height: 100%">
  <el-header>
    <div class="title">General Background Management System</div>
    <div class="user">{{name}}</div>
  </el-header>
</div>
</template>

<script>
import {getToken} from "@/utils/Token";

export default {
  name: "",
  data(){
    return{
      name:getToken('username')
    }
  },
}
</script>

<style lang="scss" scoped>
#Header{
  background-color: gray;
}
.el-header{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.title{
  position: relative;
  left: 2%;
  font-size: 20px;
}
.user{
  position: relative;
  right: 2%;
  font-size: 15px;
}
</style>