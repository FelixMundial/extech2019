<template>
  <div id="app">
    <div class="app-header">
      <el-row type="flex" justify="space-between" class="app-header-el-row">
        <el-col :span=4>
          <div class="app-header-logo-area">
            <router-link :to="{path:'/', query: {activeMenuIndex: '1-1'}}">
              <img class="app-header-logo" src="./assets/icon_sprite.png" style="height: 80px" alt="">
            </router-link>
          </div>
        </el-col>
        <el-col :span=20>
          <el-row type="flex" justify="end">
            <el-col :span=5>
              <router-link to='/admin'>
                <i class="el-icon-setting"></i>
              </router-link>
              <el-dropdown class="app-dropdown">
                <span class="el-dropdown-link">
                  <i class="el-icon-question"></i>
                  <span> Contact Us</span><i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                <el-dropdown-menu slot="dropdown" class="el-dropdown-menu">
                  <el-dropdown-item class="el-dropdown-item"><i class="el-icon-message"></i> <el-tag type="success">cesoygf@mail.sysu.edu.cn</el-tag></el-dropdown-item>
                  <el-dropdown-item class="el-dropdown-item"><i class="el-icon-phone-outline"></i> <el-tag type="info">+86 (020) 84110953</el-tag></el-dropdown-item>
                  <el-dropdown-item class="el-dropdown-item">
                    <router-link :to="{path:'/contact', query: {activeName: 'third', activeMenuIndex: '3-3'}}">
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
      <!--navigation bar-->
      <el-menu background-color="#2F4F4F" text-color="#fff" active-text-color="#ffd04b" unique-opened
               class="app-nav" mode="horizontal" @select="handleSelect" :default-active="activeMenuIndex">
        <el-submenu index="1">
          <template slot="title">ExTech 2019</template>
          <el-menu-item class="nav-item" index="1-1">
            <router-link :to="{path:'/news', query: {activeName: 'first'}}">News</router-link>
          </el-menu-item>
          <el-menu-item class="nav-item" index="1-2">
            <router-link :to="{path:'/news', query: {activeName: 'second'}}">Topics</router-link>
          </el-menu-item>
          <el-menu-item class="nav-item" index="1-3">
            <router-link :to="{path:'/news', query: {activeName: 'third'}}">Timetable</router-link>
          </el-menu-item>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title">Registration</template>
          <el-menu-item class="nav-item" index="2-1">
            <router-link to="/registration">Registration</router-link>
          </el-menu-item>
          <el-menu-item class="nav-item" index="2-2">
            <router-link to="/">Submission</router-link>
          </el-menu-item>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title">Contact Us</template>
          <el-menu-item class="nav-item" index="3-1">
            <router-link :to="{path:'/contact', query: {activeName: 'first'}}">Committee</router-link>
          </el-menu-item>
          <el-menu-item class="nav-item" index="3-2">
            <router-link :to="{path:'/contact', query: {activeName: 'second'}}">Sponsors</router-link>
          </el-menu-item>
          <el-menu-item class="nav-item" index="3-3">
            <router-link :to="{path:'/contact', query: {activeName: 'third'}}">Find Us!</router-link>
          </el-menu-item>
        </el-submenu>
        <el-submenu index="4">
          <template slot="title">Take a Tour</template>
          <el-menu-item class="nav-item" index="4-1">
            <router-link :to="{path:'/tours', query: {activeName: 'first'}}">Navigation</router-link>
          </el-menu-item>
          <el-menu-item class="nav-item" index="4-2">
            <router-link :to="{path:'/tours', query: {activeName: 'second'}}">Accommodations</router-link>
          </el-menu-item>
          <el-menu-item class="nav-item" index="4-3">
            <router-link :to="{path:'/tours', query: {activeName: 'third'}}">Guided Tours</router-link>
          </el-menu-item>
        </el-submenu>
        <el-submenu index="5">
          <template slot="title">Programs</template>
          <el-menu-item class="nav-item" index="5-1">
            <router-link :to="{path:'/programs', query: {activeName: 'first'}}">SPME Symposium 2019</router-link>
          </el-menu-item>
          <el-menu-item class="nav-item" index="5-2">
            <router-link :to="{path:'/programs', query: {activeName: 'second'}}">SPME Courses</router-link>
          </el-menu-item>
        </el-submenu>
        <el-menu-item index="6" disabled>管理</el-menu-item>
      </el-menu>
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
      activeMenuIndex: this.$route.query.activeMenuIndex || '1-1'
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    }
  }
  // mounted () {
  //   let width = document.documentElement.offsetWidth || document.body.offsetWidth
  //   if (width < 1000) {
  //     this.visibleResponsively = false
  //   }
  // }
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
    font: inherit;
    vertical-align: baseline;
    font-size: .9rem !important;
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
    padding-top: 10px;
    background: #2F4F4F;
    color: azure;
    height: 100px;
    width: 100%;
  }
  .app-header a {
    color: lightgreen;
  }
  .app-header-logo {
    padding-left: 20%;
    width: 50%;
    height: 50%;
  }
  .app-dropdown {
    margin-top: 50px;
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
  .app-nav {
    padding: 0 50px;
  }
  .nav-item:not(:last-of-type) {
    border-bottom: 1px solid lightgreen;
  }
</style>
