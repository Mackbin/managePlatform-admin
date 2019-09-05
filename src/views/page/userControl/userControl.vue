<template>
   <div>
    <el-main class="query_info">
        <el-form  :inline="true" status-icon  ref="contractData" label-width="100px" >
                <el-form-item label="登录名称：">
                    <el-input width="100px"></el-input>
                </el-form-item>
                <el-form-item label="手机号码：">
                    <el-input  width="100px"></el-input>
                </el-form-item>
                <el-form-item label="活动区域">
                  <el-select v-model="form.region" placeholder="请选择活动区域">
                    <el-option label="所有" value="所有"></el-option>
                    <el-option label="正常" value="正常"></el-option>
                    <el-option label="停用" value="停用"></el-option>
                  </el-select>
                </el-form-item>
                <div class="inline_block">
                    <el-form-item label="创建时间：">
                        <el-date-picker  type="date" placeholder="开始时间" v-model="form.date1" ></el-date-picker>
                    </el-form-item>
                    <el-form-item>-</el-form-item>
                    <el-form-item >
                        <el-date-picker v-model="form.date" type="date" placeholder="结束时间"></el-date-picker>
                    </el-form-item>
                    <el-form-item class="table_button">
                        <el-button type="success" round class="el-button el-button--small">查询</el-button>
                        <el-button type="warning" round class="el-button el-button--small">重置</el-button>
                    </el-form-item>
                </div>
        </el-form>
    </el-main>
  <el-container>
    <el-main class="query_info">
       <el-row class="button_list">
         <!-- 添加 -->
          <el-button type="primary"  @click="dialogVisible = true" class="el-button el-button--primary el-button--small">添加</el-button>
          <el-dialog
              title="添加机构"
              :visible.sync="dialogVisible"
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
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
              </span>
          </el-dialog>
          <!-- 修改 -->
          <el-button class="el-button el-button--small gap" @click="update" type="success">修改</el-button>
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
          <!-- 删除 -->
          <el-button class="el-button el-button--small gap" @click="delete_info" type="danger">删除</el-button>
          <el-button class="el-button el-button--small gap" type="warning">移动设备解绑</el-button>
      </el-row>
      <el-table :data="tableData" style="width: 100%" :default-sort = "{prop: 'date', order: 'descending'}" @selection-change="handleSelectionChange">
        <el-table-column type="selection" width="40" align='center'></el-table-column>
        <el-table-column prop="date" label="用户ID" >
        </el-table-column>
        <el-table-column prop="name" label="登录名称" >
        </el-table-column>
        <el-table-column prop="address" label="用户名称">
        </el-table-column>
        <el-table-column prop="address" label="部门">
        </el-table-column>
        <el-table-column prop="address" label="手机" width="140">
        </el-table-column>
        <el-table-column prop="address" label="用户状态">
        </el-table-column>
        <el-table-column prop="address" sortable label="创建时间" width="120">
        </el-table-column>
        <el-table-column prop="address" label="操作">
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
       return {
         tableDataTotal: 3,
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
        tableData:[{
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }],
        dialogVisible: false,
        dialogVisible1: false,
        checkList: ['选中且禁用','复选框 A'],
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
     },
      handleClose(done) {
      },
      delete_info() {
        this.$confirm('确认删除？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
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
    }
    .table_button{
      margin-right: 10px;
    }
    .button_list{
      margin-left: 20px;
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
