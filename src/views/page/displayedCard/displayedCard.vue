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
          <!-- 新增 -->
          <router-link :to="{path:'/addCard'}">
            <el-button class="el-button el-button--small gap" type="primary">新增</el-button>
          </router-link>
          <el-button class="el-button el-button--small gap" @click="update" type="success" >修改</el-button>
          <el-dialog
              title="修改机构"
              :visible.sync="dialogVisible1"
              width="600px"
              >
              <el-form label-width="100px">
                <el-form-item label="机构名称：">
                  <el-input></el-input>
                </el-form-item>
                <el-form-item label="机构级别：">
                  <el-input></el-input>
                </el-form-item>
                <el-form-item label="机构类别：">
                  <el-input></el-input>
                </el-form-item>
                <el-form-item label="机构描述：">
                  <el-input></el-input>
                </el-form-item>
                <el-form-item label="机构地区：">
                  <el-input></el-input>
                </el-form-item>
                <el-form-item label="角色：">
                  <el-checkbox-group v-model="checkList">
                        <el-checkbox label="管理员"></el-checkbox>
                        <el-checkbox label="普通人员"></el-checkbox>
                  </el-checkbox-group>
                </el-form-item>
              </el-form>
              <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible1 = false">取 消</el-button>
                <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
              </span>
          </el-dialog>
          <!-- 上架 -->
          <el-button class="el-button el-button--small gap"  type="danger">上架</el-button>

          <el-button class="el-button el-button--small gap" type="warning">下架</el-button>
      </el-row>
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
          <el-table-column prop="cardImg" label="卡版面图片" width="120">
          </el-table-column>
      </el-table>
        <div class="table_pagination" v-show="tableDataTotal">
            <el-pagination @current-change="queryList" background layout="prev, pager, next" :total="tableDataTotal"></el-pagination>
        </div>
      </el-main>
  </el-container>
   </div>
</template>

<script type="text">
import { promptMessage } from '@/utils/publicFunction'

export default {
   name: '',
   data() {
     const item = {
        
      };
       return {
         tableDataTotal: 6,
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
        tableData: [{
          date: '2016-05-03',
          cardname: '昆仑银行',
          cardNumber: 'KLYH0012',
          cardNumber_info: '007110008',
          cardImg: '卡片',
          cardSeriesnumber: '0012698463',
          address: '昆仑'
        }, {
          cardname: '昆仑银行',
          cardNumber: 'KLYH0012',
          cardNumber_info: '007110008',
          cardImg: '卡片',
          cardSeriesnumber: '0012698463',
          address: '昆仑'
        }, {
          cardname: '昆仑银行',
          cardNumber: 'KLYH0012',
          cardNumber_info: '007110008',
          cardImg: '卡片',
          cardSeriesnumber: '0012698463',
          address: '昆仑'
        }],
        dialogVisible: false,
        checkList: ['选中且禁用','复选框 A'],
        dialogVisible: false,
        dialogVisible1: false,
        multipleSelection: []
      }
   },
   methods: {
      update() {
       if (this.multipleSelection.length === 1){
         console.log(this.multipleSelection.length);
           this.dialogVisible1 = true;
       } else {
          promptMessage(this, '选择一条信息!', '提示');
       }
     },
     handleSelectionChange(val) {
       if (val && val.length > 0) {
          this.multipleSelection = val;
       } else {
         this.multipleSelection = [];
       }
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
      .table_pagination{
        float: right;
      }
}
</style>
