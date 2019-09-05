<template>
  <div>
    
    <div>
        <my-tree class="organ_info" :data="theData" :name="menuName" :loading="loading" @getSubMenu="getSubMenu"></my-tree>
    </div>
    <el-dialog title="添加机构"  :visible.sync="dialogVisible" width="600px">
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
    <ul class="tree-menu">
      <li v-for="(item, index) in data" :key="index">
        <span @click="toggle(item, index)">
          <i :class="['icon', item.children && item.children.length ? folderIconList[index] : 'file-text', loading ? loadingIconList[index] : '']"></i>
          {{ item[name] || item.menuName }}
        </span>
        <tree-menu v-if="scope[index]" :data="item.children"></tree-menu>
      </li>
    </ul>
    
  </div>
</template>
 
<script>
import vueZtreeVue from '@/components/vue-ztree/vue-ztree.vue';

const myData = [
  {
    id: '1',
    menuName: '机构管理',
    menuCode: '10'
  },
  // {
  //   id: '2',
  //   menuName: '商品管理',
  //   menuCode: ''
  // },
  // {
  //   id: '3',
  //   menuName: '订单管理',
  //   menuCode: '30',
  //   children: [
  //     {
  //       menuName: '订单列表',
  //       menuCode: '31'
  //     },
  //     {
  //       menuName: '退货列表',
  //       menuCode: '32',
  //       children: []
  //     }
  //   ]
  // },
  // {
  //   id: '4',
  //   menuName: '商家管理',
  //   menuCode: '',
  //   children: []
  // }
];
 
const subMenuData1 = {
  parentId: '1',
  children: [
    {
      menuName: '用户管理',
      menuCode: '11'
    },
    {
      id: '12',
      menuName: '角色管理',
      menuCode: '12',
      children: [
        {
          menuName: '管理员',
          menuCode: '121'
        },
        {
          menuName: 'CEO',
          menuCode: '122'
        },
        {
          menuName: 'CFO',
          menuCode: '123'
        },
        {
          menuName: 'COO',
          menuCode: '124'
        },
        {
          menuName: '普通人',
          menuCode: '124'
        }
      ]
    },
    {
      menuName: '权限管理',
      menuCode: '13'
    }
  ]
};
 
const subMenuData2 = {
  parentId: '2',
  children: [
    {
      menuName: '商品一',
      menuCode: '21'
    },
    {
      id: '22',
      menuName: '商品二',
      menuCode: '22',
      children: [
        {
          menuName: '子类商品1',
          menuCode: '221'
        },
        {
          menuName: '子类商品2',
          menuCode: '222'
        }
      ]
    }
  ]
};
export default {
  components: {
    myTree
  },
  name: 'treeMenu',
  props: {
    data: Array,
    name: String,
    loading: Boolean,
    props: "someprops",
  },
  data () {
    return {
      folderIconList: [],
      loadingIconList: [],
      scope: {},
      isActive: false,
      vueZtree: true,
      theData: myData,
      menuName: 'menuName', // 显示菜单名称的属性
      loading: false,
      dialogVisible: false
    }
  },
  created () {
    this.data.forEach((item, index) => {
      if (item.children && item.children.length) {
        this.folderIconList[index] = 'folder';
      }
    });
  },
  methods: {
      clickfun() {
         this.$refs.icon.width = '10px';
       },
     //   鼠标移除
      mouseLeave(){
           this.isActive=null;
       },
      doTask (index) {
        this.$set(this.scope, index, !this.scope[index]);
        this.folderIconList[index] = this.scope[index] ? 'folder-open' : 'folder';
      },
      toggle (item, index) {
        console.log('toggle');
        this.loadingIconList = [];
  
        if (item.children && item.children.length) {
          this.doTask(index);
        } else {
          this.loadingIconList[index] = 'loading';
  
          this.$emit('getSubMenu', item, (subMenuList) => {
            if (subMenuList && subMenuList.length) {
              this.doTask(index);
            }
          });
        }
      },
      parentHandleclick(e) {
          console.log(e);
        },
        management() {
        this.dialogVisible = true;
      },
    vueZtree1() {
      this.vueZtree = !this.vueZtree;
      this.$options.methods.getSubMenu();
    },
    getSubMenu (menuItem, callback) {
      console.log(123);
      this.loading = true;
 
      if (menuItem.id === subMenuData1.parentId) {
        this.loading = false;
        menuItem.children = subMenuData1.children;
        callback(menuItem.children);
      }
 
      setTimeout(() => {
        if (menuItem.id === subMenuData2.parentId) {
          this.loading = false;
          menuItem.children = subMenuData2.children;
          callback(menuItem.children);
        }
      }, 2000);
    },
    modificationSubmin() {
            this.dialogVisible = true
        }
  }
}
</script>
 
<style scoped lang='less'>
.tree-menu {
  list-style: none;
  margin-left: 20px;
}
.tree-menu li {
  line-height: 2;
}
.tree-menu li span {
  cursor: default;
}
.icon {
  display: inline-block;
  width: 15px;
  height: 15px;
  background-repeat: no-repeat;
  vertical-align: -2px;
}
.icon.folder {
  background-image: url(../../assets/folder.png);
}
.icon.folder-open {
  background-image: url(../../assets/folder-open.png);
}
.icon.file-text {
  background-image: url(../../assets/file-text.png);
}
.icon.loading {
  background-image: url(../../assets/loading.gif);
  background-size: 15px;
}

</style>