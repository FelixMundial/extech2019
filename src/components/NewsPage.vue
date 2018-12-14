<template>
  <div class="container">
    <div style="margin-top: 50px"></div>
    <el-card>
      <!--<el-tabs v-model="activeName" tab-position="left">-->
      <el-tabs tab-position="left">
        <el-tab-pane class="tab-pane" label="News">
          <el-row type="flex" justify="center">
            <el-button type="info" plain>Contact Us | 联系我们</el-button>
          </el-row>
          <div v-for="o in section1" :key="o" class="main">
            <div class="title"><i class="icon iconfont icon-tixing6"></i> {{ o.title }}</div>
            <div class="text">{{ o.textEN }}</div>
            <div v-html="signitureEN" class="signiture">
              {{ signitureEN }}
            </div>
            <div class="separator"></div>
            <div class="text">{{ o.textCN }}</div>
            <div v-html="signitureCN" class="signiture">
              {{ signitureCN }}
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane class="tab-pane" label="Important Dates">
          <div v-for="o in section2" :key="o" class="main">
            <div class="title"><i class="icon iconfont icon-kecheng8"></i> {{ o.title }}</div>
            <div class="text">{{ o.textEN }}</div>
            <div class="separator"></div>
            <div class="text">{{ o.textCN }}</div>
          </div>
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
      // activeName: this.$route.query.activeName || 'first',
      section1: [{title: 'First Call for the 21th edition of ExTech | 第一轮会议通知',
        textEN: `On behalf of the Scientific Committee and the Organizing Committee I am pleased to announce the First Call for Abstracts for the 21th edition of ExTech, the International Symposium on Advances in Extraction Technologies, to be held in Guangzhou, China, from 8th to 13th November 2019.
The ExTech symposium series is the flagship event for sample preparation, analytical extraction and sample clean-up techniques. The series, started in 1999 by professor Janusz Pawliszyn (University of Waterloo), has been held annually around the world. The ExTech aims to explore new advances in sample pretreatment techniques and to disseminate new ideas in the field.
A short course on SPME will be held on the 12th of November 2019.
Join many other scientists and practitioners, from universities and scientific research institutions and corporations, active at the frontiers of the expanding field of sample preparation, as they gather to discuss groundbreaking research and the development direction of this field.
On-line registration and submission of abstracts is now available on our website, more information please click links (?).
`,
        textCN: `第21届先进萃取技术国际研讨会（ExTech2019）将于2019年11月8日至13日在中国广州隆重举行。
先进萃取技术国际研讨会（ExTech）是由Waterloo大学分析化学系Janusz Pawliszyn教授发起的关于样品前处理、分析萃取和样品纯化技术的国际最高学术会议，每年举办一届。该会议旨在于探讨样品前处理技术的新进展，并传播该领域的新思想。（会议旨在为从事样品前处理等研究领域的专家学者、技术研发人员提供一个共享科研成果和前言技术、了解学术发展趋势、拓宽研究思路、加强学术研究与探讨的平台。）
同时，本次会议还将于2019年11月12日举办SPME课程培训活动。
会议诚邀国内外高校、科研机专家和学者及企业界相关人士参加，并讨论前沿的研究成果和探讨该领域的发展方向。
在线注册和摘要提交现已在我们的网站上开放，更多信息请点击链接（？）。
`}],
      section2: [{title: 'First Call for the 21th edition of ExTech | 第一轮会议通知',
        textEN: `On behalf of the Scientific Committee and the Organizing Committee I am pleased to announce the First Call for Abstracts for the 21th edition of ExTech, the International Symposium on Advances in Extraction Technologies, to be held in Guangzhou, China, from 8th to 13th November 2019.
The ExTech symposium series is the flagship event for sample preparation, analytical extraction and sample clean-up techniques. The series, started in 1999 by professor Janusz Pawliszyn (University of Waterloo), has been held annually around the world. The ExTech aims to explore new advances in sample pretreatment techniques and to disseminate new ideas in the field.
A short course on SPME will be held on the 12th of November 2019.
Join many other scientists and practitioners, from universities and scientific research institutions and corporations, active at the frontiers of the expanding field of sample preparation, as they gather to discuss groundbreaking research and the development direction of this field.
On-line registration and submission of abstracts is now available on our website, more information please click links (?).
`,
        textCN: `第21届先进萃取技术国际研讨会（ExTech2019）将于2019年11月8日至13日在中国广州隆重举行。
先进萃取技术国际研讨会（ExTech）是由Waterloo大学分析化学系Janusz Pawliszyn教授发起的关于样品前处理、分析萃取和样品纯化技术的国际最高学术会议，每年举办一届。该会议旨在于探讨样品前处理技术的新进展，并传播该领域的新思想。（会议旨在为从事样品前处理等研究领域的专家学者、技术研发人员提供一个共享科研成果和前言技术、了解学术发展趋势、拓宽研究思路、加强学术研究与探讨的平台。）
同时，本次会议还将于2019年11月12日举办SPME课程培训活动。
会议诚邀国内外高校、科研机专家和学者及企业界相关人士参加，并讨论前沿的研究成果和探讨该领域的发展方向。
在线注册和摘要提交现已在我们的网站上开放，更多信息请点击链接（？）。
`}],
      signitureEN: `
              <p>Professor. Gangfeng Ouyang</p>
              <p>Chairman ExTech2019</p>
              <p>School of Chemistry </p>
              <p>Sun Yat-sen University</p>
              <p>Guangzhou, China</p>
              <p>cesoygf@mail.sysu.edu.cn</p>
`,
      signitureCN: `
              <p>欧阳钢锋 教授</p>
              <p>ExTech2019会议主席</p>
              <p>化学学院</p>
              <p>中山大学，中国广州</p>
              <p>cesoygf@mail.sysu.edu.cn</p>
`
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
  .main {
    margin-bottom: 30px;
    padding-bottom: 30px;
    border-bottom: 1px solid lightgreen;
  }
  .title {
    padding: 2rem;
    font-size: 150% !important;
    font-weight: bold;
    line-height: 40px;
    text-align: center;
  }
  .text {
    padding-bottom: 2rem;
    font-size: larger !important;
    line-height: 40px;
    text-align: left;
  }
  .text:first-letter {
    /*margin-left: 1em;*/
    font-size: 300%;
    font-family: Augusta,serif;
  }
  .signiture {
    font-weight: bold;
  }
  .separator {
    margin-bottom: 40px;
    padding-bottom: 10px;
    border-bottom: .8px solid lightgreen;
  }
  .icon {
    font-size: 30px !important;
  }
</style>
