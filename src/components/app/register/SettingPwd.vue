<template>
  <div class="login_bg">
    <div class="form_panel">
      <h1 class="logo">英菲国际</h1>
      <form method="post">
        <div class="form-group mobile">
          <input v-model="pwd" class="form-input" type="password" name="mobile" placeholder="设置登录密码" />
        </div>
        <div class="form-group pwd">
          <input v-model="pwd2" class="form-input" type="password" name="captcha" placeholder="确认登录密码" />
        </div>
        <a @click="submitRegister" class="button button-caution submit" href="javascript:;">完成注册</a>
      </form>
      <router-link class="new-user" to="/register">返回</router-link>
    </div>
  </div>
</template>

<script>
  import { Toast, Indicator } from 'mint-ui';
  import { mapGetters } from 'vuex'
  const $ = require('jquery');
  export default {
    name: 'SettingPwd',
    data() {
      return {
        pwd: '',
        pwd2: ''
      }
    },
    mounted() {
      let that = this;
    },
    methods: {
      submitRegister(){
        var that = this;
        if(that.validatePwd()){
          Indicator.open();
          $.ajax({
            type: 'post',
            url: '/register/submit',
            data: {
              mobile: that.mobile,
              password: that.pwd,
              inviteCode: that.inviteCode
            },
            dataType: 'json',
            success: function(args){
              if(args.status){
                that.$router.push({ path: 'Main'});
              }else{
                Toast(args.msg);
              }
            },
            complete: function () {
              Indicator.close();
            }
          });
        }else{
          Toast('密码不一致');
        }
      },
      validatePwd(){
        var that = this;
        if(that.pwd === that.pwd2){
          return true;
        }
        return false;
      }
    },
    computed: {
      ...mapGetters({
        mobile: 'mobile',
        inviteCode: 'inviteCode'
      })
    }
  };
</script>

<style>

</style>
