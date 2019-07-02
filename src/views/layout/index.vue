<template>
    <el-container style="height:100%;">
        <el-scrollbar style="overflow:hidden;height:100%;background-color:rgb(80, 93, 107);">
            <el-aside width="200px" style="height:inherit">
                <nav-menu/>
            </el-aside>
        </el-scrollbar>
        <el-container>
            <el-header style="text-align: right; font-size: 12px">
                <el-dropdown>
                    <i class="el-icon-setting" style="margin-right: 15px"></i>
                    <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>查看</el-dropdown-item>
                    <el-dropdown-item>新增</el-dropdown-item>
                    <el-dropdown-item>删除</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
                <span>王小虎</span>
            </el-header>
            <el-main>
                <div class="main-container">
                    <transition name="fade" mode="out-in" appear>
                        <keep-alive>
                            <router-view />
                        </keep-alive>
                    </transition>
                </div>
            </el-main>
        </el-container>
    </el-container>
</template>
<script>
import NavMenu from './NavMenu'

export default {
    name: 'Layout',
    components:{
        NavMenu
    }

}
</script>

<style lang="scss" scope>
.el-scrollbar .el-scrollbar__wrap{overflow-x: hidden;}
.el-scrollbar .el-scrollbar__bar .el-scrollbar__thumb{background-color: transparent;}
.el-header {
    background-color:rgba($color: #e56048, $alpha:0.5);
    color: #333;
    line-height: 60px;
    .el-dropdown{
        display: inline;
        cursor: pointer;
    }
}
.el-main{
    // background-color: #eee;
    .main-container{
        border-radius: 4px;
        padding: 15px;
        background-color: #fff;
        // box-shadow: 0 5px 6px rgba(0, 0, 0, 0.7)
    }
}
</style>