<template>
  <div class="container">
    <div class="header-patch"></div>
    <el-card>
      <el-tabs tab-position="left">
        <el-tab-pane class="tab-pane" label="SPME Symposium 2019">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

        </el-tab-pane>
        <el-tab-pane class="tab-pane" label="SPME Courses">
          <div>PLACEHOLDER COMPONENT</div>
        </el-tab-pane>
      </el-tabs>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'ProgramsPage',
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
  .tab-pane {
    padding: 2rem;
  }
</style>
