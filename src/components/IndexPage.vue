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
      <el-row>
        <el-button class="extech-header" type="success" plain>
          <router-link to="/registration">
            报名入口 <i class="iconfont icon-fuzeren1"></i> Register Now
          </router-link>
        </el-button>
        <el-popover placement="top-start" width="500" v-model="popoverShown" trigger="click">
          <div class="popover-text">
            <p style="text-align: center; font-family: 'Times New Roman',serif; font-size: 150% !important; margin-bottom: 1rem">
              Professor. Gangfeng Ouyang
            </p>
            <p><i class="iconfont icon-guwenshifuwu-copy" style="font-weight: normal"></i> Chairman ExTech2019</p>
            <p>School of Chemistry and School of Chemical Engineering</p>
            <p><i class="iconfont icon-zhongshandaxue-" style="font-weight: normal"></i> Sun Yat-sen University, Guangzhou, China</p>
            <p><i class="iconfont icon-youxiang" style="font-weight: normal"></i> extech2019@mail.sysu.edu.cn</p>
            <p><i class="iconfont icon-youxiang" style="font-weight: normal"></i> cesoygf@mail.sysu.edu.cn</p>
          </div>
          <div style="text-align: right; margin: 0">
            <el-button size="mini" type="text" @click="popoverShown = false"><i class="iconfont icon-fanhui5" style="font-size: larger !important;"></i></el-button>
            <el-button type="primary" plain size="mini" @click="popoverShown = false">
              <router-link to="/registration">
                Register Now <i class="iconfont icon-tijiao"></i> 报名入口
              </router-link>
            </el-button>
          </div>
          <el-button slot="reference" class="extech-header" type="primary" plain>
            About ExTech <i class="iconfont icon-fuzeren"></i> 主负责人
          </el-button>
        </el-popover>
        <el-popover ref="popover" placement="top-start" width="500" trigger="hover">
          <div class="popover-text" ref="popover2">
            <p><i class="iconfont icon-huaxue1"></i> Guangdong Chemical Society</p>
            <p>National Natural Science Foundation of China</p>
            <p>Guangzhou Association for Science and Technology</p>
            <p>The Innovation and Talent Introduction Base of Photoelectronic and Functional Molecular Solids Materials, SYSU</p>
            <p><i class="iconfont icon-huaxue"></i> School of Chemistry and Chemical Science, SYSU</p>
          </div>
          <div style="text-align: right; margin: 0">
            <el-button type="primary" plain size="mini">
              <router-link to="/registration">
                Register Now <i class="iconfont icon-tijiao"></i> 报名入口
              </router-link>
            </el-button>
          </div>
        </el-popover>
        <el-button v-popover:popover class="extech-header" type="info" plain>
          About ExTech <i class="iconfont icon-cbdw"></i> 协办单位
        </el-button>
      </el-row>
      <!--welcome-->
      <el-row>
        <div class="extech-title"><i class="icon iconfont icon-huanyingye"></i> Welcome to ExTech 2019!</div>
      </el-row>
      <el-card class="box-card">
        <div class="welcome-title">{{ welcomeTitle }}</div>
        <div class="welcome-text" v-for="o in welcomeText" :key="o">
          {{ o }}
        </div>
      </el-card>
      <!--sponsors-->
      <div class="box-card">
        <el-row>
          <div class="extech-title"><i class="icon iconfont icon-zanzhushang"></i> Sponsors</div>
        </el-row>
        <el-row :gutter=50>
          <el-col v-for="(o, index) in 10" :key="o" style="margin: 40px; width: 300px">
            <el-card>
              <img src="../assets/logo.png">
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
      welcomeTitle: 'Welcome to the 17th edition of Index, the International Symposium on Advances in Extraction Technologies, to be held in Sun Yat-sen University, Guangzhou, China, from 7th - 11th November, 2015.',
      welcomeText: [`The ExTech symposium series is the flagship event for sample preparation, analytical extraction and sample clean-up techniques. The series, started in 1999 by University of Waterloo analytical chemistry professor Janusz Pawliszyn, has been held annually around the world and has become a unique and vital medium for the exchange of information and ideas in the expanding field of sample preparation.

In its 17th year, this cutting edge international research meeting will be hosted by the School of Chemistry and Chemical Engineering of Sun Yat-sen University from 7th to 11th November 2015 in Guangzhou, one of the most attractive and advanced cities in China. This symposium will take place in the Fulan Academic Center, School of Chemistry and Chemical Engineering. Contributed sessions will showcase innovative researches, cutting edge technologies, as well as new products and techniques in a broad range of analytical and applied areas. A short SPME course will be held on the 11th of November 2015.

Join many other scientists and practitioners, from academia, industry and commercial laboratories, active at the frontiers of the expanding field of sample preparation, as they gather to discuss groundbreaking research and confer with colleagues.

Looking forward to welcoming you in Guangzhou in November 2015!`, `Hey`],
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
  text-align: left;
}
.welcome-text {
  border-top: 1px solid lightgreen;
  padding: 2em 1em;
  font-size: larger !important;
  line-height: 30px;
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
