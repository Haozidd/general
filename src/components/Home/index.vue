<template>
  <div id="Home">
    <el-container>
      <el-header>
        <Header/>
      </el-header>


      <el-container >
        <el-aside style="width: 220px;">
          <Menu/>
        </el-aside>


        <el-main>
          <Bread></Bread>
          <router-view></router-view>
        </el-main>
      </el-container>


      <el-footer>
        <Footer/>
      </el-footer>
    </el-container>

  </div>

</template>

<script>
import Header from "@/components/common/Header";
import Menu from "@/components/common/Menu";
import Footer from "@/components/common/Footer";
import Bread from "@/components/common/Bread";

export default {
  name: "Home",
  components:{
    Header,
    Menu,
    Footer,
    Bread
  }
}
</script>

<style lang="scss" scoped>
#Home,.el-container{
  width: 100%;
  height: 100%;
}



</style>