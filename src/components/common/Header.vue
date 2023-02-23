<template>
<div id="Header" style="height: 100%">
  <el-header>
    <el-link class="title" :underline="false" @click="$router.push('/home')">General Background Management System</el-link>
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
  background-color: white;
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