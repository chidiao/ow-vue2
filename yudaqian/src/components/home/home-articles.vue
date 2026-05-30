<template>
  <div class="articles home-block">
    <div class="flex justify-between wrap">
      <div class="news block">
        <div class="top">
          <div class="flex tab-title">
            <div class="tab" :class="{active:active==1}" @click="active=1">豫大千教育新闻</div>
            <div class="tab" :class="{active:active==2}" @click="active=2">豫大千学校新闻</div>
            <div class="tab" :class="{active:active==3}" @click="active=3">国务院信息</div>
          </div>
          <div class="more" @click="$goto('/news')">
            <div class="text">更多</div>
            <img src="@/assets/images/btmore.png" class="icon" />
          </div>
        </div>
        <div class="main" v-show="active==1">
          <div class="left">
            <div v-swiper:swiper1="news1Option" class="swiper">
              <div class="swiper-wrapper">
                <div
                  class="swiper-slide"
                  v-for="i in news1"
                  :key="i.id"
                  @click="$goto('/news/'+i.id)"
                >
                  <img :src="i.full_thumbnail" alt class="sw-img" />
                  <div class="right-item">
                    <div class="title">{{i.title}}</div>
                    <div class="content">{{i.content|htmlfilter}}</div>
                  </div>
                </div>
              </div>
              <!-- 如果需要分页器 -->
              <div class="swiper-pagination"></div>
            </div>
          </div>
          <div class="right">
            <div
              class="right-item"
              :class="{active:k==active1}"
              v-for="(i,k) in news1"
              :key="i.id"
              @click="$goto('/news/'+i.id)"
            >
              <div class="title">{{i.title}}</div>
              <div class="content">{{i.content|htmlfilter}}</div>
            </div>
          </div>
        </div>
        <div class="main" v-show="active==2">
          <div class="left">
            <div v-swiper:swiper2="news2Option" class="swiper">
              <div class="swiper-wrapper">
                <div
                  class="swiper-slide"
                  v-for="i in news2"
                  :key="i.id"
                  @click="$goto('/news/'+i.id)"
                >
                  <img :src="i.full_thumbnail" alt class="sw-img" />
                </div>
              </div>
              <!-- 如果需要分页器 -->
              <div class="swiper-pagination"></div>
            </div>
          </div>
          <div class="right">
            <div class="right-item" :class="{active:k==active2}" v-for="(i,k) in news2" :key="i.id">
              <div class="title">{{i.title}}</div>
              <div class="content">{{i.content|htmlfilter}}</div>
            </div>
          </div>
        </div>
        <div class="main" v-show="active==3">
          <div class="left">
            <div v-swiper:swiper3="news3Option" class="swiper">
              <div class="swiper-wrapper">
                <div
                  class="swiper-slide"
                  v-for="i in news3"
                  :key="i.id"
                  @click="$goto('/news/'+i.id)"
                >
                  <img :src="i.full_thumbnail" alt class="sw-img" />
                </div>
              </div>
              <!-- 如果需要分页器 -->
              <div class="swiper-pagination"></div>
            </div>
          </div>
          <div class="right">
            <div class="right-item" :class="{active:k==active3}" v-for="(i,k) in news3" :key="i.id">
              <div class="title">{{i.title}}</div>
              <div class="content">{{i.content|htmlfilter}}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="videos block">
        <div class="top">
          <div class="tab active">精彩视频</div>
          <!-- <div class="more">
            <div class="text">更多</div>
            <img src="@/assets/images/btmore.png" class="icon" />
          </div>-->
        </div>
        <div class="video-pic" @click.stop="play">
          <img src="@/assets/images/play.png" alt class="play" />
          <div class="video-btm">{{video.title}}</div>
          <img :src="video.thumbnail" alt class="video-img" />
        </div>
      </div>
    </div>

    <div class="mask" v-show="mask">
      <div class="video">
        <video id="myvideo" :src="video.url" controls v-clickout="close"></video>
      </div>
    </div>
  </div>
</template>

<script>
import clickoutside from "@/assets/clickoutside";
export default {
  directives: {
    clickout: clickoutside
  },
  filters: {
    htmlfilter: function(val) {
      return val.replace(/<[^>]*>/g, "");
    }
  },
  data() {
    return {
      mask: false,
      video: {},
      active: 1,
      news1: [],
      active1: 0,
      news2: [],
      active2: 0,
      news3: [],
      active3: 0,
      news1Option: {
        autoplay: true,
        pagination: {
          el: ".swiper-pagination"
        },
        on: {
          slideChange: () => {
            this.active1 = this.swiper1.activeIndex;
          }
        }
      },
      news2Option: {
        autoplay: true,
        pagination: {
          el: ".swiper-pagination"
        },
        on: {
          slideChange: () => {
            this.active2 = this.swiper2.activeIndex;
          }
        }
      },
      news3Option: {
        autoplay: true,
        pagination: {
          el: ".swiper-pagination"
        },
        on: {
          slideChange: () => {
            this.active3 = this.swiper3.activeIndex;
          }
        }
      }
    };
  },
  watch: {
    mask(val) {
      if (!val) {
        this.pause();
      }
    }
  },
  mounted() {
    this.getVideo();
    this.getNews();
  },
  methods: {
    close() {
      this.mask = false;
    },
    play() {
      this.mask = true;
      myvideo.play();
    },
    pause() {
      myvideo.pause();
    },
    getVideo() {
      this.$http.get("/video").then(res => {
        this.video = res.data.result.video;
      });
    },
    getNews() {
      this.$http.get("/article/list?cate=1&limit=3").then(res => {
        this.news1 = res.data.result.article;
      });
      this.$http.get("/article/list?cate=2&limit=3").then(res => {
        this.news2 = res.data.result.article;
      });
      this.$http.get("/article/list?cate=3&limit=3").then(res => {
        this.news3 = res.data.result.article;
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.mask {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99999;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  #myvideo {
    max-width: 1200px;
    width: 100%;
    height: 100%;
  }
}
.articles {
  padding-top: 48px;
  .wrap {
    flex-wrap: wrap;
  }
  .top {
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .tab-title {
    height: 100%;
    overflow-y: auto;
    cursor: pointer;
  }
  .block {
    padding: 0 16px 16px 16px;
  }
  .tab {
    font-size: 16px;
    margin-right: 56px;
    white-space: nowrap;
    font-family: MicrosoftYaHei-Bold, MicrosoftYaHei;
    font-weight: bold;
    color: #999999;
    letter-spacing: 1px;
    display: flex;
    align-items: center;
    &.active {
      color: rgba(51, 51, 51, 1);
    }
  }
  .more {
    display: flex;
    align-items: center;
    .text {
      font-size: 16px;
      font-family: MicrosoftYaHei;
      color: rgba(153, 153, 153, 1);
      line-height: 21px;
      letter-spacing: 1px;
    }
    .icon {
      width: 16px;
      height: 16px;
    }
  }
}
.news {
  margin-top: 16px;
  width: 800px;
  height: 330px;
  background: rgba(255, 255, 255, 1);
  cursor: pointer;
  .main {
    display: flex;
    justify-content: space-between;
  }
  .left {
    width: 300px;
    height: 260px;
    .swiper {
      --swiper-theme-color: #30caca;
      width: 100%;
      height: 260px;
      .swiper-pagination-bullet {
        background: pink;
      }
    }
  }
  .right {
    width: 450px;
    height: 260px;
  }
}
.videos {
  margin-top: 16px;
  width: 360px;
  height: 330px;
  background: rgba(255, 255, 255, 1);
  .video-pic {
    position: relative;
    cursor: pointer;
    &:hover {
      .play {
        filter: brightness(0.9);
      }
    }
  }
  .play {
    position: absolute;
    width: 40px;
    height: 40px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 9;
    filter: brightness(0.9);
  }
  .video-btm {
    position: absolute;
    z-index: 99;
    text-align: center;
    width: 100%;
    bottom: 24px;
    height: 21px;
    font-size: 16px;
    font-family: MicrosoftYaHei-Bold, MicrosoftYaHei;
    font-weight: bold;
    color: rgba(255, 255, 255, 1);
    line-height: 21px;
    letter-spacing: 1px;
  }
  .video-img {
    width: 330px;
    height: 260px;
    object-fit: cover;
    display: block;
    margin: 0 auto;
    filter: brightness(0.6);
  }
}
.sw-img {
  width: 100%;
  height: 260px;
  object-fit: cover;
}
.right-item {
  height: 33.33%;
  border-bottom: 1px dashed #979797;
  position: relative;
  &.active::before {
    content: "";
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #13c2c2;
    position: absolute;
    top: 12px;
    left: -6px;
  }
  .title {
    font-size: 14px;
    padding: 8px;
    font-family: MicrosoftYaHei-Bold, MicrosoftYaHei;
    font-weight: bold;
    color: rgba(51, 51, 51, 1);
    line-height: 18px;
    letter-spacing: 1px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .content {
    padding: 0 8px;
    font-size: 14px;
    font-family: MicrosoftYaHei;
    color: rgba(153, 153, 153, 1);
    line-height: 20px;
    letter-spacing: 1px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }
}
@media screen and (max-width: 575px) {
  .articles {
    padding-top: 8px;
    .tab-title {
      width: 75vw;
    }
    .tab {
      font-size: 15px;
      margin-right: 16px;
    }
    .more {
      .icon {
        width: 12px;
        height: 12px;
      }
      .text {
        font-size: 12px;
      }
    }
  }
  .news {
    width: 100%;
    height: 430px;
    .left {
      width: 100%;
      .swiper {
        height: 380px;
      }
    }
    .right {
      display: none;
    }
  }
  .videos {
    width: 100%;
    .video-img {
      width: 100%;
    }
  }
}
</style>