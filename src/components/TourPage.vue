<template>
  <div class="container">
    <div style="margin-top: 50px"></div>
    <el-card>
      <el-tabs tab-position="top">
        <el-tab-pane class="tab-pane" label="Guided Tours">
          <div class="title"><i class="icon iconfont icon-guangzhoujiedai"></i> Welcome to Guangzhou!</div>
          <div class="text">
            <div class="tour-intro">
              Guangzhou is the capital city of Guangdong Province. As the third largest city of China, it is enjoying a fast and prosperous economic development. The traffic network is very convenient.
            </div>
            <!---->
            <div class="guide-section-title">
              Airline
            </div>
            <div class="guide-section-text">
              <div class="guide-section-paragraph">
                Guangzhou Baiyun International Airport, which inaugurated commercial flights on August 5th, 2004, is one of the three major civilian airports in China. Today, it hosts a total of more than 200 airlines, including over 100 international ones.
              </div>
              <div class="guide-section-paragraph">
                Located in the north of Guangzhou, neighboring Huadu District and Renhe Town, the airport is 28 kilometers distant from Haizhu Square, the geographic center of Guangzhou. Using specially constructed expressways, passengers from Guangzhou or neighboring cities can arrive at the airport conveniently.
              </div>
              <div class="guide-section-paragraph">
                There are 15 express bus lines between the city center and airport, including Airport Express Lines 1-11, Foshan Line, Shude Line, Nanhai Line, and Longshan Line, with fares ranging from 10 to 45 yuan. There are also multiple bus lines between the new airport and cities in the Pearl River Delta.Time table of expressway as follow: Time Table of Expressways.
              </div>
            </div>
            <!---->
            <div class="guide-section-title">
              Metro
            </div>
            <div class="guide-section-text">
              <div class="guide-section-paragraph">
                There are fourteen metro lines in Guangzhou and service charges are based on the distance between pick-up and destination points: charges are RMB2 for the first four kilometers; RMB1/every four kilometers from four to twelve kilometers; RMB1/every six kilometers from twelve to twenty-four kilometers and RMB1/every eight kilometers over the distance of twenty-four kilometers.
              </div>
              <div class="guide-section-paragraph">
                Metro Route: <el-tag type="success">http://www.gzmtr.com/</el-tag>
              </div>
            </div>
            <!---->
            <div class="guide-section-title">
              Taxi
            </div>
            <div class="guide-section-text">
              <div class="guide-section-paragraph">
                There are about 16,000 taxis in Guangzhou. The various colors of the cars signify different taxi companies. Passengers can stop a taxi by just waving his or her hand.
              </div>
              <div class="guide-section-paragraph">
                The basic charge is RMB 10 for the first 2.5 kilometers and, at the destination they pay the charge that is displayed on the taximeter. The price per kilometer beyond the initial 2.5 kilometers is RMB2.2 or RMB2.6 per kilometer depending on whether the route is inside or outside the defined metro service area.
              </div>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane class="tab-pane" label="Guided Tours">
          <div class="title"><i class="icon iconfont icon-guangzhoujiedai"></i> Have fun in Guangzhou!</div>
          <div v-for="o in tourContents" :key="o">
            <div v-for="img in o.images" :key="img">
              <img :src="img.src" alt="" width="100%" oncontextmenu="return false;" ondragstart="return false;"/>
            </div>
            <div v-for="text in o.texts" :key="text" class="tour-section-text">{{ text }}</div>
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
        images: [{src: require('../assets/images/tour_A.jpg')}],
        texts: [`Guangzhou, capital of south China, is not only noted for its prosperous economy but also for its incomparable geographical position, for there are many places of interest in city area such as Beijing Road Pedestrian Shopping Street, Changlong Amusement park, Dr. Sun Yat-sen's memorial Hall and a lot of tourist interests of world prestige in surrounding cities such as Guilin, the ancient town of Lijiang, Zhangjiajie National Forest Park and so forth, all of which are quite near and easy to reach from Guangzhou.
      `]
      },
      {
        images: [{src: require('../assets/images/tour_B.jpg')}],
        texts: [`Guilin is one of China's most picturesque cities, situated in the northeast of the Guangxi Zhuang Autonomous Region of China on the west bank of the Lijiang River. Its name means "forest of Sweet Osmanthus", owing to the large number of fragrant Sweet Osmanthus trees located in the city. It boasts of its characteristic tropical and subtropical karst landform such as Elephant Trunk Hill, Diecai Park, Reed Flute Cave and the mirror-like water of the Lijiang River. Thus, there is a saying that goes "East or west, Guilin landscape is the best".
        `]
      },
      {
        images: [{src: require('../assets/images/tour_C.jpg')}],
        texts: [`Located in the northwest of Yunnan Province of China, the ancient town of Lijiang was built about 800 years ago during the Southern Song Dynasty. Owing to it's unique and time-honored ethnic culture and urban layout, this old town (including Baisha and Shuhe housing clusters) was enlisted to be one of World Cultural Heritage in 1997. In this ancient town, the old street which is built along the river, paved by Breccia and the commercial center of the town and 364 old bridges which was built over the Yu water system every one kilometer in Qing dynasty are awfully warm welcomed resorts of the town.
        `]
      },
      {
        images: [{src: require('../assets/images/tour_D.jpg')}],
        texts: [`Located in the northwest of Hunan province of China, Zhangjiajie National Forest Park was established by the State Council in 1982 as the first National Forest Park of China. It was listed into the World Heritage Directory by UNESCO in 1992, and in 2004 was listed as a UNESCO Global Geopark. It is among the first scenery spots that were recognized as the China's Class AAAAA Scenery Spots in 2007. It was once chosen as one of the shooting sites of Avatar. Tianmen Mountain is the highest karst cave through mountain and it is noted as wonder of mother nature.
        `]
      },
      {
        images: [{src: require('../assets/images/tour_E.jpg')}],
        texts: [`Danxiashan National Park with the area of 290km2 is located in the northeastern suburban area of the city of Shaoguan, Guangdong province, China. It is based on the landform of Mt. Danxia. Danxia which can be literally understood as “red sunglow” according to its Chinese meaning has features with “luster as vermeil and patina as sunglow”. In 1930’s the landform characteristic of non-marine red clastic rock, red walls and red cliffs was named by geologists Danxia Landform. Therefore, the park is quite famous for its rare red stone and steep red cliff, limpid water, verdant trees and peaceful country scenery.
        `]
      },
      {
        images: [{src: require('../assets/images/tour_F.jpg')}, {src: require('../assets/images/tour_G.jpg')}],
        texts: [`Hong Kong and Macao, located in the south of China are two Special Administrative Regions of China. As prosperous Cosmopolis, they enjoy world reputation. Being one of the financial center of Asia Hongkong is renowned as the Pearl of the Orient. Meanwhile it is a desired destination of entertainment and shopping. Such palces as Hong Kong Ocean Park, Dysineyland, Taikoo Shing and New Town Plaza are of great magic for tourists from home and abroad. Macao boasts of the city without darkness and is one the most popular destination of entertainment. Lisboa Casino is one of the three renowned casinos in the world and Ruins of St.Paul is the symbol of Maccao.
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
</style>
