// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import vueResource from 'vue-resource'
import '@/assets/icons/iconfont/iconfont.css'
import AMap from 'vue-amap'

Vue.config.productionTip = false
Vue.use(Element)
Vue.use(VueAwesomeSwiper)
Vue.use(vueResource)
Vue.use(AMap)

AMap.initAMapApiLoader({
  key: 'ba5ee3230315b701622968543685ba3a',
  plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor', 'Geocoder'],
  // 默认高德 sdk 版本为 1.4.4
  v: '1.4.4'
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
