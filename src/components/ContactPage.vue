<template>
  <div class="container">
    <div style="margin-top: 50px"></div>
    <el-card>
      <el-tabs v-model="activeName" tab-position="left">
        <el-tab-pane class="tab-pane" label="Committee" name="first">
          <div class="title"><i class="icon iconfont icon-zhongshandaxue-"></i> 会议负责人</div>
          <div class="text">会议负责人</div>
        </el-tab-pane>
        <el-tab-pane class="tab-pane" label="Sponsors" name="second">
          <div class="title"><i class="icon iconfont icon-huiyianpai"></i> 赞助商</div>
          <div class="text">赞助商</div>
        </el-tab-pane>
        <el-tab-pane class="tab-pane" label="Find Us!" name="third">
          <div class="title"><i class="icon iconfont icon-guojihuiyijihua"></i> Come find Us</div>
          <div class="text">Come find Us</div>
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
      activeName: this.$route.query.activeName || 'first'
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
