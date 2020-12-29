<template>
  <el-form class="login-container" label-position="left" label-width="0px">
    <h3 class="login_title">系统登录</h3>
    <el-form-item>
      <el-input type="text" v-model="loginForm.username" auto-complete="off" placeholder="账号"></el-input>
    </el-form-item>
    <el-form-item>
      <el-input type="password" v-model="loginForm.password" auto-complete="off" placeholder="密码"></el-input>
    </el-form-item>
    <el-form-item style="width: 100%">
      <el-button type="primary" style="width: 100%;background: #29963d;border: none" v-on:click="login">登录</el-button>
    </el-form-item>
  </el-form>
  <!-- <el-card>
      用户名:<input type="text" v-model="loginForm.userName" placeholder="请输入用户名"/>
      <div id="userNameTip" style="display:none; color:red">请输入用户名！</div>
      <br>
      <br>
      密码： <input type="password" v-model="loginForm.password" placeholder="请输入密码"/>
      <div id="passwordTip" style="display:none; color:red">请输入密码！</div>
      <br>
      <br>
      <button v-on:click="login">登录</button>
  </el-card> -->
</template>

<script>

  export default {
    name: 'Login',
    data () {
      return {
        loginForm: {
          userName: '',
          password: ''
        },
        responseResult: []
      }
    },
    methods: {
      login () {
        if (this.loginForm.userName === "") {
          document.getElementById("userNameTip").style.display="";
        } else {
          document.getElementById("userNameTip").style.display="none";
        }
        if (this.loginForm.password === "") {
          document.getElementById("passwordTip").style.display="";
        } else {
          document.getElementById("passwordTip").style.display="none";
        }
        this.$axios
          .post('/login', {
            userName: this.loginForm.userName,
            password: this.loginForm.password
          })
          .then(successResponse => {
            if (successResponse.data.code === "SUCCESS") {
              this.$router.replace({path: '/index'})
            } else {

            }
          })
          .catch(failResponse => {
          })
      }
    }
  }
</script>

<style>
  .login-container {
    border-radius: 15px;
    background-clip: padding-box;
    margin: 90px auto;
    width: 350px;
    padding: 35px 35px 15px 35px;
    background: #fff;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
  }

  .login_title {
    margin: 0px auto 40px auto;
    text-align: center;
    color: #505458;
  }

</style>
