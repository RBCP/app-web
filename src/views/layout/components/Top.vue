<template>
  <div class="top" >
    <svg-icon icon-class="top nav_TDKlogo" style="width:10em;height:4.6em;margin-left:10px;float:left"></svg-icon>
    <div class="right-item">
    <ul>
      <li>
        <el-badge :value="3" class="item">
      <svg-icon icon-class="top nav_notice_icon" style="width:2.0em;height:1.3em;"></svg-icon>
        <span @click="notice" style="margin-left:-7px;">通知</span>
        </el-badge>
      </li>
      <li>
          <svg-icon icon-class="top nav_help_icon" style="width:2.0em;height:1.3em;margin-left:15px"></svg-icon>
        <span @click="help" style="margin-left:-7px">帮助</span>
      </li>
      <li>
        <svg-icon icon-class="user_icon" style="width:2.0em;height:1.3em;margin-left:14px"></svg-icon>
    <el-dropdown class="avatar-container" trigger="click">
      <div class="avatar-wrapper">
        <p class="user-avatar" >{{name}}</p>
        <i class="el-icon-caret-bottom"></i>
      </div>
      <el-dropdown-menu class="user-dropdown" slot="dropdown">
        <el-dropdown-item divided>
          <span @click="logout" style="display:block;">Logout</span>
        </el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
      </li>
    </ul>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  export default {
    computed: {
      ...mapGetters([
        'name'
      ])
    },
    methods:{
      logout(){
        this.$store.dispatch('LogOut').then(() => {
          location.reload() // 为了重新实例化vue-router对象 避免bug
        })
      },
      notice(){

      },
      help(){

      },
    }
  }
</script>

<style scoped>
  .top{
    width:100%;
    height:67px;!important
    position:fixed;
    background: #FFFFFF;
    box-shadow: 0 3px 5px 0 rgba(215,215,215,0.50);
  }
  .item{
    margin-top:-3px;
  }
  .avatar-container {
    height: 30px;
    display: inline-block;
    position: absolute;
    right: 50px;
  }
  .avatar-wrapper {
    cursor: pointer;
    margin-top: -23px;
    position: relative;
  }
  .user-avatar {
    width:24px;
    height:11px;
    margin-top:24px;
    font-family:Arial,HelveticaNeue,sans-serif;
    font-size: 16px;
    color: #4D4D4D;
    letter-spacing: 0.31px;
  }
  .el-icon-caret-bottom{
    position: absolute;
    left: 46px;
    bottom: -5px;
  }
  .left-item p{
    display:inline-block;
    position:relative;
    top: -10px;
    left: 20px;
    color:#0046AD;
    font-size:14px;

  }
  .right-item{
    display:inline-block;
    width:282px;
    float:right;
    height:67px;
    margin-right:30px;
  }
   ul li{
    display:inline-block;
    list-style: none;
     font-family:Arial,HelveticaNeue,sans-serif;
     font-size: 16px;
     color: #323647;
     letter-spacing: 0.31px;
     padding-top:10px;
  }
</style>

