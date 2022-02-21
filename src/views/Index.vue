<script setup>
import { ref, onMounted } from 'vue'
import { Building, Person, PhoneIp } from '@vicons/carbon'
onMounted(() => {
  handleImgSrc()
})

// 图片路径
const imgUrl = ref('')
const handleImgSrc = async () => {
  //  banner
  let m = await import('@/assets/images/Finance.jpeg')

  // 简介图片
  let d1 = await import('@/assets/images/SIB1024-2-700x400.jpg')
  let d2 = await import('@/assets/images/SIB04-700x400.jpg')
  let d3 = await import('@/assets/images/1b1r-623x356.jpeg')
  let f1 = await import('@/assets/images/1.jpeg')
  let f4 = await import('@/assets/images/4.jpeg')

  imgUrl.value = {
    banner1: m.default,
    d1: d1.default,
    d2: d2.default,
    d3: d3.default,
    f1: f1.default,
    f4: f4.default
  }
}
</script>
<template>
  <div class="main">
    <!-- banner -->
    <n-carousel :space-between="20" draggable>
      <img class="carousel-img" :src="imgUrl.banner1" />
    </n-carousel>

    <!-- 产品与服务 -->
    <div class="max-width featured-post-wrap">
      <div>
        <n-icon size="64">
          <Building />
        </n-icon>
        <div class="title">公司产品与服务</div>
        <n-ellipsis class="description" style="max-width: 240px">公司产品与服务</n-ellipsis>
      </div>
      <div>
        <n-icon size="64">
          <Person />
        </n-icon>
        <div class="title">个人产品与服务</div>
        <n-ellipsis class="description" style="max-width: 240px">公司产品与服务</n-ellipsis>
      </div>
      <div>
        <n-icon size="64">
          <PhoneIp />
        </n-icon>
        <div class="title">联系我们</div>

        <n-ellipsis class="description" style="max-width: 240px">
          吉布提地址：Haramous 1 Lot No.2, Djibouti, BP 1877
        </n-ellipsis>
      </div>
    </div>
    <!-- 内容 -->
    <div class="max-width content">
      <!-- 简介 -->
      <div class="description">
        <div class="des">
          <div class="title">丝路国际银行(Silkroad International Bank,简称SIB)</div>
          <div class="cont">
            <p>
              位于吉布提共和国首都吉布提市，由中资企业和吉布提政府共同发起，经吉布提央行批准成立的商业银行。
            </p>
            <p>
              我们秉承“连通丝绸之路，共创东非辉煌”的经营理念，坚持“立足吉布提，服务东非，连接中国，面向全球”的发展定位，助力吉布提打造成为“东非的金融中心，非洲之角的迪拜”。
            </p>
          </div>
          <div>
            <n-button class="link" color="rgba(0, 188, 150, 0.9)" type="primary" ghost>
              公司新闻
            </n-button>
            <n-button class="link" color="rgba(0, 188, 150, 0.9)" type="primary" ghost>
              联系我们
            </n-button>
          </div>
        </div>
        <div class="imgs">
          <n-carousel :space-between="20" draggable>
            <img class="carousel-img" :src="imgUrl.d1" />
            <img class="carousel-img" :src="imgUrl.d2" />
            <img class="carousel-img" :src="imgUrl.d3" />
          </n-carousel>
        </div>
      </div>
    </div>
    <!-- 个人金融 -->
    <div class="max-width content">
      <!-- 金融 -->
      <div class="finance">
        <div class="title">个人金融</div>
        <div class="cont">
          <div class="img">
            <img :src="imgUrl.f4" alt="" srcset="" />
          </div>
          <div class="serve">
            <div class="tit">个人产品与服务</div>
            <ul>
              <li>账户开立</li>
              <li>个人支票</li>
              <li>支付转账</li>
              <li>国际汇款</li>
              <li>货币兑换</li>
            </ul>
          </div>
          <div class="quest">
            <div class="tit">常见问题</div>
            <ul>
              <li>
                <div>1. 能够开立什么币种账户？</div>
                <div>答：吉郎和美元</div>
              </li>
              <li>
                <div>2. 开户需要什么条件？</div>
                <div>答：<span>个人开户条件</span></div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <!-- 公司金融 -->
    <div class="max-width content">
      <!-- 金融 -->
      <div class="finance">
        <div class="title">公司金融</div>
        <div class="cont">
          <div class="img">
            <img :src="imgUrl.f1" alt="" srcset="" />
          </div>
          <div class="serve">
            <div class="tit">公司产品与服务</div>
            <ul>
              <li>账户开立</li>
              <li>公司支票</li>
              <li>支付转账</li>
              <li>国际汇款</li>
              <li>货币兑换</li>
              <li>信贷服务</li>
              <li>保函与信用证</li>
            </ul>
          </div>
          <div class="quest">
            <div class="tit">常见问题</div>
            <ul>
              <li>
                <div>1. 能够开立什么币种账户？</div>
                <div>答：吉郎和美元</div>
              </li>
              <li>
                <div>2. 开户需要什么条件？</div>
                <div>答：<span>公司开户条件</span></div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.main {
  overflow: hidden;
  background-color: rgba(204, 204, 204, 0.15);
  .carousel-img {
    width: 100%;
    height: 400px;
    object-fit: cover;
  }
  .featured-post-wrap {
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    & > div {
      text-align: center;
      padding: 30px 60px;
      background-color: white;
      margin: 20px 0 20px 20px;
      flex: 1;
      box-sizing: border-box;
      border-radius: 6px;
      border-bottom: 4px solid white;
      &:first-child {
        margin-left: 0;
      }
      &:hover {
        color: rgba(0, 188, 150, 0.9);
        cursor: pointer;
        border-bottom: 4px solid rgba(0, 188, 150, 0.9);
      }

      .title {
        font-size: 18px;
        margin: 10px 0;
      }

      .description {
        color: #999;
      }
    }
  }
  .content {
    width: 100%;
    margin: 0 auto;
    background-color: white;
    padding: 20px;
    border-radius: 6px;
    margin-bottom: 20px;
    .description {
      display: flex;
      width: 100%;
      .des {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .title {
          font-size: 18px;
          font-weight: 700;
        }
        .cont {
          font-size: 16px;
          color: #666;
          padding: 20px 0;
          p {
            margin: 10px 0;
            text-align: justify;
          }
        }
        .link {
          font-size: 16px;
          margin-right: 20px;
          //
        }
      }
      .imgs {
        width: 40%;
        margin-left: 20px;

        .carousel-img {
          width: 100%;
          height: 240px;
          object-fit: cover;
        }
      }
    }
    .finance {
      .title {
        font-size: 18px;
        font-weight: 700;
        padding-bottom: 10px;
        border-bottom: 1px solid rgba(102, 102, 102, 0.1);
      }
      .cont {
        display: flex;
        padding: 20px 0 0;
        .img {
          width: 280px;
          img {
            width: 100%;
            object-fit: cover;
          }
        }
        .serve {
          flex: 1;
          padding: 0 20px;
          margin-left: 60px;
          ul {
            list-style: inside;
            text-indent: 1em;
            margin-top: 5px;
            padding-top: 5px;
            li {
              padding: 2px 0;
            }
          }
          .tit {
            font-size: 16px;
            font-weight: 700;
          }
        }
        .quest {
          flex: 1;
          padding: 0 20px;
          .tit {
            font-size: 16px;
            font-weight: 700;
          }
          ul {
            list-style: none;
            text-indent: 1em;
            margin-top: 5px;
            padding-top: 5px;
            li {
              div {
                padding: 2px 0;
                span {
                  cursor: pointer;
                  color: rgba(0, 188, 150, 0.9);
                  text-decoration: underline;
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
