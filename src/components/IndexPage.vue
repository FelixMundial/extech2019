<template>
  <div class="extech-container">
    <swiper :options="swiperOption" ref="mySwiper">
      <!-- slides -->
      <swiper-slide v-for="item in imgLibrary" :key="item">
        <img :src="item.src"/>
        <h1 class="swiper-slide-title">{{ item.title }}</h1>
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>
      <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
      <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
      <div class="swiper-scrollbar"   slot="scrollbar"></div>
    </swiper>
    <div class="extech-main">
      <!--<el-row>-->
        <!--<el-popover placement="top-start" width="1000" v-model="popoverShown" trigger="manual">-->
          <!--<div>-->
            <!--<el-row>-->
              <!--<el-col :span=12>-->
                <!--<div class="popover-text">-->
                  <!--<p style="text-align: center; font-family: 'Times New Roman',serif; font-size: 150% !important; margin-bottom: 1rem">-->
                    <!--Professor. Gangfeng Ouyang-->
                  <!--</p>-->
                  <!--<p><i class="iconfont icon-guwenshifuwu-copy" style="font-weight: normal"></i> Chairman ExTech2019</p>-->
                  <!--<p>School of Chemistry</p>-->
                  <!--<p><i class="iconfont icon-zhongshandaxue-" style="font-weight: normal"></i> 中山大学，中国广州</p>-->
                  <!--<el-tag style="margin-top: 10px"><i class="iconfont icon-youxiang" style="font-weight: normal"></i> cesoygf@mail.sysu.edu.cn</el-tag>-->
                <!--</div>-->
              <!--</el-col>-->
              <!--<el-col :span=12>-->
                <!--<div class="popover-text">-->
                  <!--<p style="text-align: center; font-family: 'Times New Roman',serif; font-size: 150% !important; margin-bottom: 1rem">-->
                    <!--欧阳钢锋 教授-->
                  <!--</p>-->
                  <!--<p><i class="iconfont icon-guwenshifuwu-copy" style="font-weight: normal"></i> ExTech2019会议主席</p>-->
                  <!--<p>化学学院</p>-->
                  <!--<p><i class="iconfont icon-zhongshandaxue-" style="font-weight: normal"></i> 中山大学，中国广州</p>-->
                  <!--<el-tag style="margin-top: 10px"><i class="iconfont icon-youxiang" style="font-weight: normal"></i> extech2019@mail.sysu.edu.cn</el-tag>-->
                <!--</div>-->
              <!--</el-col>-->
            <!--</el-row>-->
          <!--</div>-->
          <!--<div style="text-align: center; margin: 10px auto">-->
            <!--<el-button size="mini" type="text" @click="popoverShown = false"><i class="iconfont icon-fanhui5" style="font-size: larger !important;"></i></el-button>-->
            <!--<el-button type="primary" plain size="mini" @click="popoverShown = false">-->
              <!--<router-link to="/registration">-->
                <!--Register Now <i class="iconfont icon-tijiao"></i> 报名入口-->
              <!--</router-link>-->
            <!--</el-button>-->
          <!--</div>-->
          <!--<el-button slot="reference" class="extech-header" type="primary" plain-->
                     <!--@click="popoverShown = !popoverShown">-->
            <!--About ExTech <i class="iconfont icon-fuzeren"></i> 主负责人-->
          <!--</el-button>-->
        <!--</el-popover>-->
        <!--<el-popover ref="popover" placement="top-start" width="500" trigger="hover">-->
          <!--<div class="popover-text" ref="popover2">-->
            <!--<p><i class="iconfont icon-huaxue1"></i> Guangdong Chemical Society</p>-->
            <!--<p>National Natural Science Foundation of China</p>-->
            <!--<p>Guangzhou Association for Science and Technology</p>-->
            <!--<p>The Innovation and Talent Introduction Base of Photoelectronic and Functional Molecular Solids Materials, SYSU</p>-->
            <!--<p><i class="iconfont icon-huaxue"></i> School of Chemistry and Chemical Science, SYSU</p>-->
          <!--</div>-->
          <!--<div style="text-align: right; margin: 0">-->
            <!--<el-button type="primary" plain size="mini">-->
              <!--<router-link to="/registration">-->
                <!--Register Now <i class="iconfont icon-tijiao"></i> 报名入口-->
              <!--</router-link>-->
            <!--</el-button>-->
          <!--</div>-->
        <!--</el-popover>-->
        <!--<el-button v-popover:popover class="extech-header" type="info" plain>-->
          <!--About ExTech <i class="iconfont icon-cbdw"></i> 协办单位-->
        <!--</el-button>-->
      <!--</el-row>-->
      <!--welcome-->
      <el-row>
        <div class="extech-title"><i class="icon iconfont icon-huanyingye"></i> Welcome to ExTech 2019!</div>
      </el-row>
      <el-card class="box-card">
        <div class="welcome-title" v-for="o in welcomeTitle" :key="o">
          {{ o }}
        </div>
        <div class="welcome-text" v-for="o in welcomeText" :key="o">
          {{ o }}
        </div>
        <el-card>
          <el-row type="flex" justify="space-around">
            <el-col>
              <div class="popover-text">
                <p style="text-align: center; font-family: 'Times New Roman',serif; font-size: 150% !important; margin-bottom: 1rem">
                  Professor. Gangfeng Ouyang
                </p>
                <p><i class="iconfont icon-guwenshifuwu-copy" style="font-weight: normal"></i> Chairman ExTech2019</p>
                <p>School of Chemistry</p>
                <p><i class="iconfont icon-zhongshandaxue-" style="font-weight: normal"></i> Sun Yat-sen University, Guangzhou, China</p>
                <el-tag style="margin-top: 10px"><i class="iconfont icon-youxiang" style="font-weight: normal"></i> cesoygf@mail.sysu.edu.cn</el-tag>
              </div>
            </el-col>
            <el-col>
              <div class="popover-text">
                <p style="text-align: center; font-family: 'Times New Roman',serif; font-size: 150% !important; margin-bottom: 1rem">
                  欧阳钢锋 教授
                </p>
                <p><i class="iconfont icon-guwenshifuwu-copy" style="font-weight: normal"></i> ExTech2019会议主席</p>
                <p>化学学院</p>
                <p><i class="iconfont icon-zhongshandaxue-" style="font-weight: normal"></i> 中山大学，中国广州</p>
                <el-tag style="margin-top: 10px"><i class="iconfont icon-youxiang" style="font-weight: normal"></i> extech2019@mail.sysu.edu.cn</el-tag>
              </div>
            </el-col>
          </el-row>
        </el-card>
        <el-collapse v-model="activeNames">
          <el-collapse-item title="协办单位" name="assisting">
            <el-row type="flex" justify="space-around">
              <el-col>
                <div class="popover-text">
                  <p><i class="iconfont icon-huaxue1"></i> Guangdong Chemical Society</p>
                  <p>National Natural Science Foundation of China</p>
                  <p>Guangzhou Association for Science and Technology</p>
                  <p>The Innovation and Talent Introduction Base of Photoelectronic and Functional Molecular Solids Materials, SYSU</p>
                  <p><i class="iconfont icon-huaxue"></i> School of Chemistry and Chemical Science, SYSU</p>
                </div>
              </el-col>
              <el-col>
                <div class="popover-text">
                  <p><i class="iconfont icon-huaxue1"></i> Guangdong Chemical Society</p>
                  <p>National Natural Science Foundation of China</p>
                  <p>Guangzhou Association for Science and Technology</p>
                  <p>The Innovation and Talent Introduction Base of Photoelectronic and Functional Molecular Solids Materials, SYSU</p>
                  <p><i class="iconfont icon-huaxue"></i> School of Chemistry and Chemical Science, SYSU</p>
                </div>
              </el-col>
            </el-row>
          </el-collapse-item>
        </el-collapse>
      </el-card>
      <!--topics-->
      <el-row>
        <div class="extech-title"><i class="icon iconfont icon-zhuti"></i> Topics</div>
      </el-row>
      <el-card class="box-card">
        <div class="welcome-text">
          {{ topicText[0] }}
        </div>
        <div v-for="(o, index) in topicList" :key="index" class="topic-text">
          <i class="iconfont icon-zhuti4"></i> {{ o }}
        </div>
        <div>
          <p class="topic-text">{{ topicText[1] }}</p>
          <p class="topic-text">After the meeting participants will be invited to submit a full length manuscript for possible publication in <i style="font-style: italic; font-family: 'Times New Roman'">Analytica Chimica Acta</i> including a Virtual Special Issue devoted to ExTech2019. This is a totally new concept, which will result in a conference special issue more complete and accessible than it has ever been.
          </p>
        </div>
      </el-card>
      <!--sponsors-->
      <div class="box-card">
        <el-row>
          <div class="extech-title"><i class="icon iconfont icon-zanzhushang"></i> Sponsors</div>
        </el-row>
        <el-row :gutter=50>
          <el-col v-for="(o, index) in 10" :key="index" style="margin: 40px; width: 300px">
            <el-card>
              <!--<img src="../assets/logo.png">-->
              <img src="">
              <div style="padding: 14px;">赞助商{{ index + 1 }}</div>
            </el-card>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'ExTech',
  data () {
    return {
      activeNames: ['assisting'],
      welcomeTitle: ['Welcome to the 21st edition of Index, the International Symposium on Advances in Extraction Technologies, to be held in Sun Yat-sen University, Guangzhou, China, from 8th - 13th November, 2019.', '欢迎参加第21届国际先进萃取研讨会（ExTech 2019），会议将于2019年11月9-13日于中山大学（中国，广州）举办。'],
      welcomeText: [`The ExTech symposium series is the flagship event for sample preparation, analytical extraction and sample clean-up techniques. The series, started in 1999 by professor Janusz Pawliszyn (University of Waterloo), has been held annually around the world. The ExTech aims to explore new advances in sample pretreatment techniques and to disseminate new ideas in the field.
In its 21th year, this cutting edge international research meeting will be hosted by the School of Chemistry of Sun Yat-sen University from 8th to 13th November 2019 in Guangzhou, one of the most attractive and advanced cities in China. This symposium will take place in the Fulan Academic Center, School of Chemistry. Contributed sessions will showcase innovative researches, cutting edge technologies, as well as new products and techniques in a broad range of analytical chemistry. A short SPME course will be held on the 12th of November 2019.
Join many other scientists and practitioners, from universities and scientific research institutions and corporations, active at the frontiers of the expanding field of sample preparation, as they gather to discuss groundbreaking research and the development direction of this field.
Looking forward to welcoming you in Guangzhou in November 2019!
`, `先进萃取技术国际研讨会（ExTech）是由Waterloo大学Janusz Pawliszyn教授于1999年发起的关于样品前处理、分析萃取和样品纯化技术的国际最高学术会议，每年在全球举办一届。该会议旨在于探讨样品前处理技术的新进展，并传播该领域的新思想。（会议旨在为从事样品前处理等研究领域的专家学者、技术研发人员提供一个共享科研成果和前言技术、了解学术发展趋势、拓宽研究思路、加强学术研究与探讨的平台。）
本次国际会议将是该系列会议的第21届，将于2019年11月9-13日于广州市中山大学化学学院芙兰讲学厅举行。本次会议主题含括分析化学领域的创新研究，前沿技术以及新产品。同时，本次会议还将于2019年11月12日举办SPME课程培训活动。
会议诚邀国内外高校、科研机构的专家和学者，以及企业界相关人士参加，并讨论前沿的研究成果和探讨该领域的发展方向。
期待2019年11月与您在广州相会。`],
      topicText: [`The ExTech symposium series is the flagship event for sample preparation, analytical extraction and sample clean-up techniques. The scientific committee of ExTech 2019 solicits original contributions in topic areas including:
`, `Contributions from commercial organizations are especially encouraged, including detailed descriptions of new instrumentation, specific applications, and assessment of future commercial trends and opportunities.
`],
      topicList: ['New technologies and techniques',
        'Sample preparation for clean oceans and seas (specific topic)',
        'Emerging contaminants and current issues',
        'Environmental sampling and analysis',
        'Remote sensing',
        'Pharmaceutical analysis',
        'Food control and analysis',
        'Industrial applications',
        'Natural products, flavor and fragrance analysis',
        'Forensic analysis',
        'Biological sample preparation',
        'Biomedical applications',
        'Diagnostic tools',
        'Bioanalytical applications',
        'Microfluidics/Lab-on-a-chip: new devices and techniques',
        'New strategies and innovation for Genomics, Proteomics and Metabolomics',
        'New developments in sensors and assays',
        'Automated analytical systems',
        'Theoretical and fundamental aspects of technologies',
        'New extraction phases',
        'Commercial developments and markets'],
      popoverShown: false,
      swiperOption: {
        pagination: {
          el: '.swiper-pagination',
          dynamicBullets: true,
          clickable: true,
          clickableClass: 'swiper-bullet'
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        scrollbar: {
          el: '.swiper-scrollbar'
        },
        autoplay: true,
        effect: 'fade',
        fadeEffect: {
          crossFade: true
        },
        loop: true,
        loopAdditionalSlides: 3,
        autoHeight: true
      },
      imgLibrary: [
        {
          src: require('../assets/sliders/index-slider01.jpg'),
          title: '测试1'
        },
        {
          src: require('../assets/sliders/index-slider02.jpg'),
          title: '测试2'
        },
        {
          src: require('../assets/sliders/index-slider03.jpg'),
          title: '测试3'
        }
      ]
    }
  },
  computed: {
    swiper () {
      return this.$refs.mySwiper.swiper
    }
  },
  mounted () {
    // current swiper instance
    // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
    // console.log('this is current swiper instance object', this.swiper)
    this.swiper.slideTo(3, 1000, false)
  }
}
</script>

<style scoped>
.extech-container {
  /*background: lightgray;*/
}
.extech-header {
  margin: 1rem;
}
.swiper-container {
  height: 499px;
  width: 100%;
}
.popover-text {
  padding: 1rem;
  font-size: 150%;
  line-height: 30px;
  font-weight: bold;
}
.swiper-slide {
  text-align: center;
  font-size: 38px;
  font-weight: 700;
  background-color: #eee;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}
.swiper-bullet {
  border-radius: 8px;
  opacity: .5;
  background: azure;
  padding: .1rem .5rem;
}
.extech-main {
  padding: 0 5%;
}
.box-card {
  margin: 15px auto;
  border-radius: 5px;
  width: 95%;
}
.extech-title {
  padding: 3rem;
  font-size: 200% !important;
  font-weight: bold;
  float: left;
}
.welcome-title {
  padding: 2rem;
  font-size: 150% !important;
  font-weight: bold;
  line-height: 40px;
  text-align: left;
}
.welcome-text {
  border-top: 1px solid lightgreen;
  padding: 2em 1em;
  font-size: larger !important;
  line-height: 50px;
  text-align: left;
}
.topic-text {
  padding-bottom: 1em;
  font-size: larger !important;
  line-height: 40px;
  text-align: left;
}
.welcome-text:first-letter {
  /*margin-left: 1em;*/
  font-size: 300%;
  font-family: Augusta,serif;
}
.icon {
  font-size: 30px !important;
}
</style>
