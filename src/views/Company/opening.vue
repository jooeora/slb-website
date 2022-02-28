<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

// 生命周期
onMounted(() => {
  handleImgSrc()
})

// 图片路径
const imgUrl = ref('')
const handleImgSrc = async () => {
  //  banner
  let m = await import('@/assets/images/Finance.jpeg')

  imgUrl.value = {
    banner1: m.default
  }
}

// 路由
const router = useRouter()
const goPage = (page = '/') => {
  console.log('go home')
  router.push({ path: '/' })
}
</script>
<template>
  <div class="main">
    <!-- banner -->
    <n-carousel :space-between="20" draggable>
      <img class="carousel-img" :src="imgUrl.banner1" />
    </n-carousel>
    <div class="max-width content">
      <n-breadcrumb>
        <n-breadcrumb-item @click="goPage('/')"> 首页 </n-breadcrumb-item>
        <n-breadcrumb-item> 公司金融-公司开户条件 </n-breadcrumb-item>
      </n-breadcrumb>
    </div>
    <div class="max-width content">
      <div class="cont">
        <div class="title">公司开户需要提供的资料</div>

        <!-- 独资企业 -->
        <div class="sub-title">独资企业</div>
        <ul class="list">
          <li>公司地址证明</li>
          <li>
            营业执照和税务证明（个体经营者/独资经营者/独立承包商）法令的复印件，该法令授权自由职业者的营业执照和税务证明
          </li>
          <li>专利持有人的有效身份证或护照</li>
          <li>有效的彩色护照尺寸照片</li>
          <li>专利持有人的地址证明（电费，水费和电话费账单）</li>
          <li>公司最近三年的财务报表</li>
        </ul>

        <!-- 专业客户 -->
        <div class="sub-title">专业客户（个体商人，（OPC）/私人/公共有限公司）</div>
        <ul class="list">
          <li>公司注册证书</li>
          <li>组织章程大纲（MoA）或组织章程细则（AoA）</li>
          <li>董事会决议（BR）</li>
          <li>最新董事名单</li>
          <li>授权个人进行账户操作的授权书（POA），并在POA协议中提交护照规格近期照片和住址证明</li>
          <li>直接或间接持有公司25%以上股份的股东名单</li>
          <li>公司地址证明（电费，水费或电话费账单）</li>
          <li>营业执照和税务证明</li>
          <li>授权人（签字人）的有效国民身份证或护照和护照尺寸的照片。</li>
          <li>居住在吉布提的授权人的地址证明（电费，水费或电话费账单）</li>
          <li>最近三年的财务报表</li>
        </ul>

        <!-- 有限责任公司 -->
        <div class="sub-title">有限责任公司</div>
        <ul class="list">
          <li>注册证明</li>
          <li>组织章程大纲（MoA）或组织章程细则（AoA）</li>
          <li>最新的董事或合伙人名单</li>
          <li>授权个人进行账户操作的授权书（POA），并在POA协议中提交护照规格近期照片和住址证明</li>
          <li>直接或间接持有公司15％以上股份的股东名单（使用公司信头纸）</li>
          <li>公司地址证明（电，水或电话账单）</li>
          <li>营业执照和/或专利的复印件</li>
          <li>授权人（签字人）的有效国民身份证或护照和护照尺寸的照片。</li>
          <li>授权人（签字人）的吉布提居住地址证明（电费，水费或电话费账单）</li>
          <li>最近三年的财务报表</li>
        </ul>

        <!-- 自贸区公司/企业 -->
        <div class="sub-title">自贸区公司/企业</div>
        <ul class="list">
          <li>组织章程大纲（MoA）或组织章程细则（AoA）复印件</li>
          <li>最新的董事名单及其权力</li>
          <li>董事会决议（BR）</li>
          <li>授权个人进行账户操作的授权书（POA），并在POA协议中提交护照规格近期照片和住址证明</li>
          <li>直接或间接持有公司15％以上股份的股东名单（使用公司信头纸）</li>
          <li>公司地址证明（电费，水费或电话费账单）</li>
          <li>营业执照和/营业执照副本复印件；</li>
          <li>授权人（签字人）的有效国民身份证或护照原件；</li>
          <li>授权人的有效护照尺寸的照片</li>
          <li>居住在吉布提的授权人（签字人）的人员的地址证明（电费，水费或电话费账单）</li>
          <li>最近三年的财务报表</li>
        </ul>
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
    height: 240px;
    object-fit: cover;
  }
  .content {
    width: 100%;
    margin: 20px auto;
    background-color: white;
    padding: 20px;
    border-radius: 6px;
    .cont {
      .title {
        font-size: 18px;
        position: relative;
        padding-bottom: 5px;
        &::after {
          content: '';
          width: 2em;
          height: 4px;
          border-radius: 2px;
          background-color: rgba(0, 188, 150, 0.9);
          position: absolute;
          bottom: 0;
          left: 0;
          display: inline-block;
          z-index: 3;
        }
        &::before {
          content: '';
          width: 100%;
          height: 4px;
          border-radius: 2px;
          background-color: rgba(196, 196, 196, 0.1);
          position: absolute;
          bottom: 0;
          left: 0;
          display: inline-block;
          z-index: 2;
        }
      }
      .sub-title {
        font-size: 16px;
        font-weight: 700;
        margin-top: 20px;
        padding: 0 20px;
      }
      .list {
        padding: 0 20px;
        list-style: inside decimal;
        li {
          font-size: 16px;
          color: #666;
        }
      }
    }
  }
}
</style>
