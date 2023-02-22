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
  }
}
</script>

<style lang="scss">
@import url('./assets/css/reset.css');
body{
  height: 100vh;
  background:
      linear-gradient(150deg,rgba(0,0,0,.1),rgba(0,0,0,.1)),
      linear-gradient(150deg,plum,lemonchiffon);

}

#app {
  width: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}

</style>
