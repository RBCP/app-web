<template>
<div class="app-container">
  <el-row :gutter="12">
    <div class="layout-1">
        <el-form :model="Menu" label-width="100px" label-position="left">
          <el-form-item label="菜单ID">
            <el-input v-model="Menu.id" disabled ></el-input>
          </el-form-item>
          <el-form-item label="URL">
            <el-input v-model="Menu.url"></el-input>
          </el-form-item>
          <el-form-item label="菜单名">
            <el-input v-model="Menu.name"></el-input>
          </el-form-item>
          <el-form-item >
            <el-button type="primary" size="middle" @click="updateMenu">提交</el-button>
          </el-form-item>
        </el-form>
    </div>
  </el-row>
</div>
</template>

<script>
  import {updateMenu,getMenuDetail} from '@/api/features'
  export default {
    name: 'updateMenu',
    data(){
      return {
        Menu:{
        id:'',
        url:'',
        name:''
        }
      }
    },
    created(){
      this.getMenu();
    },
    methods:{
      getMenu(){
        let params={
          id:this.$route.query.id
        }
        getMenuDetail(params).then(response=>{
          this.Menu=response.data.data;
        })
      },
      updateMenu(){
        this.$confirm('是否提交?','warning',{
          confirmButtonText:'确定',
          cancelButtonText:'取消',
          warning:true,
        }).then(()=>{
          updateMenu(this.Menu).then(response =>{
            this.$message({
              type:'success',
              message:response.data.data
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
.el-form-item{
  font-family: Arial, HelveticaNeue, sans-serif;
  font-weight: bold;
  font-size: 16px;
  letter-spacing: 0.04px;
}
.el-input{
  width:460px;
  position:absolute;
  left:0;
}
.el-button{
  position:absolute;
  left:150px;
}
  .el-form{
    margin-top:20px;
    margin-left:35px;
  }
</style>
