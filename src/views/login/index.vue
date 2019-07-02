<template>
  <div class="login-wrapper">
    <el-form class="login-form">
      <h1>创美药业积分管理系统后台</h1>
      <el-form-item label="用户名">
        <el-input type="text" placeholder="用户名/邮箱"></el-input>
      </el-form-item>
      <el-form-item label="密码" >
        <el-input type="password" placeholder="密码"></el-input>
      </el-form-item>
      <el-form-item class="submit">
        <el-button type="primary">提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  
}
</script>

<style lang="scss">
  .login-wrapper{
    height: inherit;
    // background:linear-gradient(10deg,#1f7efe,#054a97 120%);
    background: url('../../static/images/login-bg.jpg') no-repeat center 100% 100%;
    display:-webkit-flex;
    display: flex;
    justify-content:center;
    align-items: center;
    .login-form{
      width: 400px;
      background-color: rgba(0,0,0,.7);
      padding: 20px 30px;
      border-radius: 4px;
      box-shadow:0 3px 7px rgba(0,0,0,.4);
      h1{
        font-size: 20px;
        color: #fff;
        text-align: center;
        margin-bottom: 20px;
      }
      .el-form-item__label{
        color: #fff;
      }
      .submit{
        text-align: center;
        margin-top: 30px;
        button{
          width: 100%;
        }
      }
    }
  }
</style>