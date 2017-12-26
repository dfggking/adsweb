<template>
<div class="login_bg">
  <div class="form_panel">
    <h1 class="logo">英菲国际</h1>
    <form method="post">
      <div class="form-group mobile">
        <input class="form-input" v-model="mobile" type="text" name="mobile" placeholder="登录手机号" />
      </div>
      <div class="form-group pwd">
        <input class="form-input" v-model="pwd" type="password" name="pwd" placeholder="登录密码" />
      </div>
      <button type="button" class="button button-caution submit" @click="login()">登录</button>
    </form>
    <span class="forget-pwd">忘记密码？</span>
    <div class="user-btn_oper"><router-link class="new-user" to="/register">注册新账号</router-link></div>
  </div>
</div>
</template>

<script>
const $ = require('jquery');
const axios = require('axios');

export default{
    name: 'Login',
    data() {
        return {
            mobile: '',
            pwd: ''
        }
    },
    mounted: function(){
    },
    methods: {
        login: function () {
            let that = this;
            if(that.validate()) {
                that.$router.push({ path: 'main' });
                // var params = new URLSearchParams();
                // params.append('mobile', that.mobile);
                // params.append('pwd', that.pwd);
                // axios.post('/login', params)
                // .then(function (response) {
                //     console.log(response);
                // })
                // .catch(function (response) {
                //     console.log(response);
                // });
            }
        },
        validate: function () {
            let that = this;
            if(that.mobile && that.pwd) {
                return true;
            }
            return false;
        }
    }
}
</script>

<style>
html,body,#app{
  height: 100%;
  overflow: hidden;
}
.login_bg {
  position: relative;
  width: 100%;
  height: 100%;
  background: #2e3e5e;
}
.login_bg .logo{
  margin-top: 0;
  margin-bottom: 20px;
  text-align: center;
  font-size: 30px;
  color: #fff;
  letter-spacing: 3px;
}
.login_bg .form_panel {
  position: absolute;
  top: 20%;
  width: 80%;
  left: 10%;
  height: 60%;
  
}
.form_panel .form-group{
  margin-bottom: 20px;
}
.form_panel .form-group .form-input {
  background: transparent;
  width: 100%;
  height: 40px;
  padding: 5px 10px;
  border: 0;
  border-bottom: 1px solid #F1F3EE;
  -webkit-border-radius: 0;
  -moz-border-radius: 0;
  border-radius: 0;
  color: #fff;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
.form_panel .form-group .form-input:-moz-placeholder{
  color: #818A9D; opacity:0.7;
}
.form_panel .form-group .form-input::-moz-placeholder{
  color: #818A9D;opacity:0.7;
}
.form_panel .form-group .form-input:-ms-input-placeholder{
  color: #818A9D;opacity:1;
}
.form_panel .form-group .form-input::-webkit-input-placeholder{
  color: #818A9D;opacity:1;
}
.form_panel .submit{
  width: 100%;
  margin-top: 15px;
  background-color: #E85533;
  border-color: #E85533;
  color: #fff;
  -webkit-border-radius: 4px;
  -moz-border-radius: 4px;
  border-radius: 4px;
}

.form_panel .submit.active,
.form_panel .submit.is-active,
.form_panel .submit:active {
  background-color: #f64c59;
  border-color: #f64c59;
  color: #fff;
}
.forget-pwd{
  display: block;
  text-align: right;
  color: #fff;
  font-size :14px;
  margin-top: 10px;
}
.new-user {

  color: #EC7038;
  font-size: 16px;
  text-decoration: none;
}
.user-btn_oper{
  margin-top: 25px;
  text-align: center;
}
</style>
