<template>
  <div class="full-container footer">
    <div class="center-container">
      <Gap :md="100" :xs="24" />

      <a-row>
        <a-col :md="4" :xs="12">
          <div class="infos">
            <img class="logo" src="/images/logo.png" alt />
            <div class="info">
              <img src="/images/icon/phone2.png" alt />
              <div>
                <p class="xs">{{ $t("foot.tel") }}</p>
                <p style="color: #f1ba78">0532-81116767</p>
              </div>
            </div>
            <div class="info">
              <img src="/images/icon/mail.png" alt />
              <div>
                <p class="xs">{{ $t("foot.email") }}</p>
                <p>gbei@gbei.com</p>
              </div>
            </div>
          </div>
        </a-col>

        <a-col :md="15" :xs="0">
          <div class="links">
            <div class="group flex-col" v-for="i in nav" :key="i.link">
              <router-link class="link" :to="i.link">{{ i.title }}</router-link>
              <router-link
                class="anchor"
                :to="j.link"
                v-for="j in i.children"
                :key="j.link"
                >{{ j.title }}</router-link
              >
            </div>
          </div>
        </a-col>

        <a-col :md="2" :xs="5">
          <div class="qrcode">
            <img src="/images/qr1.png" alt />
            <p>{{ $t("foot.qr1") }}</p>
          </div>
        </a-col>

        <a-col :md="1" :xs="2"></a-col>

        <a-col :md="2" :xs="5">
          <div class="qrcode">
            <img src="/images/qr2.png" alt />
            <p>{{ $t("foot.qr2") }}</p>
          </div>
        </a-col>

        <a-col :md="0" :xs="24">
          <div class="links xs">
            <router-link
              class="link"
              :to="i.link"
              v-for="i in nav"
              :key="i.link"
              >{{ i.title }}</router-link
            >
          </div>
        </a-col>
      </a-row>

      <Gap :md="100" />
    </div>

    <div class="beian">
      <a href="http://beian.miit.gov.cn/" target="_blank"
        >粤ICP备 18015504号-1</a
      >
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nav: [
        {
          title: "首页",
          link: "/home",
          children: [
            {
              title: "我们是什么",
              link: "/home#p1",
            },
            {
              title: "我们还是什么",
              link: "/home#p2",
            },
            {
              title: "我们是谁",
              link: "/home#p3",
            },
          ],
        },
        {
          title: "京贝尔生态",
          link: "/ecology",
          children: [
            {
              title: "生态优势",
              link: "/ecology#youshi",
            },
          ],
        },
        {
          title: "关于京贝尔",
          link: "/about",
          children: [
            {
              title: "公司简介",
              link: "/about#p1",
            },
            {
              title: "战略合作",
              link: "/about#partner",
            },
          ],
        },
        {
          title: "人才力量",
          link: "/team",
          children: [
            {
              title: "领导团队",
              link: "/team#p1",
            },
            {
              title: "专利证书",
              link: "/team#p2",
            },
          ],
        },
        {
          title: "通证GTB",
          link: "/gtb",
          children: [
            {
              title: "GTB简介",
              link: "/gtb#jianjie",
            },
            {
              title: "相关答疑",
              link: "/gtb#dayi",
            },
          ],
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.footer {
  background: #222222;
  p {
    font-size: 16px;
    font-family: MicrosoftYaHei-Bold, MicrosoftYaHei;
    font-weight: bold;
    color: #ffffff;
    margin: 0;

    &.sm {
      font-size: 14px;
      color: #999999;
    }

    &.xs {
      font-size: 12px;
      color: #999999;
    }
  }
}
.infos {
  .logo {
    width: 120px;
    height: auto;
  }
  .info {
    display: flex;
    margin-top: 32px;
    img {
      width: 40px;
      height: 40px;
      margin-top: -2px;
    }
    p {
      width: 220px;
    }
  }
}
.links {
  width: 100%;
  padding: 0 40px;
  display: flex;
  justify-content: space-around;

  .link {
    font-size: 16px;
    font-family: MicrosoftYaHei-Bold, MicrosoftYaHei;
    font-weight: bold;
    color: #ffffff;
    line-height: 21px;
    margin-bottom: 16px;
    letter-spacing: 1px;
    white-space: nowrap;
  }

  .anchor {
    font-size: 14px;
    font-family: MicrosoftYaHei;
    color: #999999;
    line-height: 19px;
    margin-bottom: 16px;
    letter-spacing: 1px;
  }
}
.qrcode {
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    width: 100%;
    height: auto;
  }
  p {
    width: 156px;
    text-align: center;
    margin: 16px 0;
  }
}
.beian {
  background: #1b1b1b;
  text-align: center;
  padding: 16px 8px;
  a {
    color: rgba(153, 153, 153, 1);
    display: block;
    text-decoration: none;
  }
}

@media screen and (max-width: 575px) {
  .infos {
    .logo {
      width: 60px;
      height: auto;
      margin-top: 8px;
    }
    .info {
      display: flex;
      margin-top: 16px;
      img {
        width: 20px;
        height: 20px;
        margin-top: 0;
      }
      p {
        width: 150px;
        font-size: 10px;
      }
    }
  }
  .qrcode {
    img {
      width: 75px;
      height: auto;
    }
    p {
      width: 120px;
      font-size: 10px;
      text-align: center;
      margin: 12px 0;
    }
  }
  .links {
    width: 200%;
    transform: scale(0.5) translate(-50%, 0);
    padding: 0;
    margin-top: 24px;
  }
}
</style>