<template>
<div class="app-container">
  <el-row :gutter="20">
    <el-col :span="12">
      <div class="layout-1">
        <div class="layout-title">comChat多媒体图片</div>
        <el-form :model="picMessage" label-width="120px" label-position="left">
          <el-form-item label="工号">
          <el-autocomplete v-model="picMessage.employee_id"
                           :fetch-suggestions="queryAsync"
                           placeholder="请输入工号"
                           @select="handleSelect">
          </el-autocomplete>
          </el-form-item>
          <el-form-item label="部门代码">
            <el-select v-model="picMessage.dept"
                       placeholder="空值代表全部">
              <el-option v-for="item in options1"
                         :key="item.value"
                         :label="item.label"
                         :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="所在地">
            <el-select v-model="picMessage.location" placeholder="空值代表全部">
              <el-option v-for="item in options2"
                         :key="item.value"
                         :label="item.label"
                         :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="简要描述">
            <el-input v-model="picMessage.desc" style="width:460px"></el-input>
          </el-form-item>
          <el-form-item label="正文链接">
            <el-input v-model="picMessage.texturl" style="width:460px"></el-input>
          </el-form-item>
          <el-form-item label="图片上传">
            <el-upload :http-request="uploadImage"
                       :on-preview="handlePreview"
                       :on-remove="handleRemove"
                       :before-remove="beforeRemove"
                       class="upload"
                       :file-list="fileList">
              <el-button size="small" type="primary" >点击上传</el-button>
            </el-upload>
          </el-form-item>
          <el-form-item label="标题">
            <el-input v-model="picMessage.title" style="width:460px"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" size="small" @click="uploadImage">发送</el-button>
          </el-form-item>
        </el-form>
      </div>
    </el-col>
  </el-row>
</div>
</template>

<script>
  import {searchUser,getDeptList,getLocusList} from "@/api/features";
  import axios from 'axios'
  export default {
    name: 'sendPicture',
    data(){
      return{
        picMessage:{
          employee_id:'',
          dept:'',
          location:'',
          desc:'',
          texturl:'',
          file:'',
          title:'',
        },
        options:[],
        value:[],
        loading:false,
        options1:[],
        options2:[],
        states:[],
      }
    },
    mounted(){
    },
    created(){
      this.getLocus();
      this.getDept();
    },
    methods:{
       uploadImage(){
        const config={
          headers:{'Content-Type':'multipart/form-data'}
        };
        const formdata =new FormData();
        formdata.append('userName',this.$store.getters.userId)
        formdata.append('password',this.$store.getters.password)
        formdata.append('text',this.picMessage.employee_id)
        formdata.append('dept',this.picMessage.dept)
        formdata.append('locus',this.picMessage.location)
        formdata.append('title',this.picMessage.title)
        formdata.append('desc',this.picMessage.desc)
        formdata.append('texturl',this.picMessage.texturl)
        formdata.append('file',this.picMessage.file)
         console.log("发送图片")
        axios.post('http://localhost:8081/UploadPushpicServlet',formdata,config).then(response=>{
          console.log("上传成功")
        })
      },
     queryAsync(queryString,callback){
       let list=[{}];
       let param ={employee_id:queryString}
       searchUser(param).then(response => {
         this.list = [];
         response.data.data.forEach(item => {
             list.push({
             value: item.employee_id,
           })
         })
         callback(list)
       })
     },
      getLocus(){
       getLocusList().then(response=>{
         response.data.data.forEach(item=>{
           this.options2.push({
             label:item.title,
             value:item.title
           })
         })
       })
      },
      getDept(){
        getDeptList().then(response=>{
          response.data.data.forEach(item=>{
            this.options1.push( {
              label:item.title,
              value:item.title
            })
          })
        })
      },
      remoteMethod(query){
        if(query!==''){
          this.loading=false;
          setTimeout(()=>{
            this.loading=false;
            this.options=this.list.filter(item =>{
              return item.label.indexOf(query)>-1
            });
          },200);
        }else {
          this.options=[];
        }
      },
      sendPicMessage(){

      }
    }
  }
</script>

<style scoped>
  .app-container{
    margin-left:50px;
  }
.layout-1{
  background:#FFFFFF;
  border:1px solid #D3D3D3;
  border-radius:6px;
  height:560px;
  width:700px;
  margin-top:30px;
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
  .el-select{
    position:absolute;
    left:0
  }
  .el-input{
    position:absolute;
    left:0;
  }
  .el-autocomplete{
    position:absolute;
    left:0;
  }

</style>
