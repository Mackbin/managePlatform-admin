<template>
  <div>
    <div class="container query_info">
      <div class="form-box">
        <el-form :inline="true" status-icon ref="contractData" label-width="100px">
          <el-form-item label="卡种名称：">
            <el-input width="100px"></el-input>
          </el-form-item>
          <el-form-item label="卡种内别：">
            <el-input width="100px"></el-input>
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
              <el-date-picker type="date" placeholder="开始时间" v-model="form.date1"></el-date-picker>
            </el-form-item>
            <el-form-item>-</el-form-item>
            <el-form-item>
              <el-date-picker v-model="form.date" type="date" placeholder="结束时间"></el-date-picker>
            </el-form-item>
          </div>
          </el-form>
        </div>
          <el-from-item>
              <span class="">卡图片上传</span>
            <div class="upload_img">
              <el-upload
                class="upload-case"
                action="https://jsonplaceholder.typicode.com/posts/"
                :on-preview="handlePreview"
                :on-remove="handleRemove"
                :file-list="fileList2"
                list-type="picture"
              >
                <el-button size="small" class="upload_btn" type="primary">点击上传</el-button>
                <div slot="tip" class="el-upload__tip upload_btn">只能上传jpg/png文件，且不超过500kb</div>
              </el-upload>
            </div>
          </el-from-item>
        
        <content-info></content-info>
      </div>
    
  </div>
</template>

<script>
import contentInfo from "@/views/page/displayedCard/content_info/content_info";

export default {
  name: "baseform",
  components: {
    contentInfo
  },
  data() {
    return {
      options: [
        {
          value: "guangdong",
          label: "广东省",
          children: [
            {
              value: "guangzhou",
              label: "广州市",
              children: [
                {
                  value: "tianhe",
                  label: "天河区"
                },
                {
                  value: "haizhu",
                  label: "海珠区"
                }
              ]
            },
            {
              value: "dongguan",
              label: "东莞市",
              children: [
                {
                  value: "changan",
                  label: "长安镇"
                },
                {
                  value: "humen",
                  label: "虎门镇"
                }
              ]
            }
          ]
        },
        {
          value: "hunan",
          label: "湖南省",
          children: [
            {
              value: "changsha",
              label: "长沙市",
              children: [
                {
                  value: "yuelu",
                  label: "岳麓区"
                }
              ]
            }
          ]
        }
      ],
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: true,
        type: ["步步高"],
        resource: "小天才",
        desc: "",
        options: []
      }
    };
  },
  methods: {
    onSubmit() {
      this.$message.success("提交成功！");
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    }
  }
};
</script>

<style lang="less" scoped>
.container{
    padding: 15px;
    .upload_img{
        padding: 15px;
        width: auto;
        height: auto;
        border: 1px  dashed #000;
        .upload-case{
            width: 500px;
        }
    }
}
</style>
