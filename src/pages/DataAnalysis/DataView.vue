<template>
<div id="dita-view">
  <el-card>
    <div id="main1"></div>
  </el-card>
  <el-card>
    <div id="main2">ssasasa</div>
  </el-card>
</div>
</template>

<script>
export default {
  name: "",
  mounted() {
    this.draw({id:'main1'})
    this.$api.reqApi2Data({url:'/dataview',method:'get'}).then(
        res=>{
          let {legend,xAxis,series}=res.data
          this.draw2({legend,xAxis,series,id:'main2'})
        }
    )
  },
  methods:{
    draw({legend,xAxis,series,id}){
      let myChart = this.$echarts.init(document.getElementById(id))
      let option = {
        title: {
          text: 'ECharts 入门示例'
        },
        tooltip: {
          trigger:'axis'
        },
        legend: {
          data: ['销量']
        },
        xAxis: {
          type:'category',
          data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
        },
        yAxis: {},
        series: [
          {
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
          }
        ]
      };
      myChart.setOption(option);
    },
    draw2({legend,xAxis,series,id}){
      let myChart = this.$echarts.init(document.getElementById(id))
      let option = {
        tooltip: {
          trigger:'axis'
        },
        legend: {
          data: legend
        },
        xAxis: {
          type:'category',
          data: xAxis
        },
        yAxis: {},
        series
      };
      myChart.setOption(option);
    }
  }
}
</script>

<style lang="scss">
#dita-view{
  width: 100%;
  display: flex;
  justify-content: space-between;
  .el-card{
    width: 50%;
    #main1,#main2{
      height: 500px;
    }
  }
}
</style>