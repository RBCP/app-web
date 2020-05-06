<template>
<div class="app-container">
  <el-row :gutter="24">
    <div class="layout-1">
      <div class="layout-title">添加菜单</div>
      <el-form :model="Menu"  label-width="100px" >
        <el-form-item label="菜单级别">
          <el-select v-model="Menu.parentId" placeholder="请选择">
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
          <el-button type="primary" size="small" style="position:absolute;left:130px;" @click="Add">添加</el-button>
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
            <el-button @click="deleteRow(scope.$index,scope.row)" type="text" size="small">删除</el-button>
            <el-button @click.native.prevent="updateRow(scope.$index,scope.row)"
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
  import {getMenuList,addMenu,deleteMenu} from '@/api/features'
  export default {
    name: 'menuSetting',
    data(){
      return{
        Menu:{
          userName:this.$store.getters.userId,
          password:this.$store.getters.password,
          parentId:'',
          name:'',
          url:''

        },
        spanArr:[],
        pos:0,
        list:[],
        listLoading:false,
        menuList:[
          {value:0,label:'一级菜单'},
        ]
      }
    },
    created(){
      this.getList();
      //this.getSpanArr()
    },
    methods:{
      getList(){
        getMenuList().then(response=>{
          let data=response.data.data;
          for(let i=0;i<data.length;i++){
            let item={'MainName':data[i].name,'name':'','id':data[i].id,'url':data[i].url};
            this.list.push(item);
            let item2={value:data[i].id,label:'二级菜单-'+data[i].name}
            this.menuList.push(item2);
            let menuList=data[i].menuList;
            for(let j=0;j<menuList.length;j++){
              let item1={'MainName':'','name':menuList[j].name,'id':menuList[j].id,'url':menuList[j].url}
              this.list.push(item1);
            }
          }
        })
      },
      Add(){
        addMenu(this.Menu).then(response=>{
          this.$message({
            type:'success',
            message:response.data.data
          })
        })
        this.getList();
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

          this.$confirm('是否删除该选项','Waring',{
            confirmButtonText:'确定',
            cancelButtonText:'取消',
            warn:true
          }).then(() =>{
            deleteMenu(data).then(response=>{
              this.$message({
                type:'success',
                message:response.data.data
              })
            })
          })
        this.getList();
      },
      updateRow(index,data){
        console.log(data);
          this.$router.push({
            path:'/features/updateMenu',
            query:{
              id:data.id
            }
          });
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
    margin-left:30px;
    margin-bottom:30px;
  }
  .el-form{
    margin-top:20px;
    margin-left:35px;
  }
</style>
