<template>
  <div class="login_bg">
    <div class="form_panel">
      <h1 class="logo">英菲国际</h1>
      <form method="post">
        <div class="form-group mobile">
          <input class="form-input" type="password" name="mobile" placeholder="设置登录密码" />
        </div>
        <div class="form-group pwd">
          <input class="form-input" type="password" name="captcha" placeholder="确认登录密码" />
        </div>
        <router-link class="button button-caution submit" to="/app">完成注册</router-link>
      </form>
      <router-link class="new-user" to="/">返回</router-link>
    </div>
  </div>
</template>

<script>

</script>

<style>
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
  .form_panel .form-group .form-input::-moz-placeholder,
  .form_panel .form-group .form-input::-webkit-input-placeholder,
  .form_panel .form-group .form-input:-ms-input-placeholder,
  .form_panel .form-group .form-input:-moz-placeholder { /* Mozilla Firefox 4 to 18 */
    color:    #818A9D;
    opacity:  0.7;
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
 
</style>
