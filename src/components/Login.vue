<template>
  <div>
      用户名:<input type="text" v-model="loginForm.userName" placeholder="请输入用户名"/>
      <div id="userNameTip" style="display:none; color:red">请输入用户名！</div>
      <br>
      <br>
      密码： <input type="password" v-model="loginForm.password" placeholder="请输入密码"/>
      <div id="passwordTip" style="display:none; color:red">请输入密码！</div>
      <br>
      <br>
      <button v-on:click="login">登录</button>
  </div>
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
