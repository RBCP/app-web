<template>
<div class="app-container">
  <el-row :gutter="12">
    <div class="table-container">
    <el-table :data="list"
              border
              max-width="40%"
              v-loading="listLoading"
              element-loading-text="数据更新中"
              stripe>
      <el-table-column label="接受者工号"
                       width="150"
                       resizable
                       prop="receiver_employee_id">
        <template slot-scope="scope">
          {{scope.row.receiver_employee_id}}
        </template>
      </el-table-column>
      <el-table-column label="接受者姓名"
                       width="150"
                       resizable
                       prop="receiver_name">
        <template slot-scope="scope">
          {{scope.row.receiver_name}}
        </template>
      </el-table-column>
      <el-table-column label="发送时间"
                       width="200"
                       resizable
                       prop="timelimit">
        <template slot-scope="scope">
          {{scope.row.timelimit}}
        </template>
      </el-table-column>
      <el-table-column label="发送内容"
                        width="300"
                        resizable
                        prop="content"
                        :show-overflow-tooltip="true">
        <template slot-scope="scope">
          {{scope.row.content}}
        </template>
      </el-table-column>
    </el-table>
    <div class="pagination-container" style="margin-right:250px;">
      <pagination :page-config="listquery"
                  @changeCurrentPage="changeCurrentPage"
                  @changePageSize="changePageSize"
                  ></pagination>
    </div>
    </div>
  </el-row>
</div>
</template>

<script>
  import Pagination from '@/components/Pagination'
  import {getMsgList} from '@/api/management'
  export default {
    name: 'message',
    components:{Pagination},
    data(){
      return {
        list:[],
        listquery:{
          page:1,
          pageSize:50,
          total:0,
        }
      }
    },
    created(){
      this.initList();
    },
    methods:{
      initList(){
        getMsgList(this.listquery).then(response=>{
          this.list = response.data.data.list;
        })
      },
      changeCurrentPage(val){
        this.listquery.page=val;
      },
      changePageSize(val){
        this.listquery.pageSize=val;
      }
    }
  }
</script>

<style scoped>
.app-container{
  margin-top:30px;
  margin-left:25px;
}
  .table-container{
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
