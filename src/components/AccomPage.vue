<template>
  <div class="container">
    <div class="header-patch"></div>
    <el-card>
      <el-tabs tab-position="top">
        <el-tab-pane class="tab-pane" label="Recommended Accommodations">
          <div class="title"><i class="icon iconfont icon-zhusu"></i> Recommended Accommodations</div>
          <el-row style="margin: 20px 4em; line-height: 50px !important; font-weight: bold">
            <div><i class="icon iconfont icon-dizhi"></i> Fengsheng Hall, Sun Yat-sen University, Guangzhou, Guangdong, P.R. China</div>
            <div><i class="icon iconfont icon-zhuye"></i> Postal Code: 510275</div>
          </el-row>
          <el-row style="margin-bottom: 10px" type="flex" justify="center">
            <img src="../assets/images/accom_overview.png" alt="" width="893"/>
          </el-row>
          <el-collapse v-for="(o, index) in accomContents" :key="index" v-model="activeNames">
            <el-collapse-item :title="o.title" :name="index">
              <div v-for="img in o.images" :key="img">
                <img :src="img.src" alt="" width="100%" oncontextmenu="return false;" ondragstart="return false;"/>
              </div>
              <div v-html="text" v-for="text in o.texts" :key="text" class="tour-section-text">{{ text }}</div>
              <el-row type="flex" justify="center">
                <img :src="o.info" alt=""/>
              </el-row>
            </el-collapse-item>
          </el-collapse>
          <!--<div id="poi2-panel"></div>-->
          <!--<div id="amap2-container"></div>-->
        </el-tab-pane>
        <el-tab-pane class="tab-pane" label="Navigations">
          <!--AMap-->
          <el-tag class="amap-tag" v-if="amapHistory !== []" v-for="o in amapHistory" :key="o"
                  closable @close="handleAmapTagClose(tag)" @click.native="amapInput1 = o">{{ o }}</el-tag>
          <el-row :gutter=5>
            <el-col :span=12>
              <el-input id="amap-search1" v-model="amapInput1" clearable placeholder="请输入起始位置"
                        @focus="panelEnabled = true; transferEnabled = false">
                <i slot="prefix" class="el-input__icon el-icon-search"></i>
              </el-input>
            </el-col>
            <el-col :span=12>
              <el-tag><i class="iconfont icon-zhuye"></i> 中山大学广州校区南校园丰盛堂</el-tag>
              <!--<el-input id="amap-search2" v-model="amapInput2" @focus="panelEnabled = true"-->
                        <!--clearable placeholder="">-->
                <!--<i slot="prefix" class="el-input__icon iconfont icon-zhuye"></i>-->
              <!--</el-input>-->
            </el-col>
          </el-row>
          <div id="poi1-panel" v-if="panelEnabled && poiPos !== ''" @click="panelEnabled = false"></div>
          <div id="transfer-panel" v-if="transferEnabled && poiPos !== ''"></div>
          <div id="amap1-container"></div>
        </el-tab-pane>
      </el-tabs>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'AccomPage',
  data () {
    return {
      // activeName: this.$route.query.activeName || 'first',
      activeNames: [0, 1, 2],
      popoverShown: false,
      amapCenter: [113.298218, 23.100821],
      amapHistory: [],
      amapInput1: '',
      // amapInput2: '',
      panelEnabled: true,
      transferEnabled: true,
      poiPos: '',
      // poi2Pos: '',
      accomContents: [
        {images: [{src: require('../assets/images/accom_A.jpg')}],
          info: '',
          title: '(A) Hotel & Conference Center of Sun Yat-sen University (recommended) | ' +
          '中山大学学人馆',
          texts: [`<div style="font-weight: bold; font-size: 150% !important; margin-bottom: 10px">
(A) Hotel & Conference Center of Sun Yat-sen University (recommended) | 中山大学学人馆</div>
<p>Inside school</p>
<p><i class="icon iconfont icon-youxiang"></i> Hotel email: 18127996301@163.com</p>
<div style="padding-left: 20px">
<p><i class="icon iconfont icon-fukuan1"></i> Hotel account: 693864212768</p>
<p>Bank: Zhongshan University Subbranch Bank of China, Guangzhou</p>
<p>Bank address: Floor One, Science Technology Building of Zhongshan University, No.135, Xingangxi Rd, Guangzhou, China
</p>
<p>Swift Code: BKCHCNBJ400</p>
</div>
<p>Hotel breakfast (per person per day; extra charge) 50)</p>
`]},
        {images: [{src: require('../assets/images/accom_B1.png')}],
          info: require('../assets/images/accomB_info.png'),
          title: '(B) Wing Kwong Hall | 荣光堂',
          texts: [`<div style="font-weight: bold; font-size: 150% !important; margin-bottom: 10px">
(B) Wing Kwong Hall | 荣光堂</div>
<p><i class="icon iconfont icon-dizhi"></i> Inside school</p>
<p>
1. Breakfast already covered | 含早餐
</p>
<p>
2. VISA and MasterCard NOT supported in payment, Receipt included | 可刷银联、不支持VISA、MasterCard，可开发票
</p>
<p style="color: red">
3. Rooms not guaranteed to be available until early October, 2019
 | 部分房源可能无法保证，房源最终确定时间为2019年10月上旬
</p>
<p><i class="icon iconfont icon-lianxiwomen"></i> +86­020-84112138</p>
`]},
        {images: [{src: require('../assets/images/accom_C1.png')}],
          info: require('../assets/images/accomC_info.png'),
          title: '(C) Zijing Yuan Hotel | 紫荆园',
          texts: [`<div style="font-weight: bold; font-size: 150% !important; margin-bottom: 10px">
(C) Zijing Yuan Hotel | 紫荆园</div>
<p><i class="icon iconfont icon-dizhi"></i> Inside school</p>
<p>
1. Breakfast not covered; Zijing Yuan Restaurant located on the first/ground floor | 不含早餐，楼下有紫荆园餐厅
</p>
<p>
2. VISA and MasterCard supported in payment, Receipt included | 可刷银联、VISA、MasterCard，可开发票
</p>
<p style="color: red">
3. Information concerning the desired room type and amount should be included in the registration page in the form of Additional Notes; Rooms are preserved so long as participation fees are paid, rooms not guaranteed to be available thereafter otherwise
 | 报名时备注预订房型和数量，缴纳注册费后可保留房间，否则不保证房源。
</p>
<p><i class="icon iconfont icon-lianxiwomen"></i> +86­020­84111888</p>
`]}
      ]
    }
  },
  watch: {
    amapInput1 (newVal, oldVal) {
      if (newVal === '') {
        this.poiPos = ''
      }
    }
  },
  methods: {
    initAmap1 () {
      /* eslint-disable no-undef */
      let amap = new AMap.Map('amap1-container', {
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
        'AMap.Autocomplete',
        'AMap.Transfer'
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
          input: 'amap-search1',
          city: '020'
        })
        // 无需再手动执行search方法，AutoComplete会根据传入input对应的DOM动态触发search
        AMap.event.addListener(autocomplete, 'select', (e) => {
          this.poiPos = e.poi
          this.amapInput1 = this.poiPos.name
          if (this.amapHistory) {
            if (this.amapHistory.length >= 5) {
              this.amapHistory.slice(0, 1)
            }
            for (let i = 0; i < this.amapHistory.length; i++) {
              if (this.amapHistory[i] === this.amapInput1) {
                this.amapHistory.splice(i, 1)
                break
              }
            }
            this.amapHistory.push(this.amapInput1)
          }
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
              panel: 'poi1-panel', // 结果列表将在此容器中进行展示。
              autoFitView: false // 是否自动调整地图视野使绘制的 Marker点都处于视口的可见范围
              // lang: 'en'
            })
            // 关键字查询
            placeSearch.search(this.poiPos.name, (status, res) => {
              console.log(res)
            })
          })
          this.transferEnabled = true
          AMap.service(['AMap.Transfer'], () => {
            // 实例化Transfer
            console.log('AMap.Transfer')
            var transfer = new AMap.Transfer({
              city: '020', // 必须值，搭乘公交所在城市
              map: amap, // 可选值，搜索结果的标注、线路等均会自动添加到此地图上
              panel: 'transfer-panel', // 可选值，显示搜索列表的容器,
              // extensions: "all", // 可选值，详细信息
              policy: AMap.TransferPolicy.MOST_COMFORT // 驾驶策略：最省时模式
            })
            transfer.search([{keyword: this.poiPos.name}, {keyword: '中山大学广州南校区丰盛堂'}], (status, result) => {
              console.log(status, result)
            })
          })
        })
      })
    },
    handleAmapTagClose (tag) {
      this.amapHistory.splice(this.amapHistory.indexOf(tag), 1)
    }
    // initAmap2 () {
    //   var amap2 = new AMap.Map('amap2-container', {
    //     resizeEnable: true,
    //     center: this.amapCenter,
    //     zoom: 13
    //   })
    //   AMap.service('AMap.PlaceSearch', () => {
    //     var placeSearch = new AMap.PlaceSearch({
    //       pageSize: 8,
    //       pageIndex: 1,
    //       children: 1,
    //       type: '住宿服务',
    //       city: '020',
    //       citylimit: true,
    //       map: amap2,
    //       panel: 'poi2-panel',
    //       autoFitView: true
    //     })
    //     placeSearch.searchNearBy('', this.amapCenter, 3000, (status, result) => {
    //       if (status === 'complete' && result.info === 'OK') {
    //         console.log(result)
    //       }
    //     })
    //   })
    // }
  },
  mounted () {
    this.initAmap1()
    // this.initAmap2()
  }
}
</script>

<style scoped>
  .container {
    margin: 3rem 1rem;
    line-height: 30px;
    text-align: left;
  }
  .tab-pane {
    padding: 0 1rem;
  }
  #amap1-container, #amap2-container {
    margin-bottom: 20px;
    width: 100%;
    height: 600px;
  }
  .amap-tag {
    margin-bottom: 5px;
    margin-right: 3px;
  }
  #poi1-panel {
    border-radius: 10px;
    position: absolute;
    max-height: 200px;
    width: 88%;
    left: 8%;
    overflow-y: scroll;
    z-index: 99;
  }
  #transfer-panel {
    border-radius: 10px;
    margin: 5px;
    position: absolute;
    background-color: white;
    max-height: 500px;
    overflow-y: auto;
    top: 100px;
    left: 8%;
    z-index: 98;
    width: 25%;
  }
  #poi2-panel {
    border-radius: 10px;
    margin: 5px;
    position: absolute;
    max-height: 550px;
    overflow-y: auto;
    z-index: 98;
    width: 25%;
  }
  .title {
    padding: 2rem;
    font-size: 150% !important;
    font-weight: bold;
    line-height: 40px;
    text-align: center;
  }
  .text {
    padding: 0 2rem 3rem 3rem;
    font-size: larger !important;
    line-height: 40px;
    text-align: left;
  }
  .text:first-letter {
    /*margin-left: 1em;*/
    font-size: 300%;
    font-family: Augusta,serif;
  }
  .icon {
    font-size: 30px !important;
  }
  .guide-section-title {
    margin-top: 20px;
    font-weight: bold;
    font-size: 120% !important;
    margin-left: 2em;
  }
  .guide-section-text {
    padding: 20px;
    font-size: larger !important;
    line-height: 40px;
    text-align: left;
  }
  .guide-section-paragraph {
    margin-bottom: 10px;
  }
  .tour-section-text {
    padding: 40px;
    font-size: larger !important;
    line-height: 40px;
    text-align: left;
  }
</style>
