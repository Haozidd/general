<template>
  <div class="pagination">
    <!--    Front-->
    <button :disabled="pageNo===1" @click="jump(pageNo+-1)">上一页</button>
    <button v-show="beginAndEndNumber.begin>1" @click="jump(1)">1</button>
    <button disabled v-show="beginAndEndNumber.begin>2">···</button>


    <!--    Middle-->
    <button v-for="(_,index) in beginAndEndNumber.pagesContinuous"
            @click="jump(beginAndEndNumber.begin+index)" :key="index"
            :class="{currentPage:pageNo===beginAndEndNumber.begin+index}"
    >

      {{ beginAndEndNumber.begin + index }}

    </button>


    <!--    Behind-->
    <button disabled v-show="beginAndEndNumber.begin+pagesContinuous-1<pagesTotal-1">···</button>
    <!--    This button will be hidden in pagesTotal less than beginPage+continuePage  -->
    <button v-show="beginAndEndNumber.begin+pagesContinuous-1<pagesTotal" @click="jump(pagesTotal)">{{pagesTotal}}</button>
    <!--    CurrentPage is equal to totalPage, the next of button is disable-->
    <button :disabled="pageNo===pagesTotal" @click="jump(pageNo+1)">下一页</button>


    <!--    Total-->
    <button :style="{marginLeft:30+'px',background:'transparent'}">共 {{ goodsTotal }} 条</button>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  props: ['pageSize','goodsTotal', 'pagesContinuous'],
  data(){
    return{
      pageNo:1
    }
  },
  methods: {
    jump(pageNo) {
      this.pageNo = pageNo
      this.$emit('buttonJump', pageNo)
    },
  },
  computed: {
    pagesTotal(){
      return Math.ceil(this.goodsTotal/this.pageSize)
    },
    beginAndEndNumber() {
      let {pagesTotal, pagesContinuous, pageNo} = this
      let begin, end

      if (pagesTotal < pagesContinuous) {
        begin = 1
        end = pagesTotal
        pagesContinuous = pagesTotal
      }

      begin = pageNo - (Math.floor(pagesContinuous / 2))

      if (begin < 1) {
        begin = 1
      }
      if (begin + pagesContinuous > pagesTotal) {
        begin = pagesTotal - pagesContinuous + 1
      }


      return {begin, end, pagesContinuous}
    }
  }
}
</script>

<style lang="scss" scoped>
.pagination {
  text-align: center;
  button {
    margin: 0 7px;
    background-color: #f4f4f5;
    color: #606266;
    border-radius: 4px;
    padding: 0 10px;
    font-size: 13px;
    min-width: 40px;
    min-height: 30px;
    cursor: pointer;
    border: 0;
    transition: 200ms;
    display: inline-block;
    &[disabled]{
      color: gray;
      cursor: not-allowed;
    }
    &:hover{
      -webkit-transform: translate(-4px,-4px);
      box-shadow: 2px 2px 5px #c7c7c7;
    }
  }
}

.currentPage {
  transition: 200ms;
  background: rgb(245, 108, 109) !important;
  color: white !important;

  &:hover{
    -webkit-transform: translate(0) !important;
    box-shadow: 0 0 !important;
  }
}
</style>