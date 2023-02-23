<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
  methods:{
    test(){
    }
  }
}
</script>

<style lang="scss">
@import url('./assets/css/reset.css');
body,html{
  width: 100%;
  height: 100%;


}
#app {
  width: 100%;
  height: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}
.el-header,.el-footer,.el-main{
  padding: 0 !important;
  margin: 0 !important;
}

</style>
