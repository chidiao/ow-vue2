<template>
  <div class="guanyu page">
    <Block :mask="0.1">
      <div class="block-title">关于中培集团</div>

      <div class="main">
        <div class="text">
          <div class="p">
            中培智慧集团有限公司（简称：中培集团），总部位于北京，是一家集黄金基金、房地产、新能源、文化传媒、康养产业为一体的综合性产业集团，旗下拥有哲别电子商务，百乐传媒乐堃顺璟科技等数十家子公司，员工300余人，业务遍布国内100余个城市及全球近20个国家。
          </div>
          <div class="p">
            未来，中培将坚持“积厚德，存正心；乐敬业，诚为本”的发展理念，紧跟国家战略规划和市场发展机遇，深入实施“平台、跨界、产融、生态”的经营思路，积极推进“一体两翼”的经营策略，积微速成，深彻变革，加快提升企业的经营、发展、资产及体质“四大品质”，提高企业品牌的知名度，让客户满意，让员工幸福。
          </div>
          <div class="p">
            企业文化： 理念：积厚德，存正心；乐敬业，诚为本
            使命：为员工搭建一个实现自我价值的平台 核心价值观：创新 缘渡 诚信
            卓越 愿景：成为最值得信赖的综合性产业集团
          </div>
        </div>

        <div class="flex-vd">
          <div class="vd">
            <video
              ref="video"
              class="video"
              src="http://gdr.qidka.com/storage/video/12101.mp4"
              __idm_id__="1046841345"
              autoplay
              loop
              muted
              controls
            ></video>
          </div>
        </div>

        <!-- <div class="pic">
          <img src="@/assets/images/gy1.jpg" alt />
          <img src="@/assets/images/gy2.jpg" alt />
        </div> -->
      </div>
    </Block>
  </div>
</template>

<style lang="scss" scoped>
.page {
  background-image: url("../../assets/images/gy.jpg");
}

.block-title {
  margin: 64px 0;

  @media screen and (max-width: 575px) {
    margin: 16px 0;
  }
}

.main {
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-flow: row wrap;
}

.text {
  width: 60%;
  margin: 20px 0;
  letter-spacing: 1px;
  font-weight: bold;
  line-height: 1.8em;
  font-size: var(--common-text-size);

  @media screen and (max-width: 575px) {
    width: 100%;
  }

  .p {
    margin: 8px 0;
    text-indent: 2em;
  }
}

.pic {
  width: 60%;
  padding: 0 0 0 5%;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  align-items: center;

  @media screen and (max-width: 575px) {
    margin: 20px 0;
    padding: 8px;
    width: 100%;
  }

  img {
    width: 48%;
    max-width: 340px;
    height: auto;
    object-fit: cover;
    margin: 16px 0;

    @media screen and (min-width: 576px) and (max-width: 767px) {
      width: 80%;
    }
  }
}

.flex-vd {
  width: 100%;
  display: flex;

  @media screen and (max-width: 575px) {
    justify-content: center;
  }
}

.vd {
  width: 420px;
  height: 240px;

  @media screen and (max-width: 575px) {
    width: 300px;
    height: 140px;
  }

  .video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>