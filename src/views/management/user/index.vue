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
                         prop="time"
                         align="center"
                         width="250"
                         resizable>
          <template slot-scope="scope">
            {{scope.row.time}}
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
                   @changeCurrentPage="handleChange"
                   @changePageSize="handleChangePageSize"
      </div>
    </div>

  </el-row>
</div>
</template>

<script>
  import Pagination from '@/components/Pagination'
  export default {
    name: 'user',
    component:{Pagination},
    data(){
      return {
        listquery:{
          nickname:'',
          page:1,
          pageSize:10,
          total:100
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
          this.list=[
            {employee_id:'M090152',toNickname:'Mai Wei Ming',time:'2020-04-22 08:53:13'},
            {employee_id:'M117703',toNickname:'Wen Fang Tan',time:'2020-04-21 08:56:44'},
            {employee_id:'M088251',toNickname:'Simon Shi Zhi',time:'2020-04-19 22:41:07'},
            {employee_id:'M088050',toNickname:'Shi Wei Zhang',time:'2020-04-17 15:18:26'},
            {employee_id:'R551247',toNickname:'Tang RU Yi',time:'2020-04-16 16:06:36'},
            {employee_id:'M088362',toNickname:'Meng Zhen Chen',time:'2020-04-09 09:00:09'}
          ]
      },
      deleteRow(){
        this.$confirm('是否删除','warning',{
          confirmButtonText:'确定',
          cancelButtonText:'取消',
          warning:true
        }).then(()=>{

        })
      },
      handleChangePageSize(val){
        this.listquery.pageSize=val;
      },
      handleCurrentChange(val){
        this.listquery.page=val;
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
  }
  .pagination-container{
    position:absolute;
    left:100px;
    height:150px;
    margin-top:20px;
  }
</style>
