<template>
  <div id="app">
    <div class="app-header">
      <el-row type="flex" justify="space-between" class="app-header-el-row">
        <el-col :span=4>
          <div class="app-header-logo-area">
            <router-link :to="{path:'/', query: {activeMenuIndex: 1}}">
              <img class="app-header-logo" src="./assets/logo.png">
            </router-link>
          </div>
        </el-col>
        <el-col span=20>
          <el-row type="flex" justify="end">
            <el-col :span=4>
              <el-dropdown>
                  <span class="el-dropdown-link">
                    <i class="el-icon-question"></i>
                    <span v-show="visibleResponsively"> Contact Us</span><i class="el-icon-arrow-down el-icon--right"></i>
                  </span>
                <el-dropdown-menu slot="dropdown" class="el-dropdown-menu">
                  <el-dropdown-item class="el-dropdown-item"><i class="el-icon-message"></i> <el-tag type="success">cesoygf@sysu.edu.cn</el-tag></el-dropdown-item>
                  <el-dropdown-item class="el-dropdown-item"><i class="el-icon-phone-outline"></i> <el-tag type="info">+86 (020) 84110953</el-tag></el-dropdown-item>
                  <el-dropdown-item class="el-dropdown-item">
                    <!--<router-link :to="{path:'/about', query: {activeName: 'second', activeMenuIndex: 6}}">-->
                    <router-link to="/">
                      <el-badge is-dot class="item">
                        <el-button icon="el-icon-location" type="primary"> Find Us here!</el-button>
                      </el-badge>
                    </router-link>
                  </el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </div>

    <div class="app-content">
      <keep-alive><router-view/></keep-alive>
    </div>

  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      visibleResponsively: true
    }
  },
  mounted () {
    let width = document.documentElement.offsetWidth || document.body.offsetWidth
    if (width < 1000) {
      this.visibleResponsively = false
    }
  }
}
</script>

<style>
  #app {
    font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin: 0 auto;
    width: 100%;
  }
  /* http://meyerweb.com/eric/tools/css/reset/
   v2.0 | 20110126
   License: none (public domain)
  */
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
    font-size: 1em !important;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  body {
    background: #fff;
  }
  .app-header {
    padding-top: 20px;
    background: #2F4F4F;
    color: azure;
    height: 80px;
    line-height: 65px;
    width: 100%;
  }
  .app-header a {
    color: lightgreen;
  }
  .app-header-logo {
    /*float: left;*/
    width: 50%;
    height: 50%;
    margin: 0 2rem;
  }
  .nav-separator {
    padding: 0 10px;
  }
  .el-dropdown-link {
    color: beige;
    font-family: Verdana,sans-serif;
    font-size: 1rem;
    padding-left: .3rem;
  }
  .el-dropdown-menu {
    font-family: Verdana,sans-serif;
  }
  .el-dropdown-item {
    padding: 1rem;
  }
</style>
