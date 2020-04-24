<template>
<div class="app-container">
  <el-row :gutter="24">
    <div class="layout-1">
      <div class="layout-title">添加菜单</div>
      <el-form :model="Menu"  label-width="100px" >
        <el-form-item label="菜单级别">
          <el-select v-model="Menu.id" placeholder="请选择">
            <el-option v-for="item in menuList"
                       :key="item.value"
                       :label="item.label"
                       :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
          <el-form-item label="菜单名">
            <el-input v-model="Menu.name"></el-input>
          </el-form-item>
          <el-form-item label="访问地址">
            <el-input v-model="Menu.url"></el-input>
          </el-form-item>
        <el-form-item>
          <el-button type="primary" size="small" style="position:absolute;left:130px;">添加</el-button>
        </el-form-item>
      </el-form>
    </div>
  </el-row>
  <el-row>
    <div class="table-container">
      <el-table style="text-align:center;max-width:100%;"
                :data="list"
                :span="objectSpanMethod"
                v-loading="listLoading"
                max-height="650"
                element-loading="数据更新中"
                stripe
                border>
       <el-table-column label="菜单名"
                        prop="MainName"
                        resizable
                        align="center"
                        width="150">
         <template slot-scope="scope">
           {{scope.row.MainName}}
         </template>
       </el-table-column>
        <el-table-column label="子菜单名"
                         prop="name"
                         resizable
                         align="center"
                         width="150">
          <template slot-scope="scope">
            {{scope.row.name}}
          </template>
        </el-table-column>
        <el-table-column label="菜单ID"
                         prop="id"
                         resizable
                         align="center"
                         width="250">
          <template slot-scope="scope">
            {{scope.row.id}}
          </template>
        </el-table-column>
       <el-table-column label="地址"
                        prop="url"
                        align="center"
                        resizable
                        min-width="300">
         <template slot-scope="scope">
           {{scope.row.url}}
         </template>
       </el-table-column>
        <el-table-column  fixed="right"
                          label="操作"
                          width="150"
                          align="center">
          <template slot-scope="scope">
            <el-button @click="deleteRow(scope.row)" type="text" size="small">删除</el-button>
            <el-button @click.native.prevent="updateRow(scope.$index,list)"
                       type="text"
                       size="small">
              修改
            </el-button>
          </template>

        </el-table-column>
      </el-table>

    </div>
  </el-row>
</div>
</template>

<script>
  export default {
    name: 'menuSetting',
    data(){
      return{
        Menu:{
          id:'',
          parentId:'',
          name:'',
          url:''

        },
        spanArr:[],
        pos:0,
        menuList:[],
        list:'',
        listLoading:false,
        menuList:[
          {value:0,label:'一级菜单'},
          {value:1,label:'二级菜单-我要学习'},
          {value:2,label:'二级菜单-关于我们'},
          {value:3,label:'二级菜单-个人中心'}
        ]
      }
    },
    created(){
      this.initData();
      this.getSpanArr()
    },
    methods:{
      initData(){
          this.list=[
            {MainName:'我要学习',parentId:0,url: 'hai.com',id:1001},
            {MainName:'我要学习',name:'精选VEEC',parentId:1001,url:'https://mapp.sae.tdk.com/VECC/Page/VeecHistory',id:1002},
            {MainName:'我要学习',name:'部门专训',parentId:1001,url:'https://mapp.sae.tdk.com/VECC/Page/trainingDepartmental',id:1003},
            {MainName:'关于我们',parentId:0,url:'hai.com',id:1004},
            {MainName:'关于我们',name:'关于VECC',parentId:1004,url:'https://mapp.sae.tdk.com/VECC/Page/AboutVecec',id:1005},
            {MainName:'关于我们',name:'陪伴活动',parentId:1004,url:'https://mapp.sae.tdk.com/VECC/Page/trainingWithAction',id:1006},
            {MainName:'关于我们',name:'陪伴软文',parentId:1004,url:'https://mapp.sae.tdk.com/Vecc/Page/trainingSoftPaper',id:1007},
            {MainName:'关于我们',name:'成为V客',parentId:1004,url:'https://mapp.sae.tdk.com/Vecc/Page/BeComeVer',id:1008}
          ]
      },
      objectSpanMethod({row,column,rowIndex,columnIndex}){
        if(columnIndex === 0) {
          const _row=this.spanArr[rowIndex];
          const _col =_row > 0?1:0;
          return {
            rowspan:_row,
              colspan:_col
          }
        }

      },
      deleteRow(index,data) {

      },
      updateRow(index,data){

      },
      getSpanArr(){
        for(let i=0;i<this.list.length;i++){
          if(i === 0){
            this.spanArr.push(1);
            this.pos=0;
          }else{
            if(this.list[i].MainName === this.list[i-1].MainName){
              this.spanArr[this.pos]+=1;
              this.spanArr.push(0);
            }else{
              this.spanArr.push(1);
              this.pos=i;
            }
          }
        }
      }
    }
  }
</script>

<style scoped>
  .layout-1{
    background:#FFFFFF;
    border:1px solid #D3D3D3;
    border-radius:6px;
    height:350px;
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
  .el-select{
    position:absolute;
    left:0;
  }
  .el-form{
    margin-top:20px;
    margin-left:35px;
  }
  .el-input{
    width:460px;
    position:absolute;
    left:0;
  }
  .table-container{
    background:#FFFFFF;
    border:1px solid #D3D3D3;
    border-radius:6px;
    height:380px;
    width:600px;
    margin-top:30px;
    margin-left:40px;
    margin-bottom:30px;
  }
  .el-form{
    margin-top:20px;
    margin-left:35px;
  }
</style>
