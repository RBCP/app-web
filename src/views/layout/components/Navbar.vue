<template>
  <el-menu class="navbar" mode="horizontal">
    <div class="title">comChat应用号管理系统</div>
    <breadcrumb></breadcrumb>
  </el-menu>
</template>

<script>
import { mapGetters } from 'vuex'
import Breadcrumb from '@/components/Breadcrumb'
import Hamburger from '@/components/Hamburger'

export default {
  components: {
    Breadcrumb,
    Hamburger
  },
  computed: {
    ...mapGetters([
      'sidebar',
      'name'
    ])
  },
  methods: {
    toggleSideBar() {
      this.$store.dispatch('ToggleSideBar')
    },
    logout() {
      this.$store.dispatch('LogOut').then(() => {
        location.reload() // 为了重新实例化vue-router对象 避免bug
      })
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.navbar {
  height: 44.5px;
  color:#FFFFFF;
  border-radius: 0px !important;
  background:#0046AD ;
 }
  .hamburger-container {
    line-height: 58px;
    height: 50px;
    padding-left:11px;
    padding-right:1px;
  }
  .screenfull {
    position: absolute;
    right: 90px;
    top: 16px;
    color: red;
  }
  .avatar-container {
    height: 50px;
    display: inline-block;
    position: absolute;
    right: 35px;
  }
  .title{
    display:inline-block;
    font-family:Arial, HelveticaNeue, sans-serif;
    font-weight:bold;
    font-size: 16px;
    color: #FFFFFF;
    letter-spacing: 0.04px;
    margin-top:13px;
    position:absolute;
    left:50px;
  }
    .avatar-wrapper {
      cursor: pointer;
      margin-top: 5px;
      position: relative;
    }
      .user-avatar {
        width: 40px;
        height: 40px;
        border-radius: 10px;
      }
      .el-icon-caret-bottom {
        position: absolute;
        right: -20px;
        top: 25px;
        font-size: 12px;
      }
</style>
<style>
  .el-menu--horizontal {
    border-right: none;
  }
</style>

