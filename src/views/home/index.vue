<template>
  <div class="app-container">
      <div class="bulletin">
        <svg-icon icon-class="公告"></svg-icon>
        <span>    欢迎使用SAE培训部！！</span>
      </div>
    <el-row :gutter="12" >
      <el-col :span="6">
        <div class="layout">
          <div class="layout-title">关注人数新增情况</div>
          <div class="increase">今日新增:
            <span>({{attention.today}})</span>
          </div>
          <div class="increase">昨日新增:
            <span>({{attention.yesterday}})</span>
          </div>
          <div class="increase">本周新增:
          <span>({{attention.week}})</span>
          </div>
          <div class="increase">本月新增:
            <span>({{attention.mouth}})</span>
          </div>
        </div>
      </el-col>
      <el-col :span="6" style="margin-left:150px">
        <div class="layout">
          <div class="layout-title">消息新增情况</div>
          <div class="increase">今日新增:
            <span>({{message.today}})</span>
          </div>
          <div class="increase">昨日新增:
            <span>({{message.yesterday}})</span>
          </div>
          <div class="increase">本周新增:
            <span>({{message.week}})</span>
          </div>
          <div class="increase">本月新增:
            <span>({{message.mouth}})</span>
          </div>
        </div>
      </el-col>
    </el-row>
    <el-row :gutter=12>
      <el-col :span="12">
        <div class="layout-1">
          <div class="layout-title">信息总览</div>
          <el-row style="margin-top:40px">
            <el-col :span="6" class="color-danger overview-item-value">{{information.fansCount}}</el-col>
            <el-col :span="6" class="color-danger overview-item-value">{{information.blackCount}}</el-col>
            <el-col :span="6" class="color-danger overview-item-value">{{information.msgCount}}</el-col>
            <el-col :span="6" class="color-danger overview-item-value">8848</el-col>
          </el-row>
          <el-row>
            <el-col :span="6" class="overview-item-title">总关注人数</el-col>
            <el-col :span="6" class="overview-item-title">黑名单人数</el-col>
            <el-col :span="6" class="overview-item-title">已发送的消息</el-col>
            <el-col :span="6" class="overview-item-title">已接收的消息</el-col>
          </el-row>
        </div>
      </el-col>
    </el-row>
  </div>

</template>

<script>
  import {getAppInformation} from '@/api/home'
  export default {
    name: 'home',
    data(){
      return {
        attention:{
          today:20,
          yesterday:30,
          week:175,
          mouth:5250
        },
        message:{
          today:200,
          yesterday:300,
          week:1750,
          mouth:52500
        },
        information:{
          fansCount:'',
          blackCount:'',
          msgCount:'',
        }
      }
    },
    created(){
      this.initInformation();
    },
    methods:{
      initInformation(){
        getAppInformation().then(response=>{
          this.information=response.data.data;
        })
      }
    }
  }
</script>

<style scoped>
  .app-container{
    max-height:780px;
    margin-top:10px;
  }
  .bulletin{
    width:80%;
    height:40px;
    border:1px solid #5189FF;
    text-align:left;
    background:#5189FF;
    padding-top:5px;
    padding-left:10px;
    color:#FFFFFF;
    font-family: Arial, HelveticaNeue, sans-serif;
    font-weight: bold;
    font-size: 16px;
    letter-spacing: 0.04px;
  }
  .layout-title{
    color:#606266;
    padding:15px 20px;
    background:#F2F6FC;
    font-weight:bold;
    text-align:left;
  }
.layout{
  background:#FFFFFF;
  border:1px solid #D3D3D3;
  border-radius:6px;
  height:300px;
  width:350px;
  margin-top:20px;
}
.layout-1{
  background:#FFFFFF;
  border:1px solid #D3D3D3;
  border-radius:6px;
  height:200px;
  width:793px;
  margin-top:20px;

}
.overview-item-value{
  font-size:24px;
  text-align:center;
}
.overview-item-title{
  margin-top: 10px;
  text-align:center;
}

  .increase{
    font-family: Arial, HelveticaNeue, sans-serif;
    font-weight: bold;
    font-size: 20px;
    letter-spacing: 0.04px;
    text-align:left;
    margin-left:40px;
    margin-top:27px;
  }
  .increase span{
    margin-left:60px;
    color:#F56C6C;
  }
</style>
