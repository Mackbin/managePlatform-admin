<template>
    <div>
        <div class="crumbs">
            <h3>协议</h3>
          <div class="container">
              <quill-editor ref="myTextEditor" v-model="content" :options="editorOption"></quill-editor>
              <el-button class="editor-btn" type="primary" @click="submit">提交</el-button>
          </div>
        </div>
    </div>
</template>

<script>
    import 'quill/dist/quill.core.css';
    import 'quill/dist/quill.snow.css';
    import 'quill/dist/quill.bubble.css';
    import { quillEditor } from 'vue-quill-editor';
    export default {
        name: 'editor',
        data() {
            return {
                content: '',
                editorOption: {
                    placeholder: '请输入文档'
                }
            }
        },
        components: {
            quillEditor
        },
        methods: {
            onEditorChange({ editor, html, text }) {
                this.content = html;
            },
            submit(){
                console.log(this.content);
                this.$message.success('提交成功！');
            }
        }
    }
</script>
<style scoped lang='less'>
.crumbs{
  width: 100%;
  .editor-btn{
    margin-top: 20px;
    margin-left: 550px
  }
}
</style>