# extech2019

A full-stack registration system for ExTech 2019 featuring ```Vue.js``` 2, ```node.js```, ```Express```, ```MongoDB```, ```Element-ui``` and ```iconfont```

----

完成功能：
* 主页的轮播（```vue-awesome-swiper```+```swiper```）
* 注册功能（报名数据的增改与上传、文件的上传）（```Mongoose```+```formidable```）
* 邮件自动回复（```nodemailer```）
* 调用高德地图进行POI搜索与路线导航（原生网页api，非```vue-amap```）
* 报名数据的数据库只读接口与可视化（```Mongoose```）
* 打包上线，采用Nginx在80端口进行反代

----

待完成：
* 压力测试（```loadRunner```）
* 报名数据与文件的删查（```Mongoose```+```formidable```）
* 新闻**富文本**的前端填写、后台同步与（回送）前端展示（```Mongoose```）

----

未进行移动端适配

----

* only nginx.conf rather than base program of nginx is included in the folder;
* ```node build/build.js``` in the project folder
