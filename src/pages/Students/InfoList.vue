<template>
<div>
  <h1>wo shi Infod</h1><h1>wo shi Infod</h1><h1>wo shi Infod</h1>
  <Pagination :page-no="5" :page-size="5" :pages-total="20" :pages-continuous="3" :goods-total="200"></Pagination>
</div>



</template>

<script>
import Pagination from "@/components/Pagination";
export default {
  name: "",
  components: {
    Pagination
  }

}
</script>

<style scoped>

</style>