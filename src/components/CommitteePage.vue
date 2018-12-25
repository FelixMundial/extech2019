<template>
  <div class="container">
    <div class="header-patch"></div>
    <el-card class="card">
      <el-tabs tab-position="left">
        <el-tab-pane class="tab-pane" label="Organization Committee">
          <div class="title"><i class="icon iconfont icon-huaxue1"></i> 组织委员会</div>
          <div class="text">组织委员会</div>
        </el-tab-pane>
        <el-tab-pane class="tab-pane" label="Sponsors">
          <div class="title"><i class="icon iconfont icon-huiyianpai"></i> 赞助商</div>
          <div class="text">赞助商</div>
        </el-tab-pane>
      </el-tabs>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'ContactPage',
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
  .card {
    min-height: 1400px;
  }
  .tab-pane {
    padding: 2rem;
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
