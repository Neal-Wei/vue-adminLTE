<template>
    <el-container style="height:100%;">
        <el-scrollbar style="overflow:hidden;height:100%;background-color:rgb(80, 93, 107);">
            <el-aside width="200" style="height:inherit;">
                <!-- <nav-menu :open="isCollapse"/> -->
                <el-menu 
                    router
                    background-color="#505d6b"
                    text-color="#eee"
                    active-text-color="#fff"
                    :default-active="$route.path"
                    class="el-menu-vertical-demo"
                    :collapse="isCollapse"
                    >
                    <el-menu-item index="/home">
                        <i class="el-icon-s-home"></i>
                        <span slot="title">首页</span>
                    </el-menu-item>
                    <el-submenu index="2">
                        <template slot="title">
                            <i class="el-icon-message"></i>
                            <span slot="title">会员管理</span>
                        </template>
                        <el-menu-item index="/manage/memberintegral">会员积分</el-menu-item>
                        <el-menu-item index="/manage/memberblacklist">会员黑名单</el-menu-item>
                    </el-submenu>
                    <el-submenu index="3">
                        <template slot="title">
                            <i class="el-icon-s-promotion"></i>
                            <span slot="title">优惠券管理</span>
                        </template>
                        <el-menu-item>优惠券{{isCollapse}}</el-menu-item>
                        <el-menu-item>已发放优惠券</el-menu-item>
                    </el-submenu>
                </el-menu>
            </el-aside>
        </el-scrollbar>
        <el-container>
            <el-header>
                <el-col :span="6" style="font-size:20px;">
                    <div class="tools">
				    	<i class="el-icon-s-fold" @click.prevent="collapse"></i>
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
                    <transition name="fade" mode="out-in" appear>
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
        collapse:function(){
            this.isCollapse = !this.isCollapse;
        }
        
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
.el-menu{
    border: none;
}
.el-aside{
    overflow: hidden
}
.el-main{
    .main-container{
        border-radius: 4px;
        padding: 15px;
        background-color: #fff;
    }
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
</style>