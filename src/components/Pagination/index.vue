<template>
    <div class="pagelist">
      <div class="left-item">
      <span class="total">共{{pageConfig.total}}条
      </span>
      <span class="current">
        {{currentPage}}/{{pageTotal}}页
      </span>
      <span class="pageSize">
        <el-select v-model="pageConfig.pageSize" @change="changeSize">
          <el-option v-for="item in pageOptions"
                     :key="item.value"
                     :label="item.value"
                     :value="item.value">
          </el-option>
        </el-select>
      </span>
      </div>
      <div class="right-item">
      <span class="prev-next">
        <el-button size="small" @click="prePage" :disabled="currentPage===1" icon="el-icon-arrow-left"></el-button>
        <el-button size="small" style="display:inline-block" @click="nextPage" :disabled="currentPage===pageTotal" icon="el-icon-arrow-right"></el-button>
      </span>
      <span class="jump-text">跳转到</span>
      <span class="jump"><input v-model="DestinationPage"></input></span>
      <span><el-button size="small"  @click="jumpPage(DestinationPage)">GO</el-button></span>
      </div>
    </div>
</template>

<script>
    export default {
        props:{
          pageConfig:{
            type:Object,require:true,default(){
              return{
                pageSize:15,
                page:0,
                total:0,
                pageTotal:0
              }
            }
          }
        },
      data(){
        return{
          currentPage:1,
          DestinationPage:null,
          pageOptions:[
            {
              value:50,
              label:50
            },
            {
              value:100,
              label:100
            },
            {
              value:500,
              label:500
            }

          ]
        }
      },
      computed:{
          pageTotal(){
            const config=this.pageConfig
            if(config.pageTotal){
              return config.pageTotal
            }else{
              if(config.pageSize && config.total)
                return Math.ceil(config.total/config.pageSize)
              else{
                return 0
              }
            }
          }
      },
      created:function(){
        this.currentPage=this.pageConfig.page || 0
      },
      methods:{
          prePage(){
            this.currentPage-=1
            this.$emit('changeCurrentPage',this.currentPage)
          },
        nextPage(){
            this.currentPage+=1
            this.$emit('changeCurrentPage',this.currentPage)
        },
        jumpPage(id){
            this.currentPage=id;
            this.$emit('changeCurrentPage',this.currentPage)
        },
        changeSize(){
            this.$emit('changePageSize',this.pageConfig.pageSize)
        }
      }
    }
</script>

<style scoped>
  .pagelist{
    font-family:Arial,HelveticaNeue,sans-serif;
    font-size: 12px;
    color: #5A85DF;
    letter-spacing: 0.67px;
  }
  .pagelist span.total{
    display:inline-block;
    max-width:100px;
    height:17px;
    margin-right:13px;
  }
  .pagelist span.totalPage{
    display:inline-block;
    background: #FFFFFF;
    border: 1px solid #DEDEDE;
    border-radius: 3px;
  }
  .left-item{
    display:inline-block;
    float:left;
  }
  .right-item{
    display:inline-block;
  }
  .pagelist span.current{
    display:inline-block;
    max-width:100px;
    height:17px;
    margin-right:45px;
  }
  .pagelist span.prev-next{
    margin-right:31px;
  }
  .pagelist span.jump-text{
   width:39px;
    height:17px;
  }
  .pagelist span.jump{
    background: #FFFFFF;
    border: 1px solid #DADADA;
    border-radius: 2px;
    width:44px;
    height:30px;
  }
  input{
    width:44px;
    height:30px;
    background: #FFFFFF;
    border: 1px solid #DADADA;
    border-radius: 2px;
  }
   .el-input {
    background: #FFFFFF;
    border-radius: 3px;
    width: 80px !important;
    height: 34px;
  }
  .el-input__suffix{
    top:4px;
  }
  .el-button--small{
    padding:0;
    margin-left:0;
    background: #FFFFFF;
    border: 1px solid #DADADA;
    border-radius: 2px;
    width:44px;
    height:30px;
  }
  .el-select /deep/ .el-input {
    display: block;
    width: 80px !important;
  }
</style>
