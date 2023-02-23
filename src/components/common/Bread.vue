<template>
<div id="bread">
  <el-card>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item v-for="(item,index) in $route.matched"
                          :to="{path:item.path}"
      >{{item.name}}</el-breadcrumb-item>
    </el-breadcrumb>
  </el-card>

</div>
</template>

<script>
export default {
  name: ""
}
</script>

<style scoped>

</style>