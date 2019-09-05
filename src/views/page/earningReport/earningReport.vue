<template>
   <div> <!-- 业绩报表 -->
    <el-main class="query_info">
        <el-form  ref="form" :model="form" label-width="100px"  :inline="true">
                <el-form-item label="姓名：">
                    <el-input></el-input>
                </el-form-item>
                <el-form-item label="级别：">
                    <el-input></el-input>
                </el-form-item>
                <!-- <el-form-item label="活动区域">
                  <el-select v-model="form.region" placeholder="请选择活动区域">
                    <el-option label="所有" value="所有"></el-option>
                    <el-option label="正常" value="正常"></el-option>
                    <el-option label="停用" value="停用"></el-option>
                  </el-select>
                </el-form-item> -->
                <el-form-item class="table_button">
                        <el-button type="success" round class="el-button el-button--small">查询</el-button>
                        <el-button type="warning" round class="el-button el-button--small">重置</el-button>
                    </el-form-item>
                <!-- <div class="inline_block">
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
                </div> -->

        </el-form>
    </el-main>
  <div class="table_content query_info">
      <div class="button_list">
            <ul>
                <li class="el-button el-button--primary el-button--small" @click="details">详情</li>
            </ul>
        </div>
            <el-table :data="tableData" style="width: 100%" :default-sort = "{prop: 'date', order: 'descending'}" @selection-change="handleSelectionChange">
                <el-table-column type="selection" width="40" align='center'></el-table-column>
                <el-table-column prop="username" label="姓名" align='center'></el-table-column>
                <el-table-column prop="userNum" label="级别" align='center'></el-table-column>
                <el-table-column prop="userNum1" label="通过量" align='center'></el-table-column>
                <el-table-column prop="userNum2" label="拒绝量" align='center'></el-table-column>
                <el-table-column prop="userNum3" label="激活量" align='center'></el-table-column>
                <el-table-column prop="userNum4" label="首刷量" align='center'></el-table-column>
            </el-table>
            <div class="table_pagination" v-show="tableDataTotal">
                <el-pagination @current-change="queryList" background layout="prev, pager, next" :total= 'tableDataTotal'></el-pagination>
            </div>
        </div>
        <el-dialog title="修改机构"  :visible.sync="dialogVisible" width="600px">
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
              </el-form>
              <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="detailsSubmin">确 定</el-button>
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
            multipleSelection: {},
            form: {
                username: '张三',
                userNum: '001',
                userNum1: '002',
                userNum2: '003',
                userNum3: '004',
                userNum4: '005'
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
        queryList() {
            // 列表查询
        },
        details() {
            if (this.multipleSelection.length === 1) {
                this.dialogVisible = true
            } else {
                promptMessage(this, '请选择一条数据！', '提示')
            }
        },
        detailsSubmin() {

        },
        handleSelectionChange(val) { // 选中表格执行 selection为选中数据
            if (val && val.length > 0) {
                this.multipleSelection = val
            } else {
                this.multipleSelection = {}
            }
        }
    }

}
</script>

<style lang="less">

</style>
