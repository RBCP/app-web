<template>
  <div>
  <scroll-bar>
    <el-menu
      mode="vertical"
      :show-timeout="200"
      :default-active="$route.path"
      :collapse="isCollapse"
      background-color="#FFFFFF"
      active-text-color="#2C68E6"
      unique-opened="true"
    >
      <sidebar-item :routes="routes"></sidebar-item>
    </el-menu>
  </scroll-bar>
    <div class="footer" style="vertical-align:middle">
  <svg-icon icon-class="comchat logo" style="width:2.0em ;height:2.0em"></svg-icon>
      <p class="text">comChat version 1.0.0.0<br>© 2017-2019 SAE All Rights Reserved.</p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import SidebarItem from './SidebarItem'
import ScrollBar from '@/components/ScrollBar'

export default {
  components: { SidebarItem, ScrollBar },
  computed: {
    ...mapGetters([
      'sidebar'
    ]),
    routes() {
      return this.$router.options.routes
    },
    isCollapse() {
      return !this.sidebar.opened
    }
  }
}
</script>
<style scoped>
  .footer{
    position:absolute;
    top:650px;
    font-family:Arial,HelveticaNeue,sans-serif;
    letter-spacing: 0.21px;
  }
 .text{
   float:right;
   font-family:Arial,HelveticaNeue,sans-serif;
   color: #828282;
   font-size:10px;
   letter-spacing: 0.23px;
   position:absolute;
   height:30px;
   width:210px;
   left:35px;
   top:-6px;
 }

</style>
