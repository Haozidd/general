<template>
  <div id="Home">
    <el-container>
      <el-header>
        <Header/>
      </el-header>
      <el-container>
        <el-aside>
          <Menu/>
        </el-aside>
        <el-main>
          Main
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

export default {
  name: "",
  components:{
    Header,
    Menu,
    Footer
  }
}
</script>

<style lang="scss" scoped>
#Home,.el-container{
  width: 100%;
  height: 100%;
}



</style>