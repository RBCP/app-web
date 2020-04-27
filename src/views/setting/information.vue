<template>
<div class="app-container">
  <el-row :gutter="24">
    <div class="layout-1">
      <div class="layout-title">应用号信息</div>
    <el-form v-model="user" label-position="left" label-width="120">
      <el-form-item label="应用名">
        <el-input v-model="user.name"></el-input>
      </el-form-item>
      <el-form-item label="应用简介">
        <el-input v-model="user.description"></el-input>
      </el-form-item>
      <el-form-item label="创建时间">
        <el-input v-model="user.createTime"></el-input>
      </el-form-item>
    </el-form>
    </div>
  </el-row>
</div>
</template>

<script>
  export default {
    name: 'information',
    data(){
      return{
        user:{
          name:'SAE培训部',
          description:'培训部课程和通知',
          createTime:'2017-09-23'
        }
      }
    }
  }
</script>

<style scoped>
  .app-container{
    margin-top:30px;
    margin-left:20px;
  }
  .layout-1{
    background:#FFFFFF;
    border:1px solid #D3D3D3;
    border-radius:6px;
    height:300px;
    width:700px;
    margin-top:30px;
    margin-left:40px;
  }
  .layout-title{
    color:#606266;
    padding:15px 20px;
    background:#F2F6FC;
    font-weight:bold;
    text-align:left;
  }
  .el-form{
    margin-top:30px;
    margin-left:30px;
  }
  .el-form-item{
    font-family: Arial, HelveticaNeue, sans-serif;
    font-weight: bold;
    font-size: 16px;
    letter-spacing: 0.04px;
  }
  .el-input{
    width:460px;
  }
</style>
