<template>
    <div class="main">
        <div class="router-main-grow">
            <div class="placeholder">
                <div class='spanButton' v-show='editableTabs.length > 0'>
                    <div class="buttonLeft" @click="offsetMove(-1)"></div>
                    <el-scrollbar ref="scrollPane" wrap-class="scrollbar-wrapper" style="width:100%">
                        <!-- <scroll-pane ref="scrollPane" class="tags-view-wrapper" id="123"> -->
                            <router-link
                                v-for="tag in editableTabs"
                                ref="tag"
                                :class="isActive(tag)?'tagActive':''"
                                :to="{ path: tag.path, query: tag.query, fullPath: tag.fullPath }"
                                :key="tag.path"
                                tag="span"
                                class="tags-view-item"
                                @click.middle.native="closeSelectedTag(tag)"
                                @contextmenu.prevent.native="openMenu(tag,$event)">
                                <!-- {{ generateTitle(tag.title) }} -->
                                {{tag.title}}
                                <i class="el-icon-close" @click.prevent.stop="closeSelectedTag(tag)" />
                            </router-link>
                        <!-- </scroll-pane> -->
                    </el-scrollbar>
                    <div class='buttonRight' @click="offsetMove(1)"></div>
                </div>
                <div class="router-main-white">
                    <div>
                        <!-- <keep-alive> -->
                        <transition name="fade-transform" mode="out-in">
                            <router-view />
                        </transition>
                        <!-- </keep-alive> -->
                    </div>
                </div>

            </div>
            <div class="copyright">Copyright 2018 版权所有 昆仑银行 | 客服热线 95379 | 建议使用IE10.0以上浏览</div>
        </div>

    </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'
import ScrollPane from '@/components/ScrollPane'
export default {
    data() {
        return {
            // editableTabsValue: '2',
            // editableTabs: [],
            tabIndex: 2,
            count: 0
        }
    },
    components: { ScrollPane },
    computed: {
        ...mapGetters([
            'editableTabsArr', 'editableTabsValue'
        ]),
        ...mapState({}),
        editableTabs() {
            return this.editableTabsArr
        }
    },
    methods: {
        offsetMove(x) {
            let scrollPaneWid = this.$refs.scrollPane.$el.offsetWidth / 2
            this.count = 1

            if (this.$refs.tag) {
                let len = this.$refs.tag.length
                let arr = this.$refs.tag
                let widthTotal = 0
                for (let index = 0; index < len; index++) {
                    let offsetWid = arr[index].$el.offsetWidth
                    if (offsetWid) {
                        widthTotal += parseFloat(offsetWid)
                    }
                }
                let offsetW = this.$refs.scrollPane.$el.firstChild.style.marginLeft || '0'
                let w = parseFloat(widthTotal) - Math.abs(parseFloat(offsetW))
                if (parseFloat(scrollPaneWid) < w && w > 0 && x === -1) {
                    this.$refs.scrollPane.$el.firstChild.style.marginLeft = x * scrollPaneWid + parseFloat(offsetW) + 'px'
                }
                if (x === 1) {
                    if (Math.abs(parseFloat(offsetW)) >= parseFloat(scrollPaneWid)) {
                        this.$refs.scrollPane.$el.firstChild.style.marginLeft = x * scrollPaneWid + parseFloat(offsetW) + 'px'
                    }
                }
            }
        },
        isActive(route) {
            return route.path === this.$route.path
        },
        tabClick(val) {
            this.$router.push(this.editableTabsArr[val.name].path)
            console.log(val.name)
        },
        closeSelectedTag(view) {
            let nextTab = {}
            this.editableTabsArr.forEach((item, index) => {
                if (item.path === view.path) {
                    nextTab = this.editableTabsArr[index + 1] || this.editableTabsArr[index - 1]
                    this.editableTabsArr.splice(index, 1)

                    sessionStorage.setItem('editableTabsArr', JSON.stringify(this.editableTabsArr))
                }
            })
            if (nextTab) {
                this.$router.push(nextTab.path)
            } else {
                this.$router.push('/dashboard')
            }
        }
        // openMenu(tag, e) {
        //     const menuMinWidth = 105
        //     const offsetLeft = this.$el.getBoundingClientRect().left // container margin left
        //     const offsetWidth = this.$el.offsetWidth // container width
        //     const maxLeft = offsetWidth - menuMinWidth // left boundary
        //     const left = e.clientX - offsetLeft + 15 // 15: margin right

        //     if (left > maxLeft) {
        //         this.left = maxLeft
        //     } else {
        //         this.left = left
        //     }
        //     this.top = e.clientY

        //     this.visible = true
        //     this.selectedTag = tag
        // },
        // handleTabsEdit(targetName, action) {
        //     console.log(targetName)
        //     console.log(action)
        //     if (action === 'add') {
        //         let newTabName = ++this.tabIndex + '';
        //         this.editableTabs.push({
        //             title: 'New Tab',
        //             name: newTabName,
        //             content: 'New Tab content'
        //         });
        //         this.editableTabsValue.name = newTabName;
        //     }
        //     if (action === 'remove') {
        //         let tabs = this.editableTabs;
        //         let activeName = this.editableTabsValue.name;
        //         if (activeName === targetName) {
        //             tabs.forEach((tab, index) => {
        //                 if (tab.name === targetName) {
        //                     let nextTab = tabs[index + 1] || tabs[index - 1];
        //                     if (nextTab) {
        //                         activeName = nextTab.name;
        //                     }
        //                 }
        //             });
        //         }

        //         this.editableTabsValue.name = activeName;
        //         this.editableTabs = tabs.filter(tab => tab.name !== targetName);
        //     } else {

        //     }
        // }
    }
}
</script>

<style lang="less">
.main {
    min-height: calc(100vh - 64px);
    .router-main-grow {
        position: relative;
        background: #F0F2F5;
        min-height: calc(100vh - 118px + 54px);
        .placeholder {
            min-height: calc(100vh - 178px + 54px);
            .router-main-white{
                padding: 15px;
                .router-main-content{
                    background-color: #fff;
                    border-radius: 3px;
                    padding: 25px;
                }
            }
        }
        .copyright {
            width: 100%;
            height: 60px;
            line-height: 60px;
            text-align: center;
            font-size: 12px;
            color: rgba(0, 0, 0, 0.45);
        }
    }
    .spanButton{
        height: 35px;
        background: #fff;
        border-top: 1px solid #ccc;
        padding:5px 30px;
        &>div{
            display: inline-block;
        }
        .buttonLeft {
            position: absolute;
            left: 0;
            top: 12px;
            border-right:13px solid #999 ;
            border-bottom: 10px solid transparent;
            border-top: 10px solid transparent;
            border-left: 10px solid transparent;
            cursor: pointer;
        }
        .buttonRight {
            position: absolute;
            right: 0;
            top: 12px;
            border-right: 10px solid transparent;
            border-bottom: 10px solid transparent;
            border-top: 10px solid transparent;
            border-left: 13px solid #999;
            cursor: pointer;
        }
        .el-scrollbar{
            .el-scrollbar__wrap{
                width: 10000px;
                transition: .3s linear;
            }
            span{
                display: inline-block;
                position: relative;
                cursor: pointer;
                height: 26px;
                line-height: 26px;
                border: 1px solid #d8dce5;
                color: #495060;
                background: #fff;
                padding: 0 8px;
                font-size: 12px;
                margin-left: 5px;
                margin-top: 4px;
            }
            .tagActive {
                color: #fff;
                background: #409EFF;
            }
            .el-icon-close:hover{
                color: #495060;
                background: #ccc;
                border-radius: 50%;
            }
        }

    }
    .el-scrollbar__view{
        height: 50px;
    }
}

</style>
