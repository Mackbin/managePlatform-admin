<template>
   <div> <!-- 业绩报表 -->
    <el-main class="query_info">
        <el-form  ref="form" :model="form" label-width="100px"  :inline="true">
                <el-form-item label="进件人：">
                    <el-input></el-input>
                </el-form-item>
                <el-form-item label="进件号：">
                    <el-input></el-input>
                </el-form-item>
                <el-form-item label="状态">
                  <el-select v-model="form.region" placeholder="状态">
                    <el-option label="通过" value="通过"></el-option>
                    <el-option label="拒绝" value="拒绝"></el-option>
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
  <div class="table_content query_info">
    <!-- <el-main class="query_info"> -->
       <!-- <el-row class="button_list"> -->
          <el-tabs type="border-card">
            <el-tab-pane label="个人件">
              <el-table :data="tableData" style="width: 100%" :default-sort = "{prop: 'date', order: 'descending'}" @selection-change="handleSelectionChange">
                  <el-table-column prop="cardname" label="进件人" >
                  </el-table-column>
                  <el-table-column prop="cardNumber" label="进件时间" >
                  </el-table-column>
                  <el-table-column prop="cardNumber_info" label="进件类型">
                  </el-table-column>
                  <el-table-column prop="cardSeriesnumber" label="业务员id">
                  </el-table-column>
                  <el-table-column prop="address" label="进件状态">
                  </el-table-column>
                  <el-table-column prop="address" label="详情">
                      <template slot-scope="scope">
                        <el-button
                        size="mini"
                        @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                    </template>
                  </el-table-column>
              </el-table>
            </el-tab-pane>
            <el-tab-pane label="团办件">
              <el-table :data="tableData" style="width: 100%" :default-sort = "{prop: 'date', order: 'descending'}" @selection-change="handleSelectionChange">
                  <el-table-column prop="cardname" label="进件人" >
                  </el-table-column>
                  <el-table-column prop="cardNumber" label="进件时间" >
                  </el-table-column>
                  <el-table-column prop="cardNumber_info" label="进件类型">
                  </el-table-column>
                  <el-table-column prop="cardSeriesnumber" label="业务员id">
                  </el-table-column>
                  <el-table-column prop="address" label="进件状态">
                  </el-table-column>
                  <el-table-column prop="address" label="详情">
                      <template slot-scope="scope">
                        <el-button
                        size="mini"
                        @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                    </template>
                  </el-table-column>
              </el-table>
            </el-tab-pane>
          </el-tabs>
      <!-- </el-row> -->
    <!-- </el-main> -->
            <div class="table_pagination" v-show="tableDataTotal">
                <el-pagination @current-change="queryList" background layout="prev, pager, next" :total= 'tableDataTotal'></el-pagination>
            </div>
        </div>
        <el-dialog title="详情"  :visible.sync="dialogVisible" width="600px">
              <el-form label-width="100px">
                <el-form-item label="进件人：">
                  <el-input></el-input>
                </el-form-item>
                <el-form-item label="进件时间：">
                  <el-input></el-input>
                </el-form-item>
                <el-form-item label="进件类型：">
                  <el-input></el-input>
                </el-form-item>
                <el-form-item label="业务员id：">
                  <el-input></el-input>
                </el-form-item>
                <el-form-item label="进件状态：">
                  <el-input></el-input>
                </el-form-item>
              </el-form>
              <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="modificationSubmin">确 定</el-button>
              </span>
        </el-dialog>
   </div>
</template>

<script type="text">
import { promptMessage } from '@/utils/publicFunction'
export default {
    name: '',
    data() {
        return {
            dialogVisible: false,
            tableDataTotal: 3,
            multipleSelection: [],
            form: {
                username: '张三',
                userNum: '001',
                userNum1: '001',
                userNum2: '001',
                userNum3: '001',
                userNum4: '001'
            },
            tableData: [{
                username: '李四',
                userNum: '002',
                userNum1: '002',
                userNum2: '002',
                userNum3: '002',
                userNum4: '002'
            }, {
                username: '王五',
                userNum: '003',
                userNum1: '003',
                userNum2: '003',
                userNum3: '003',
                userNum4: '003'
            }]
        }
    },
    methods: {
        handleEdit(index, row) {
            console.log(index, row);
            this.dialogVisible = true;
        },
        queryList() {
            // 列表查询
        },
        modification() {
            if (this.multipleSelection.length === 1) {
                this.dialogVisible = true
            } else {
                promptMessage(this, '请选择一条数据！', '提示')
            }
        },
        modificationSubmin() {
            this.dialogVisible = true
        },
        handleSelectionChange(val) { // 选中表格执行 selection为选中数据
            if (val && val.length > 0) {
                this.multipleSelection = val;
                console.log(val)
            } else {
                this.multipleSelection = []
            }
        }
    }

}
</script>

<style lang="less">

</style>
