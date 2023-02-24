<template>
  <div id="app">
        <router-view></router-view>
<!--    <button @click="test2" style="display: block;margin: 200px auto 0 ;transform: scale(10)">test</button>-->
  </div>
</template>

<script>

import {nanoid} from "nanoid";

export default {
  name: 'App',
  components: {},
  methods: {
    test() {
      function getSum(a, b, c) {
        return a + b + c
      }

      function curry(func) {
        return function curriedFn(...args) {
          if (args.length < func.length) {
            return function () {
              return curriedFn(...args.concat(Array.from(arguments)))
            }
          }
          return func(...args)
        }
      }

      const curried1 = curry(getSum)
      //curried1 = curriedFn(...ars)
      console.log(curried1(1))
    },


    test2() {
      let a={
        b:()=>nanoid()
      }
      console.log(a.b())
      console.log(a.b())
      console.log(a.b())

    },

  }
}
</script>

<style lang="scss">
@import url('./assets/css/reset.css');

body, html {
  width: 100%;
  height: 100%;


}

#app {
  width: 100%;
  height: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;

}

.el-header, .el-footer, .el-main {
  padding: 0 !important;
  margin: 0 !important;
}

</style>
