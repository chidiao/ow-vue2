<template>
  <div class="group">
    <div class="top">
      <img src="../../assets/images/bg1.png" class="top-pic">
    </div>

    <div class="jianjie">
      <el-row type="flex" align="middle">
        <el-col :xs="24" :sm="8">
          <div class="logo">
            <img src="../../assets/images/g-logo.png">
          </div>
        </el-col>
        <el-col class="hidden-xs-only" :sm="2" style="height:1px"></el-col>
        <el-col :xs="24" :sm="12">
          <bigtitle info="BUSINESS" title="简介"></bigtitle>
          <div class="content">
            <p>杭州彖天科技集团，简称彖天集团，于2008年12月18日在杭州市拱墅区市场监督管理局注册成立，注册资本为9000万元人民币。历经12年发展，公司目前已形成快消茶叶、咖啡品牌连锁运作、千岛湖四季滑雪场、富阳西岩生态旅游观光农业项目、互联网技术、金融资本运作等多个产业的综合性集团公司，旗下拥有十多家分公司，集团现有员工600余人，高管团队均来自于各行业领域的顶尖人才，公司业务近几年进入高速发展期，致力成为一流的综合企业集团公司。</p>
            <p>彖，甲骨文，象形文字，凤凰，一公一母，每五百年，飞向火山，凤凰涅槃，浴火重生。</p>
            <p>寓意:来到彖天集团，无论以往处于何种境地，都将得到重生，获得新的希望和光明。</p>
            <p>Logo，彖加一个绞丝旁，就是缘份的缘，所以进了这个门，我们就有了一半的缘，剩下的一半缘，靠我们共同修缮。</p>
          </div>
        </el-col>
      </el-row>
    </div>

    <div class="mid">
      <img src="../../assets/images/bg2.png" class="mid-pic">
      <div class="mask">
        <p>让我们朝着梦想，勇往直前</p>
        <p>让我们坚定信念，勇往直前</p>
      </div>
    </div>

    <div class="jianjie speak">
      <el-row type="flex" align="middle">
        <el-col :xs="24" :sm="8">
          <div class="logo">
            <img src="../../assets/images/chairman.png">
          </div>
        </el-col>
        <el-col class="hidden-xs-only" :sm="2" style="height:1px"></el-col>
        <el-col :xs="24" :sm="12">
          <bigtitle info="BUSINESS" title="董事长致词"></bigtitle>
          <div class="content">
            <p>当我们在经历和书写这个行业的历史时，总有一个挥之不去的问题纠缠于脑中:浮躁的功利观和超越现实的理想主义，是否能并存？</p>
            <p>不幸的是，不仅是在这个行业，在中国这个大环境中，理想这个词甚至都在逐渐沦为贬义，成为不成熟不现实的代名词，更多时候理想成为一句口号，或者仅存在于童年时期的幻想。因此当我们看到乔布斯，扎克伯格这样为理想而生的天才或者说是狂人时，羡慕和敬仰之外，却只能将自己的理想深埋心底。</p>
            <p>幸运的是，中国从来不缺乏理想主义之人，他们愿意通过常人难以想象的努力，来改变自己，家族的命运，去实现别人视为天方夜谭般的成功，尽管他们历经波折，却从未放弃。</p>
            <p>在这些理想主义情怀的人群之中，彖天这个群体，正在显露它的光芒，因为他们不仅不畏惧理想，怀高谈理想，并真正以理想的方式将彖天推向新高度。</p>
            <p>朋友们，在杭州大干，放心干！我来支持大家！</p>
            <p>让我们铭记此刻的诺言，勇往直前！</p>
            <p>让我们朝着梦想，勇往直前！</p>
            <p>让我们坚定信念，勇往直前！</p>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import bigtitle from '@/components/bigtitle'
export default {
  components: {
    bigtitle
  }
}
</script>

<style lang="less" scoped>
  @maxwd: 1600px;

  .el-row {
    flex-flow: row wrap;
  }

  .top {
    width: 100%;
    height: 750px;
    position: relative;
    .top-pic {
      width: 100%;
      height: 100%;
      object-fit: cover;
      position: absolute;
      z-index: -1;
    }
  }
  .mid {
    width: 100%;
    height: 400px;
    position: relative;
    .mid-pic {
      width: 100%;
      height: 100%;
      object-fit: cover;
      position: absolute;
      z-index: -1;
    }
    .mask {
      width: 100%;
      height: 100%;
      background: rgba(39, 68, 134, 0.6);
      display: flex;
      flex-flow: column;
      justify-content: center;
      align-items: center;
    }
    p {
      color: #fff;
      font-size: 24px;
      letter-spacing: 2px;
      margin: 10px 0;
    }
  }
  
  .jianjie {
    max-width: @maxwd;
    margin: 0 auto;
    background: #fff;
    margin-top: -140px;
    padding: 40px;
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.2), -1px -1px 5px rgba(0, 0, 0, 0.2);
    .logo {
      width: 100%;
      text-align: center;
      img {
        width: 250px;
      }
    }
    .content {
      padding: 10px;
    }
    .content p {
      margin: 0;
      color: black;
      line-height: 1.7;
      letter-spacing: 1px;
      text-indent: 2em;
    }
  }

  .speak {
    box-shadow: none;
    margin: 50px auto;
    .logo {
      img {
        width: 400px;
      }
    }
    .content p {
      text-indent: 2em;
    }
  }

  @media screen and (max-width: 1100px) {
    .speak .logo img {
      width: 250px;
    }
  }

  @media screen and (max-width: 767px) {
    .top {
      height: 400px;
    }
    .mid {
      height: 300px;
      p {
        font-size: 20px;
      }
    }
    .jianjie {
      padding: 10px;
      .logo {
        padding: 20px 0;
        img {
          width: 160px;
        }
      }
    }
    .speak {
      margin: 20px auto;
    }
  }
</style>