<template>
  <div class="container">
    <div style="margin-top: 50px"></div>
    <el-card>
      <div class="title"><i class="icon iconfont icon-zhongshandaxue-"></i> 学术委员会</div>
      <div class="text">学术委员会</div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'CommitteePage',
  data () {
    return {
      // activeName: this.$route.query.activeName || 'first'
    }
  }
}
</script>

<style scoped>
  .container {
    margin: 3rem;
    line-height: 30px;
    text-align: left;
  }
  .title {
    padding: 2rem;
    font-size: 150% !important;
    font-weight: bold;
    text-align: center;
  }
  .text {
    border-bottom: 1px solid lightgreen;
    padding-bottom: 2rem;
    font-size: larger !important;
    line-height: 30px;
    text-align: left;
  }
  .icon {
    font-size: 30px !important;
  }
</style>
