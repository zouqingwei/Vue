<template>
  <div class="chart-container">
    <chart height="100%" width="100%" />
  </div>
</template>

<script>
// 安装 npm install echarts@4.9.0
import Chart from '@/components/Charts/MixChart'

export default {
  name: 'MixChart',
  components: { Chart }
}
</script>

<style scoped>
.chart-container{
  position: relative;
  width: 100%;
  height: calc(100vh - 84px);
}
</style>

