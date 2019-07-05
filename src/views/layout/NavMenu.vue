<template>
      <el-aside width="200">
          <el-menu 
              router
              background-color="#505d6b"
              text-color="#eee"
              active-text-color="#fff"
              :default-active="$route.path"
              class="el-menu-vertical-demo"
              :collapse="open"
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
</template>

<script>
export default {
  props:['open'],
  data(){
    return{}
  },
  computed:{
    routes() {
      console.log(this.$router)
      // return this.$router.options.routes
    }
  }
}
</script>

<style lang="scss" scoped>
  .el-aside{
    overflow: hidden;
    .el-menu{
      border: none;
      .el-menu-item.is-active{
        background-color: #89c6cd!important;
      }
      &.el-menu-vertical-demo:not(.el-menu--collapse) {
          width: 200px;
          min-height: 400px;
      }
    }
  }

</style>



