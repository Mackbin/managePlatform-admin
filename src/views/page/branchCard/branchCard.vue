<template>
   <div>
      <el-main class="query_info">
          <el-form  :inline="true" status-icon  ref="contractData" label-width="100px" >
                  <el-form-item label="卡种名称：">
                      <el-input width="100px"></el-input>
                  </el-form-item>
                  <el-form-item label="卡种类别：">
                      <el-input  width="100px"></el-input>
                  </el-form-item>
                  <el-form-item class="table_button">
                      <el-button type="success" round class="el-button el-button--small">查询</el-button>
                      <el-button type="warning" round class="el-button el-button--small">重置</el-button>
                  </el-form-item>
          </el-form>
      </el-main>
      <el-container>
    <el-main class="query_info">
       <el-row class="button_list">
          <el-tabs type="border-card">
            <el-tab-pane label="总行全上架卡种展示">
              <el-table :data="tableData" style="width: 100%" :default-sort = "{prop: 'date', order: 'descending'}" @selection-change="handleSelectionChange">
                  <!-- <el-table-column type="selection" width="40" align='center'></el-table-column> -->
                  <el-table-column prop="cardname" label="卡种名称" >
                  </el-table-column>
                  <el-table-column prop="cardNumber" label="卡种编号" >
                  </el-table-column>
                  <el-table-column prop="cardNumber_info" label="卡版面编号">
                  </el-table-column>
                  <el-table-column prop="cardSeriesnumber" label="卡种系列号">
                  </el-table-column>
                  <el-table-column prop="address" label="卡种类别">
                  </el-table-column>
                  <el-table-column prop="address" label="卡种描述">
                  </el-table-column>
                  <el-table-column prop="cardImg"  label="卡版面图片" width="120">
                  </el-table-column>
              </el-table>
            </el-tab-pane>
            <el-tab-pane label="分行卡种上架">
              <el-button class="el-button el-button--small gap"  type="danger">上架</el-button>
              <el-button class="el-button el-button--small gap" type="warning">下架</el-button>
              <el-table :data="tableData" style="width: 100%" :default-sort = "{prop: 'date', order: 'descending'}" @selection-change="handleSelectionChange">
                  <el-table-column type="selection" width="40" align='center'></el-table-column>
                  <el-table-column prop="cardname" label="卡种名称" >
                  </el-table-column>
                  <el-table-column prop="cardNumber" label="卡种编号" >
                  </el-table-column>
                  <el-table-column prop="cardNumber_info" label="卡版面编号">
                  </el-table-column>
                  <el-table-column prop="cardSeriesnumber" label="卡种系列号">
                  </el-table-column>
                  <el-table-column prop="address" label="卡种类别">
                  </el-table-column>
                  <el-table-column prop="address" label="卡种描述">
                  </el-table-column>
                  <el-table-column prop="cardImg"  label="卡版面图片" width="120">
                  </el-table-column>
              </el-table>
            </el-tab-pane>
            <el-tab-pane label="分行卡种下架">
              <el-button class="el-button el-button--small gap"  type="danger">上架</el-button>
              <el-button class="el-button el-button--small gap" type="warning">下架</el-button>
              <el-table :data="tableData" style="width: 100%" :default-sort = "{prop: 'date', order: 'descending'}" @selection-change="handleSelectionChange">
                  <el-table-column type="selection" width="40" align='center'></el-table-column>
                  <el-table-column prop="cardname" label="卡种名称" >
                  </el-table-column>
                  <el-table-column prop="cardNumber" label="卡种编号" >
                  </el-table-column>
                  <el-table-column prop="cardNumber_info" label="卡版面编号">
                  </el-table-column>
                  <el-table-column prop="cardSeriesnumber" label="卡种系列号">
                  </el-table-column>
                  <el-table-column prop="address" label="卡种类别">
                  </el-table-column>
                  <el-table-column prop="address" label="卡种描述">
                  </el-table-column>
                  <el-table-column prop="cardImg"  label="卡版面图片" width="120">
                  </el-table-column>
              </el-table>
            </el-tab-pane>
          </el-tabs>
      </el-row>
    </el-main>
  </el-container>
   </div>
</template>

<script type="text">
export default {
   name: '',
   data() {
     const item = {
        cardname: '昆仑银行',
        cardNumber: 'KLYH0012',
        cardNumber_info: '007110008',
        cardImg: '卡片',
        cardSeriesnumber: '0012698463',
        address: '昆仑'
      };
       return {
         form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        tableData: Array(10).fill(item),
        dialogVisible: false,
        checkList: ['选中且禁用','复选框 A'],
        dialogVisible: false
      }
   },
   methods: {
      handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      },
      handleSelectionChange() {
        
      }
    },
  components: {}
}
</script>

<style scoped lang="less">
  .query_info{
    margin-bottom:30px;
    background: #fff;
    border-radius: 6px;
    margin-top: 10px;
    box-shadow: 1px 1px 3px rgba(0,0,0,.2);
    .gap{
      margin-left: 10px;
    }
    .add{
      // width: 735px;
    }
    .table_button{
      margin-right: 10px;
    }
      .button_list{
        margin-left: 20px;
        .upload-demo{
          float: left;
        }
        .checkbox{
          margin-top: 15px;
          margin-left: 10px;
        }
      }
}
</style>
