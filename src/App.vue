<template>
  <div id="app">
    <div class="app-header">
      <el-row type="flex" justify="space-between" class="app-header-el-row">
        <el-col :span=4>
          <div class="app-header-logo-area">
            <router-link to='/'>
              <img class="app-header-logo" src="./assets/logos/extech2019.png" alt="">
            </router-link>
          </div>
        </el-col>
        <el-col :span=20>
          <el-row type="flex" justify="end">
            <el-col :span=5>
              <el-dropdown class="app-dropdown">
                <span class="el-dropdown-link">
                  <i class="iconfont icon-iconindexnor1"></i>
                  <span> Contact Us</span><i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                <el-dropdown-menu slot="dropdown" class="el-dropdown-menu">
                  <el-dropdown-item class="el-dropdown-item"><el-tag type="success"><i class="iconfont icon-youjian"></i> extech2019@mail.sysu.edu.cn</el-tag></el-dropdown-item>
                  <el-dropdown-item class="el-dropdown-item"><el-tag type="info"><i class="iconfont icon-icon2"></i> +86 (020) 84110953</el-tag></el-dropdown-item>
                  <el-dropdown-item class="el-dropdown-item">
                    <router-link to="/accommodation">
                      <el-badge is-dot class="item">
                        <el-button icon="iconfont icon-hangcheng1" type="primary"> Find Us here!</el-button>
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
      <el-menu background-color="#528266" text-color="#fff" active-text-color="#ffd04b" unique-opened
               class="app-nav" mode="horizontal" @select="handleSelect">
        <el-menu-item index="1"><router-link to="/news">
          <i class="iconfont icon-tixing2"></i> News
        </router-link></el-menu-item>
        <el-menu-item index="2"><router-link to="/registration">
          <i class="iconfont icon-applyFor"></i> Registration
        </router-link></el-menu-item>
        <el-menu-item index="3"><router-link to="/contact">
          <i class="iconfont icon-baoming3"></i> Contact
        </router-link></el-menu-item>
        <el-menu-item index="4"><router-link to="/accommodation">
          <i class="iconfont icon-zhusu"></i> Accommodations
        </router-link></el-menu-item>
        <el-menu-item index="5"><router-link to="/programs">
          <i class="iconfont icon-kecheng5"></i> Programs
        </router-link></el-menu-item>
        <el-menu-item index="6"><router-link to="/committee">
          <i class="iconfont icon-fuzeren"></i> Committee
        </router-link></el-menu-item>
        <el-menu-item index="7"><router-link to="/exploration">
          <i class="iconfont icon-guangzhou"></i> Exploration
        </router-link></el-menu-item>
        <!--<el-menu-item index="8" @click="loginFormVisible = true">-->
          <!--<i class="iconfont icon-guanli7"></i> 管理-->
        <!--</el-menu-item>-->
        <!--<el-dialog title="用户管理登陆" :visible.sync="loginFormVisible">-->
          <!--<el-form :model="loginForm">-->
            <!--<el-form-item label="登陆方式" label-width="120px">-->
              <!--<el-select v-model="loginForm.type" placeholder="请选择登陆方式">-->
                <!--<el-option label="密码登陆" value="namepass"></el-option>-->
                <!--<el-option label="扫码登陆" value="scanning"></el-option>-->
              <!--</el-select>-->
            <!--</el-form-item>-->
            <!--<el-form-item label="用户名" label-width="120px">-->
              <!--<el-input v-model="loginForm.name" autocomplete="off" clearable></el-input>-->
            <!--</el-form-item>-->
            <!--<el-form-item label="密码" label-width="120px">-->
              <!--<el-input v-model="loginForm.pass" type="password" autocomplete="off" clearable></el-input>-->
            <!--</el-form-item>-->
            <!--<div v-if="loginFailedTextVisible" class="login-failed-text">* 登陆失败</div>-->
          <!--</el-form>-->
          <!--<div slot="footer" class="dialog-footer">-->
            <!--<el-button @click="loginFormVisible = false">取 消</el-button>-->
            <!--<el-button type="primary" @click="handleLoginCheck">登 陆</el-button>-->
          <!--</div>-->
        <!--</el-dialog>-->
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
      // activeMenuIndex: this.$route.query.activeMenuIndex || '1-1',
      loginFormVisible: false,
      loginForm: {
        type: '',
        name: '',
        pass: ''
      },
      loginFailedTextVisible: false
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    },
    handleLoginCheck () {
      if (this.loginForm.name === 'spme' && this.loginForm.pass === '84110953') {
        this.loginFormVisible = false
        this.$router.push({path: '/admin'})
      } else {
        this.loginFailedTextVisible = true
        this.loginForm.name = ''
        this.loginForm.pass = ''
      }
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
    background-color: rgba(20, 250, 20, 0.1);
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
    font-size: 1rem !important;
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
    background: #528266;
    color: azure;
    height: 100px;
    width: 100%;
  }
  .app-header a {
    color: lightgreen;
  }
  .app-header-logo {
    padding-left: 50px;
    height: 95px;
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
    padding: 1rem !important;
  }
  .app-nav {
    padding: 0 75px;
  }
  .nav-item:not(:last-of-type) {
    border-bottom: 1px solid lightgreen;
  }
  .login-failed-text {
    color: red;
    width: 200px;
  }
  .app-content {
    padding-bottom: 2%;
  }
  .header-patch {
    margin-top: 75px;
  }
</style>
