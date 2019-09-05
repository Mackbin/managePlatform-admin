<template>
   <div> <!-- 个人信息 -->
    <el-main class="query_info">
        <div class="info_main">
            <div class="left_info">
                <p class="info">个人信息</p>
                <img src="@/icons/logo.svg" >
            </div>
            <div class="right_info">
                <p>admin</p>
                <p>可可/管理员</p>
                <p>销售一部/销售经理</p>
                <p>性别：女</p>
                <p>邮箱：54461662@qq.com</p>
            </div>
        </div>
    </el-main>
   </div>
</template>

<script>
import { promptMessage } from '@/utils/publicFunction'
export default {
    name: '',
    data() {
        return {
        }
    },
    methods: {
    }

}
</script>

<style lang="less" scoped>
.query_info{
    height: 600px;
    .info_main{
    width: 500px;
    height: 300px;
    padding: 50px;
    margin: 50px auto;
    border: 2px solid #bbbb;
    border-radius: 8px;
    box-shadow: 10px 10px 5px #888888;
    p{
        padding: 5px;
    }
    img{
        margin-left: 10px;
    }
    .left_info{
        float: left;
        .info{
            margin-bottom: 10px;
        }
    }
    .right_info{
        margin-left: 150px ;
    }
}

}

</style>
