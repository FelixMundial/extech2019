<template>
  <div class="container">
    <div class="header-patch"></div>
    <el-card>
      <el-tabs tab-position="top">
        <el-tab-pane class="tab-pane" label="Transportation Info">
          <div class="title"><i class="icon iconfont icon-guangzhoujiedai"></i> Welcome to Guangzhou!</div>
          <div class="text">
            <div class="tour-intro">
              Guangzhou is the provincial capital of Guangdong. As one of the first coastal open cities in China, Guangzhou is famous of its prosperous economic development and cuisine culture. The traffic network here is also convenient.
            </div>
            <!---->
            <div class="guide-section-title">
              <i class="icon iconfont icon-lvyou2"></i> Airline
            </div>
            <div class="guide-section-text">
              <div class="guide-section-paragraph">
                Guangzhou Baiyun International Airport, which inaugurated commercial flights on August 5th, 2004, is one of the three major civilian airports in China. Today, it hosts a total of more than 200 airlines, including over 100 international ones.
              </div>
              <div class="guide-section-paragraph">
                Located in the north of Guangzhou, neighboring Huadu District and Renhe Town, the airport is 28 kilometers distant from Haizhu Square, the geographic center of Guangzhou. Using specially constructed expressways, passengers from Guangzhou or neighboring cities can arrive at the airport conveniently.
              </div>
              <div class="guide-section-paragraph">
                There are more than 15 express bus lines between the city center and airport, including Airport Express Lines 1-11, Foshan Line, Shude Line, Nanhai Line, and Longshan Line, with fares ranging from 10 to 45 yuan. There are also multiple bus lines between the new airport and cities in the Pearl River Delta.Time table of expressway as follow: Time Table of Expressways.
              </div>
              <div class="guide-section-paragraph bold">
                The total distance from the airport to the hotel is about 45 km.
              </div>
            </div>
            <!---->
            <div class="guide-section-title">
              <i class="icon iconfont icon-guangzhouditie"></i> Metro
            </div>
            <div class="guide-section-text">
              <div class="guide-section-paragraph">
                There are more than 14 metro lines in Guangzhou and service charges are based on the distance between pick-up and destination points: charges are 2 RMB for the first 4 kilometers; 1 RMB/every 4 kilometers from 4 to 12 kilometers; 1 RMB/every 6 kilometers from 12 to 24 kilometers and 1 RMB/every 8 kilometers over the distance of 24 kilometers.
              </div>
              <div class="guide-section-paragraph">
                Metro Route: <el-tag type="success">http://www.gzmtr.com/</el-tag>
              </div>
              <el-row type="flex" justify="center">
                <img src="../assets/images/metro-lines.png" alt="">
              </el-row>
            </div>
            <!---->
            <!--<div class="guide-section-title">-->
              <!--<i class="icon iconfont icon-guangzhoujiedai"></i> Taxi-->
            <!--</div>-->
            <!--<div class="guide-section-text">-->
              <!--<div class="guide-section-paragraph">-->
                <!--Different colors of the taxis indicate various companies they are from. Passengers can stop a taxi by simply signalling with one's hand.-->
              <!--</div>-->
              <!--<div class="guide-section-paragraph">-->
                <!--The basic charge is 10 RMB for the first 2.5 kilometers and, at the destination they pay the charge that is displayed on the taximeter. The unit price beyond the initial 2.5 kilometers is 2.2 RMB or 2.6 RMB per kilometer depending on whether the route is inside or outside the defined metro service area.-->
              <!--</div>-->
            <!--</div>-->
          </div>
        </el-tab-pane>
        <el-tab-pane class="tab-pane" label="Environmental Investigations">
          <div class="title"><i class="icon iconfont icon-lvyou1"></i> Environmental Investigations</div>
          <div v-for="o in tourContents" :key="o">
            <div v-for="text in o.texts" :key="text" class="tour-section-text">{{ text }}</div>
            <div v-for="img in o.images" :key="img">
              <img :src="img.src" alt="" width="100%" oncontextmenu="return false;" ondragstart="return false;"/>
            </div>
          </div>
        </el-tab-pane>
      </el-tabs>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'TourPage',
  data () {
    return {
      // activeName: this.$route.query.activeName || 'first',
      tourContents: [{
        images: [
          {src: require('../assets/images/Qi-Xing-Yan1.jpg')},
          {src: require('../assets/images/Qi-Xing-Yan2.jpg')},
          {src: require('../assets/images/Qi-Xing-Yan3.jpg')},
          {src: require('../assets/images/Qi-Xing-Yan4.jpg')},
          {src: require('../assets/images/Qi-Xing-Yan5.jpg')},
          {src: require('../assets/images/Qi-Xing-Yan6.jpg')},
          {src: require('../assets/images/Qi-Xing-Yan7.jpg')}],
        texts: [`Qi-Xing-Yan (Seven Star Rocks) Scenic Spot with a total area over 8.23 km2, located at the north of Zhaoqing city in Guangdong Province, gets its name from the seven limestone peaks arranged like the Big Dipper stars in the sky. The spot enjoys a sightseeing history of more than 1000 years due to its picturesque scenery of strangely shape crags, unique caves and beautiful lakes. Within the spot, the cliff inscription since Tang dynasty (known as “Poems Corridor of a Thousand Years) provides the tourists a good chance for cultural exploration of the art of inscription calligraphy and Chinese poems. Based on the islands and pools in the spot, Xinghu Wetland Park was built in 2004 and has been developed an important ecological preservation area for wildlife.
        `]
      }
      ]
    }
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
  .bold {
    font-weight: bold;
  }
</style>
