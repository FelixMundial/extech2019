<template>
  <div class="extech-container">
    <el-row>
      <el-button class="extech-header" type="success" plain>
        <router-link to="/registration">
          报名入口 <i class="el-icon-success"></i> Register Now
        </router-link>
      </el-button>
      <el-popover placement="bottom" width="500" v-model="popoverShown">
        <p class="extech-text-more">{{ exTechTextMore }}</p>
        <div style="text-align: right; margin: 0">
          <el-button size="mini" type="text" @click="popoverShown = false">返回 | return</el-button>
          <el-button type="primary" plain size="mini" @click="popoverShown = false">
            <router-link to="/registration">
              报名入口 <i class="el-icon-success"></i> Register Now
            </router-link>
          </el-button>
        </div>
        <el-button slot="reference" class="extech-header" type="info" plain>
          关于ExTech <i class="el-icon-question"></i> About ExTech
        </el-button>
      </el-popover>
    </el-row>
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
    <el-card class="box-card">
      <div style="margin: 10px" v-for="o in 4" :key="o" class="text item">
        {{'列表内容 ' + o }}
      </div>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

    </el-card>
  </div>
</template>

<script>

export default {
  name: 'ExTech',
  data () {
    return {
      exTechTextMore: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
`,
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
          src: require('../assets/city-lights.jpg'),
          title: '测试1'
        },
        {
          src: require('../assets/nature.jpg'),
          title: '测试2'
        },
        {
          src: require('../assets/city-lights.jpg'),
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
  height: 600px;
  width: 100%;
}
.extech-text-more {
  padding: 1rem;
  font-size: 3rem;
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
.box-card {
  margin: 15px auto;
  border-radius: 5px;
  width: 95%;
}
</style>
