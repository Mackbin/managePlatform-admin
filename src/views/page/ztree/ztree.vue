<template>
  <div>
    <div  class="organ">
    <h3>组织机构</h3>
      <router-link :to="{path:'/sectionManagement',query:{id:'001'}}">
        <span class="float el-icon-edit-outline"></span>
      </router-link>
    <span :class='["float el-icon-arrow-down",vueZtree ? "active" : "float el-icon-arrow-up"]'  @click = "vueZtree1"></span>
    </div>
    <div class="tree">
      <el-scrollbar wrap-class="scrollbar-wrapper"  style="height:100%">
        <el-tree class="tree_from"  node-key='id' ref="mychild" :data="data" highlight-current :default-expand-all="unfold" :props="defaultProps" v-show="unfold" @node-click="handleNodeClick"></el-tree>
      </el-scrollbar>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        vueZtree: true,
        unfold: true,
        data: [{
          id:'1',
          label: '昆仑银行',
          children: [{
            id:'2',
            label: '克拉玛依市分行',
            children: [{
              label: '克拉玛依市奎屯路支行',
            },{
              label: '克拉玛依市分行北京路支行',
            }]
          },{
            id:'3',
            label: '云南分行',
            children: [{
              label: '云南洱海支行'
            },{
              label: '克拉玛依市奎屯路支行'
            },{
              label: '克拉玛依市分行北京路支行'
            }]
          },{
            id:'4',
            label: '云南分行',
            children: [{
              label: '云南洱海支行'
            },{
              label: '克拉玛依市奎屯路支行'
            },{
              label: '克拉玛依市分行北京路支行'
            }]
          },{
            id:'5',
            label: '云南分行',
            children: [{
              label: '云南洱海支行'
            },{
              label: '克拉玛依市奎屯路支行'
            },{
              label: '克拉玛依市分行北京路支行'
            }]
          },{
            id:'6',
            label: '云南分行',
            children: [{
              label: '云南洱海支行'
            },{
              label: '克拉玛依市奎屯路支行'
            },{
              label: '克拉玛依市分行北京路支行'
            }]
          },{
            id:'7',
            label: '云南分行',
            children: [{
              label: '云南洱海支行'
            },{
              label: '克拉玛依市奎屯路支行'
            },{
              label: '克拉玛依市分行北京路支行'
            }]
          },{
            id:'8',
            label: '云南分行',
            children: [{
              label: '云南洱海支行'
            },{
              label: '克拉玛依市奎屯路支行'
            },{
              label: '克拉玛依市分行北京路支行'
            }]
          }]
        }],
        defaultProps: {
          children: 'children',
          label: 'label'
        }
      };
    },
    methods: {
      vueZtree1() {
        this.vueZtree = !this.vueZtree;
        for(let i=0; i<this.$refs.mychild.store._getAllNodes().length; i++){
           this.$refs.mychild.store._getAllNodes()[i].expanded = !this.$refs.mychild.store._getAllNodes()[i].expanded;
        }
      },
      handleNodeClick(data) {
        console.log('1' + data);
      }
      
    }
  };
</script>

<style lang="less">
.tree{
    width: 200px;
    height: 600px;
    .el-scrollbar__wrap {
      overflow: hidden;
    }
    .el-scrollbar__bar.is-horizontal>div {
      height: 30px;
      background: rgba(0,0,0,.3);
    }
  }
.organ{
  padding: 10px 0 0 10px;
  height: 30px;
  border-bottom: 1px solid silver;
  .float{
    float: right;
    margin-left: 15px;
    margin-top: -15px;
  }
}
.organ_info{
  padding: 5px 0 0 10px;
}
.tree_from{
  width: 200px;
  overflow: auto;
}
</style>
