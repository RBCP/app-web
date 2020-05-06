<template>
<div class="app-container">
  <el-row :gutter="12">
    <div class="layout-1">
    <el-form v-model="listquery" inline="true">
      <el-input v-model="listquery.nickname" placeholder="请输入昵称" ></el-input>
      <el-button type="primary" size="small" @click="searchUser" style="position:absolute;left:250px">搜索</el-button>
    </el-form>
    </div>
  </el-row>
  <el-row :gutter="12">
    <div class="table-container">
      <el-table :data="list"
                max-width="90%"
                v-lading="listLoading"
                element-loading-text="数据更新中"
                stripe
                border>
        <el-table-column label="关注者工号"
                          prop="employee_id"
                          align="center"
                          width="150"
                          resizable>
          <template slot-scope="scope">
            {{scope.row.employee_id}}
          </template>
        </el-table-column>
        <el-table-column label="关注者昵称"
                         prop="toNickname"
                         align="center"
                         widht="200"
                         resizable>
          <template slot-scope="scope">
            {{scope.row.toNickname}}
          </template>
        </el-table-column>
        <el-table-column label="关注时间"
                         prop="times"
                         align="center"
                         width="250"
                         resizable>
          <template slot-scope="scope">
            {{scope.row.times}}
          </template>
        </el-table-column>
        <el-table-column align="center"
                         label="操作"
                         width="150">
          <template slot-scope="scope">
            <el-button type="text" size="small" @click="deleteRow(scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="pagination-container" style="margin-right:250px">
       <pagination :page-config="listquery"
                   @changeCurrentPage="handleCurrentChange"
                   @changePageSize="handleChangePageSize">

       </pagination>
      </div>
    </div>

  </el-row>
</div>
</template>

<script>
  import Pagination from '@/components/Pagination'
  import {getFansList,deleteFans} from "@/api/management";

  export default {
    name: 'user',
    components:{Pagination},
    data(){
      return {
        listquery:{
          nickname:'',
          pageIndex:1,
          pageSize:50,
          total:0
        },
        pageConfig:{
          page:'',
          pageSize:'',
          total:''
        },
        list:null,
        listLoading:false,
      }
    },
    created(){
      this.initList();
    },
    methods:{
      initList(){
         getFansList(this.listquery).then(response=>{
           this.list=response.data.data.list;
           this.listquery.total=response.data.data.total;
         })
      },
      deleteRow(data){
        this.$confirm('是否删除','warning',{
          confirmButtonText:'确定',
          cancelButtonText:'取消',
          warning:true
        }).then(()=>{
          let params={
            toUserId:data.toUserId
          }
          deleteFans(params).then(response=>{
            this.$message({
              type:'success',
              message:response.data.data
            })
          })
          this.initList();
        })
      },
      handleChangePageSize(val){
        this.listquery.pageSize=val;
        this.initList();
      },
      handleCurrentChange(val){
        this.listquery.pageIndex=val;
        this.initList();
      },
      searchUser(){

      }
    }
  }
</script>

<style scoped>
.app-container{
  margin-top:30px;
  margin-left:30px;
  overflow-y:visible;
}
.layout-1{
  margin-bottom:30px;
}
  .el-input{
    width:230px;
    position:absolute;
    left:0;
  }
  .table-container{
    margin-top:30px;
    width:600px;
    height:900px;
  }
  .pagination-container{
    position:absolute;
    left:100px;
    height:150px;
    margin-top:20px;
  }
</style>
