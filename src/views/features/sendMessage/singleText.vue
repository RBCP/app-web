<template>
<div class="app-container">
  <el-row :gutter="12">
    <div class="layout-1">
      <div class="layout-title">发送普通会话</div>
      <el-form :model="message" label-width="100px" label-position="left">
        <el-form-item label="接受者工号">
          <el-input v-model="message.userName" style="width:460px"></el-input>
        </el-form-item>
        <el-form-item label="发送内容">
          <el-input
            style="width:460px;margin-right:100px"
            v-model="message.text"
            type="textarea"
            :rows="4"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" size="middle" @click="sendMessage()">发送</el-button>
        </el-form-item>
      </el-form>
    </div>
  </el-row>
  <el-row :gutter="12" style="margin-top:30px">
    <div class="layout-2">
      <div class="layout-title">发送多媒体文本</div>
      <el-form :model="message" label-width="120px" label-position="left" >
        <el-form-item label="接收者工号: ">
          <el-input v-model="message.userName"></el-input>
        </el-form-item>
        <el-form-item label="简要描述: ">
          <el-input v-model="message.desc"></el-input>
        </el-form-item>
        <el-form-item label="标题: ">
          <el-input v-model="message.title"></el-input>
        </el-form-item>
        <el-form-item label="二级标题: ">
          <el-input v-model="message.subtitle"></el-input>
        </el-form-item>
        <el-form-item label="点击跳转地址: ">
          <el-input v-model="message.url"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" size="middle" @click="sendMessage()"> 发送
          </el-button>
        </el-form-item>
      </el-form>
    </div>
  </el-row>
</div>
</template>

<script>
  import {pushSingle} from '@/api/features'
  export default {
    name: 'singleText',
    data(){
      return {
        message:{
          userName:'',
          password:'',
          text:'',
          dept:'',
          locus:'',
          url:'',
          title:'',
          subtitle:''
        }
      }
    },
    methods:{
      sendMessage(){
        this.$confirm('是否转发这条消息？','Waring',{
          confirmButtonText:'确定',
          cancelButtonText:'取消',
          waring:true
        }).then(()=>{
          pushSingle(this.message).then(response=>{
            this.$message({
              type:'success',
              message:'转发成功'
            })
          })
        })
      }
    }
  }
</script>

<style scoped>
  .app-container{
    margin-top:30px;
    margin-left:50px;
  }
.layout-1{
  background:#FFFFFF;
  border:1px solid #D3D3D3;
  border-radius:6px;
  height:320px;
  width:700px;
}
.layout-2{
  background:#FFFFFF;
  border:1px solid #D3D3D3D3;
  border-radius:6px;
  height:450px;
  width:700px;

}

.el-message-box__content{
  font-size:18px;
}
.el-input{
  margin-right:100px;
  width:460px;
}
  .layout-title{
    color:#606266;
    padding:15px 20px;
    background:#F2F6FC;
    font-weight:bold;
    text-align:left;
  }
  .el-form{
    margin-top:20px;
    margin-left:35px;
  }
  .el-form-item{
    font-family: Arial, HelveticaNeue, sans-serif;
    font-weight: bold;
    font-size: 16px;
    letter-spacing: 0.04px;
  }
</style>
