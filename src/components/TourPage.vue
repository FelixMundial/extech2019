<template>
  <div class="container">
    <div style="margin-top: 50px"></div>
    <el-card>
      <el-tabs v-model="activeName" tab-position="top">
        <el-tab-pane class="tab-pane" label="Navigation" name="first">
          <!--AMap-->
          <!--增加tag显示搜索历史记录功能-->
          <el-tag class="amap-tag" v-if="poiPos !== ''" closable :type="primary">{{ poiPos.name }}</el-tag>
          <el-input id="amap-search" v-model="amapInput" clear="resetPoi"
                    clearable placeholder="输入您要定位的地址">
            <i slot="prefix" class="el-input__icon el-icon-search"></i>
          </el-input>
          <div id="poi-panel" v-if="poiPos !== ''"></div>
          <div id="amap-container"></div>
          <!--BaiduNap-->
          <baidu-map class="bm-view" ak="YOUR_APP_KEY" :center="广州" :zoom="baiduZoom" @ready="baiduHandler">
          </baidu-map>
        </el-tab-pane>
        <el-tab-pane class="tab-pane" label="Accommodations" name="second">
          <div>PLACEHOLDER COMPONENT</div>
        </el-tab-pane>
        <el-tab-pane class="tab-pane" label="Guided Tours" name="third">
          <div>PLACEHOLDER COMPONENT</div>
        </el-tab-pane>
      </el-tabs>
    </el-card>
  </div>
</template>

<script>
import BaiduMap from 'vue-baidu-map'
export default {
  name: 'TourPage',
  components: {
    BaiduMap
  },
  data () {
    return {
      activeName: this.$route.query.activeName || 'first',
      amapCenter: [113.298218, 23.100821],
      amapInput: '',
      poiPos: '',
      baiduZoom: 3
    }
  },
  watch: {
    amapInput (newVal, oldVal) {
      if (newVal === '') {
        this.poiPos = ''
      }
    }
  },
  methods: {
    initAmap () {
      /* eslint-disable no-undef */
      let amap = new AMap.Map('amap-container', {
        center: this.amapCenter,
        resizeEnable: true,
        zoom: 11,
        lang: 'en'
      })
      AMap.plugin([
        'AMap.ToolBar',
        'AMap.Scale',
        'AMap.OverView',
        'AMap.MapType',
        'AMap.Geolocation',
        'AMap.Autocomplete'
      ], () => {
        amap.addControl(new AMap.ToolBar())
        amap.addControl(new AMap.Scale())
        amap.addControl(new AMap.OverView({isOpen: true}))
        amap.addControl(new AMap.MapType())
        // Geolocation settings
        let geolocation = new AMap.Geolocation({
          enableHighAccuracy: true, //  是否使用高精度定位，默认:true
          timeout: 10000, //  超过10秒后停止定位，默认：无穷大
          maximumAge: 0, // 定位结果缓存0毫秒，默认：0
          convert: true, // 自动偏移坐标，偏移后的坐标为高德坐标，默认：true
          showButton: true, //  显示定位按钮，默认：true
          buttonPosition: 'LB', // 定位按钮停靠位置，默认：'LB'，左下角
          buttonOffset: new AMap.Pixel(10, 60), //  定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
          showMarker: true, //  定位成功后在定位到的位置显示点标记，默认：true
          showCircle: true, //  定位成功后用圆圈表示定位精度范围，默认：true
          panToLocation: true, //  定位成功后将定位到的位置作为地图中心点，默认：true
          zoomToAccuracy: true //  定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
        })
        amap.addControl(geolocation)
        // geolocation.getCurrentPosition()
        AMap.event.addListener(geolocation, 'complete', (result) => {
          amap.setCenter(result.position)
        })
        AMap.event.addListener(geolocation, 'error', (result) => {
          console.log(result)
        })
        //  AutoComplete search
        // 实例化Autocomplete
        var autocomplete = new AMap.Autocomplete({
          // input 为绑定输入提示功能的input的DOM ID
          input: 'amap-search',
          city: '广州'
        })
        // 无需再手动执行search方法，AutoComplete会根据传入input对应的DOM动态触发search
        AMap.event.addListener(autocomplete, 'select', (e) => {
          this.poiPos = e.poi
          this.amapInput = this.poiPos.name
          amap.setCenter(this.poiPos.location)
          var markerOption = {
            map: amap,
            icon: ''
          }
          var marker = new AMap.Marker(markerOption)
          marker.setPosition(this.poiPos.location)
          // POI search
          AMap.service(['AMap.PlaceSearch'], () => {
            // 构造地点查询类
            var placeSearch = new AMap.PlaceSearch({
              pageSize: 5, // 单页显示结果条数
              pageIndex: 1, // 页码
              city: '020', // 兴趣点城市
              citylimit: true, // 是否强制限制在设置的城市内搜索
              map: amap, // 展现结果的地图实例
              panel: 'poi-panel', // 结果列表将在此容器中进行展示。
              autoFitView: false, // 是否自动调整地图视野使绘制的 Marker点都处于视口的可见范围
              lang: 'en',
              type: '交通设施服务|住宿服务|风景名胜'
            })
            // 关键字查询
            placeSearch.search(this.poiPos.name, (status, res) => {
              console.log(res)
            })
          })
        })
      })
    },
    baiduHandler ({BMap, map}) {
      console.log(BMap, map)
      this.center.lng = 116.404
      this.center.lat = 39.915
      this.zoom = 15
    }
  },
  mounted () {
    this.initAmap()
  }
}
</script>

<style scoped>
  .container {
    margin: 4rem 1rem;
    line-height: 30px;
    text-align: left;
  }
  .tab-pane {
    padding: 0 1rem;
  }
  #amap-container {
    margin-bottom: 20px;
    width: 100%;
    height: 600px;
  }
  .amap-tag {
    margin-bottom: 5px;
  }
  /*#poi-panel {*/
    /*border-radius: 10px;*/
    /*margin: 5px;*/
    /*position: absolute;*/
    /*background-color: white;*/
    /*max-height: 100%;*/
    /*overflow-y: auto;*/
    /*top: 12%;*/
    /*left: 8%;*/
    /*width: 20%;*/
  /*}*/
  .bm-view {
    margin-bottom: 20px;
    width: 100%;
    height: 400px;
  }
</style>
