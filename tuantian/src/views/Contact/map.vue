<template>
  <el-row class="map-ct">
    <el-col :md="12">
      <!-- <div class="contact">
        <div class="blank" style="height: 30px"></div>
        <p class="title">如果你对我们感兴趣，欢迎加入彖天集团</p>
        <div class="block">
          <p class="title">邮箱</p>
          <p>example@163.com</p>
        </div>
        <div class="block">
          <p class="title">在招岗位</p>
          <p>前端工程师 后端工程师</p>
        </div>
        <div class="block">
          <p class="title">联系我们</p>
          <p>地址：浙江省杭州市拱墅区银泰城5幢1205室-2</p>
          <p>联系电话：0571-56053546/56926727</p>
        </div>
        <div class="block">
          <p><el-button size="small" round style="color: #216FC9;margin-top:40px">更多了解></el-button></p>
        </div>
      </div> -->
      <div class="contact">
        <div class="blank" style="height: 30px"></div>
        <p class="title">如果你对我们感兴趣，欢迎加入我们</p>
        <div class="block">
          <p class="title">邮箱</p>
          <p>{{company.email}}</p>
        </div>
        <div class="block">
          <p class="title">在招岗位</p>
          <p>{{company.hire}}</p>
        </div>
        <div class="block">
          <p class="title">联系我们</p>
          <p>地址：{{company.address}}</p>
          <p>联系电话：{{company.tel}}</p>
        </div>
        <!-- <div class="block">
          <p><el-button size="small" round style="color: #216FC9;margin-top:40px">更多了解></el-button></p>
        </div> -->
      </div>
    </el-col>
    <el-col :md="12">
      <div id="map"></div>
    </el-col>
  </el-row>
</template>

<script>
import store from '@/store'
export default {
  data() {
    return {
      longitude: '',
      latitude: ''
    }
  },
  computed: {
    company: () => store.state.company
  },
  methods: {
    getData() {
      let { longitude, latitude } = this.company
      if (longitude && latitude) {
        this.longitude = longitude
        this.latitude = latitude
        this.initMap();
      } else {
        setTimeout(() => {
          this.getData();
        }, 3000);
      }
    },
    initMap() {
      var map = new AMap.Map('map', {
        zoom: 13,
        center: [this.longitude, this.latitude]
      });

      var marker = new AMap.Marker({
        position: new AMap.LngLat(this.longitude, this.latitude),
        title: '彖天集团'
      });

      map.add(marker);

      var content = `
      <div style="text-align:center">${this.company.title}</div>
      <div>${this.company.address}</div>
      `

      // 创建 infoWindow 实例	
      var infoWindow = new AMap.InfoWindow({
        content: content,
        offset: new AMap.Pixel(0, -20)
      });
        
      // 打开信息窗体
      infoWindow.open(map, [this.longitude, this.latitude]);
    }
  },
  mounted() {
    this.getData();
  }
}
</script>

<style lang="less" scoped>
  .map-ct {
    .contact {
      height: 600px;
      width: 100%;
      background: url('../../assets/images/contact.png');
      font-size: 16px;
      p {
        text-align: right;
        color: #B1BFD7;
        margin-top: 10px;
        margin-right: 30px;
      }
      p.title {
        color: #D9E0EB;
        margin-top: 30px;
        font-size: 1.2em;
      }
    }
  }
  #map {
    height: 600px;
  }
  @media screen and (max-width: 991px) {
    .map-ct .contact {
      height: 460px;
      font-size: 13px;
    }
    #map {
      height: 320px;
    }
  }
</style>