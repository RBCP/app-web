<template>
<div class="app-container">
  <el-row :gutter="20">
    <el-col :span="12">
      <div class="layout-1">
        <div class="layout-title">comChat多媒体图片</div>
        <el-form :model="picMessage" label-width="120px" label-position="left">
          <el-form-item label="工号">
            <el-select v-model="picMessage.employee_id"
                       filterable
                       remote
                       placeholder="空值代表全部"
                       :remote-method="remoteMethod"
                       :loading="loading">
                        <el-option
                          v-for="item in options"
                          :key="item.value"
                          :label="item.label"
                          :value="item.value">
                        </el-option>
            </el-select>
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
            <el-upload action="https://jsonplaceholder.typicode.com/posts/"
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
            <el-button @click="sendPicMessage" type="primary" size="small">发送</el-button>
          </el-form-item>
        </el-form>
      </div>
    </el-col>
  </el-row>
</div>
</template>

<script>
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
        list:[],
        loading:false,
        options1:[
          {label:'G100',value:'G100'},
          {label:'AD51',value:'AD51'},
          {label:'AE31',value:'AE31'},
          {label:'TN21',value:'JB01'},
          {label:'G370',value:'G370'}
        ],
        options2:[
          {label:'DG',value:'DG'},
          {label:'HK',value:'Hk'},
          {label:'CA',value:'CA'},
          {label:'JP',value:'JP'},
        ],
        states:['M088163','M088164','M088165','M087445','M947843','M109994','M084993','M099904','M984994','M984943',
                'M848444','M837849','M894994','M989442','M984040']
      }
    },
    mounted(){
      this.list=this.states.map(item => {
        return {value:`value:${item}`,label:`label:${item}`};
      });
    },
    methods:{
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
.layout-1{
  background:#FFFFFF;
  border:1px solid #D3D3D3;
  border-radius:6px;
  height:560px;
  width:700px;
  margin-top:30px;
  margin-left:150px;
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

</style>
