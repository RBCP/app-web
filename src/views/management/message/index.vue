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
                       width="200"
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
                        width="250"
                        resizable
                        prop="content">
        <template slot-scope="scope">
          {{scope.row.content}}
        </template>
      </el-table-column>
    </el-table>
    </div>
  </el-row>
    <div class="pagination-container" style="margin-right:250px;">
      <pagination :page-config="listquery"
                  @changeCurrentPage="changeCurrentPage"
                  @changePageSize="changePageSize"
                  ></pagination>
    </div>
</div>
</template>

<script>
  import Pagination from '@/components/Pagination'
  export default {
    name: 'message',
    components:{Pagination},
    data(){
      return {
        list:[],
        listquery:{
          page:1,
          pageSize:10,
          total:100,
        }
      }
    },
    created(){
      this.initList();
    },
    methods:{
      initList(){
        this.list=[
          {receiver_employee_id:'M025028',receiver_name:'He Jian Feng',timelimit:'2018-09-25 17:02:39',content:'nfhuhsfdshfhdjfdhjfhh'},
          {receiver_employee_id:'M084914',receiver_name:'Song Cheng Long',timelimit:'2018-09-22 12:36:19',content:'ffhjdfhjdhsjfhsjdhf'},
          {receiver_employee_id:'M088192',receiver_name:'Bin Peng',timelimit:'2018-09-21 08:30:27',content:'hfhjdhfjhjfhdhfhfhh'},
          {receiver_employee_id:'M701455',receiver_name:'Fu Jian Wang',timelimit:'2018-09-14 14:28:33',content:'jfjdhjfhjhhjfifi'},
          {receiver_employee_id:'M701678',receiver_name:'Li Quan',timelimit:'2018-09-13 08:04:43',content:'jfdsjfhsjfhjdhfjhdfh'}
        ]
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
  }

</style>
