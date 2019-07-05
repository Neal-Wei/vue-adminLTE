<template>
    <el-container>
        <el-scrollbar>
            <nav-menu :open="isCollapse"></nav-menu>
        </el-scrollbar>
        <el-container>
            <el-header>
                <el-col :span="6">
                    <div class="tools">
				    	<i :class="isCollapse? 'el-icon-s-unfold' : 'el-icon-s-fold'" @click.prevent="fold"></i>
				    </div>
                </el-col>
                <el-col :span="18" style="text-align:right;">
                    <el-dropdown>
                        <i class="el-icon-setting" style="margin-right: 15px"></i>
                        <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item>查看</el-dropdown-item>
                        <el-dropdown-item>新增</el-dropdown-item>
                        <el-dropdown-item>删除</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                    <span>王小虎</span>
                </el-col>
            </el-header>
            <el-main>
                <div class="main-container">
                    <transition name="fade" mode="out-in">
                        <keep-alive>
                            <router-view></router-view>
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
    data(){
        return{
            isCollapse:false
        }
    },
    components:{
        NavMenu
    },
    methods:{
        fold:function(){
            this.isCollapse = !this.isCollapse;
        }
        
    }

}
</script>

<style lang="scss">
.el-container{
    height: 100%;
    .el-scrollbar{
        height:100%;
        background-color:rgb(80, 93, 107);
        .el-scrollbar__wrap{
            overflow-y: scroll!important;
            overflow-x: hidden!important;
        }
    }
    .el-header {
        background-color:#89c6cd;
        color: #333;
        line-height: 60px;
        .tools i{
            cursor: pointer;
            font-size: 22px;
        }
        .el-dropdown{
            display: inline;
            cursor: pointer;
        }
    }
    .el-main{
        .main-container{
            border-radius: 4px;
            padding: 15px;
            background-color: #fff;
        }
    }
}
</style>