<template>
  <div class="container">
    <div style="margin-top: 50px"></div>
    <el-card>
      <el-tabs v-model="activeName" tab-position="left">
        <el-tab-pane class="tab-pane" label="News" name="first">
          <div class="title"><i class="icon iconfont icon-tixing6"></i> 会议通知</div>
          <div class="text">会议通知</div>
        </el-tab-pane>
        <el-tab-pane class="tab-pane" label="Timetable" name="third">
          <div class="title"><i class="icon iconfont icon-kecheng8"></i> 日程安排</div>
          <div class="text">日程安排</div>
        </el-tab-pane>
      </el-tabs>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'IntroPage',
  data () {
    return {
      activeName: this.$route.query.activeName || 'first'
    }
  }
}
</script>

<style scoped>
  .container {
    margin: 3rem 2rem;
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
  .text:first-letter {
    /*margin-left: 1em;*/
    font-size: 300%;
    font-family: Augusta,serif;
  }
  .icon {
    font-size: 30px !important;
  }
</style>
