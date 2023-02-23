<template>
  <div id="Menu">
    <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
        router
    >
      <template v-for="(childModule,index1) in homeChildrenModule">
        <el-submenu index="1" :key="index1">
          <template slot="title" >
            <i :class="childModule.iconClass" style="margin-right: 10px"></i>
            <span>{{childModule.name}}</span>
          </template>
          <el-menu-item-group>
            <el-menu-item :index="`${subChild.path}`"
                          v-for="(subChild,index2) in childModule.children"
                          :key="index2"
            >
              {{ subChild.name }}
            </el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </template>


    </el-menu>
  </div>
</template>

<script>
export default {
  name: "",
  data(){
    return{
      moduleList:[...this.$router.options.routes]
    }
  },
  computed:{
    homeChildrenModule(){
      return this.moduleList.find(element=>element.path==="/home").children
    }
  },
  methods:{
  },
}
</script>

<style lang="scss">
#Menu{
  height: 100%;
  .el-menu{
    height: 100%;
    width: 100%;
  }





}
</style>