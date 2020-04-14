<template>
  <el-breadcrumb class="app-breadcrumb" separator=">>">
      <el-breadcrumb-item :to="{path:'/home'}">
        <svg-icon icon-class="bc nav_home_icon" class="icon"></svg-icon>Home</el-breadcrumb-item>
      <el-breadcrumb-item v-for="(item,index)  in levelList" :key="item.path" v-if="item.meta.title">
        <span v-if="item.redirect==='noredirect'||index==levelList.length-1" class="no-redirect">{{item.meta.title}}</span>
        <router-link v-else :to="item.redirect||item.path">{{item.meta.title}}</router-link>
      </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script>
export default {
  created() {
    this.getBreadcrumb()
  },
  data() {
    return {
      levelList: null
    }
  },
  watch: {
    $route() {
      this.getBreadcrumb()
    }
  },
  methods: {
    getBreadcrumb() {
      let matched = this.$route.matched.filter(item => item.name)
      const first = matched[0]
      this.levelList = matched
    },
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .app-breadcrumb.el-breadcrumb {
    display: inline-block;
    position:absolute;
    top:0;
    left:240px;
    line-height: 50px;
    margin-left: 90px;
    font-family:Arial,HelveticaNeue,sans-serif;
    font-size: 16px;
    color: #FFFFFF;
    letter-spacing: 0.13px;
  }
  .app-breadcrumb .el-breadcrumb .no-redirect {
      color: #FFFFFF;
      cursor: text;
  }
  .el-breadcrumb__separator {
    margin: 0 9px;
    font-weight: 700;
    color: #323647 !important;
  }
    .back-btn{
      display:inline-block;
    }
    .icon{
      margin-right:8px;
    }
    .back-icon{
      position: absolute;
      top: 1px;
      left: 51px;
      z-index: 1;
      font-size:12px;
    }
  .el-button--primary{
    padding:8px 0px 9px 30px;
    margin-left:11px;
    margin-right:13px;
    position:absolute;
    top:9px;
    left:240px;
    width:72px;
    height:32px;
    font-size: 12px;
    font-family: Arial,HelveticaNeue,sans-serif;
    font-weight:bold;
    color: #0046AD !important;
    letter-spacing: 0.51px;
    border: 1px solid #DADADA;
    border-radius: 2px;
    background-color:#FFFFFF
  }
  .back-icon{
    padding:0;
    color: #323647;
    position:absolute;
    top: 17px;
    left: 249px;
  }
 .no-redirect:hover{
   color:#FFFFFF;
 }
</style>
