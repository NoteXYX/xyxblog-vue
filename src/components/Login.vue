<template>
  <body id="poster">
    <el-form class="login-container" label-position="left" label-width="0px">
      <h3 class="login_title">小谢博客</h3>
      <el-form-item>
        <el-input type="text" v-model="loginForm.userName" auto-complete="off" placeholder="账号"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input type="password" v-model="loginForm.password" auto-complete="off" placeholder="密码"></el-input>
      </el-form-item>
      <el-alert v-bind:title="loginTipMessage" v-show="loginTipShow" :closable="false" type="error" show-icon></el-alert>
      <el-form-item style="width: 100%;margin-top: 3%;">
        <el-button type="success" style="width: 70%;" v-on:click="login" round>登录</el-button>
      </el-form-item>
    </el-form>
  </body>
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
        responseResult: [],
        loginTipMessage: '',
        loginTipShow: false
      }
    },
    methods: {
      login () {
        var _this = this
        console.log(this.$store.state)
        var loginTip = document.getElementById('loginTip')
        this.$axios
          .post('/login', {
            userName: this.loginForm.userName,
            password: this.loginForm.password
          })
          .then(loginResponse => {
            if (loginResponse.data.code === "SUCCESS") {
              _this.$store.commit('login', _this.loginForm)
              var path = this.$route.query.redirect
              this.$router.replace({path: path === '/' || path === undefined ? '/index' : path})
              this.loginTipShow = false
            } else {
              this.loginTipShow = true
              this.loginTipMessage = loginResponse.data.message
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
    margin: 200px auto;
    width: 350px;
    padding: 35px 45px 15px 45px;
    background: #fff;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
  }

  .login_title {
    margin: 0px auto 40px auto;
    text-align: center;
    color: #505458;
  }

  #poster {
    background:url("../assets/loginBG.jpg") no-repeat;
    background-position: center;
    height: 100%;
    width: 100%;
    background-size: cover;
    position: fixed;
  }

  body{
    margin: 0px;
  }
</style>