<template>
  <div>
    <el-card class="login-form-layout">
      <el-form autoComplete="on"
               :model="loginForm"
               ref="loginForm"
               label-position="left">
        <div style="text-align: center;width:268px;height:86px;margin-top:-28px">
          <svg-icon icon-class="branding-logo-data" style="width: 100px;height: 100px;color: #409EFF"></svg-icon>
        </div>
        <el-form-item prop="userID">
          <el-input name="userID"
                    type="text"
                    v-model="loginForm.userID"
                    autoComplete="on"
                    placeholder="userID">
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input name="password"
                    :type="pwdType"
                    @keyup.enter.native="handleLogin"
                    v-model="loginForm.password"
                    autoComplete="on"
                    placeholder="password">
          </el-input>
        </el-form-item>
        <el-form-item style="margin-bottom: 60px">
          <el-button style="width: 100%" size="small" :loading="loading" @click.native.prevent="handleLogin">
            <svg-icon icon-class="login_btn_state2" style="height:3em;width:2.5em"></svg-icon>
          </el-button>
        </el-form-item>
      </el-form>
    </el-card>
    <div class="footer" style="display:inline-block;vertical-align:middle">
      <div><svg-icon icon-class="comchat logo" style="width:1.5em ;height:2.0em"></svg-icon></div>
      <div class="text">comChat version 1.0.0.0© 2017-2019 SAE All Rights Reserved.</div>
    </div>
    <img :src="login_bg" class="login-center-layout">
  </div>
</template>

<script>
  import {isvalidUsername} from '@/utils/validate';
  import login_bg from '@/assets/应用号后台管理登录背景.png'
  export default {
    name: 'login',
    data() {
      const validateUsername = (rule, value, callback) => {
        if (!isvalidUsername(value)) {
          callback(new Error('请输入正确的用户名'))
        } else {
          callback()
        }
      };
      const validatePass = (rule, value, callback) => {
        if (value.length < 3) {
          callback(new Error('密码不能小于3位'))
        } else {
          callback()
        }
      };
      return {
        loginForm: {
          userID: 'xinke',
          password: 'xinke'
        },
        loginRules: {
          username: [{required: true, trigger:'blur', validator: validateUsername}],
          password: [{required: true, trigger: 'blur', validator: validatePass}]
        },
        loading: false,
        pwdType: 'password',
        login_bg,
      }
    },
    methods: {
      showPwd() {
        if (this.pwdType === 'password') {
          this.pwdType = ''
        } else {
          this.pwdType = 'password'
        }
      },
      handleLogin() {
        this.$refs.loginForm.validate(valid => {
          if (valid) {
            this.loading = true;
            this.$store.dispatch('Login', this.loginForm).then(() => {
              this.loading = false;
              this.$router.push({path: '/home'})
            }).catch(() => {
              this.loading = false
            })
          } else {
            console.log('参数验证不合法！');
            return false
          }
        })
      }
    }
  }
</script>

<style scoped>
  .login-form-layout {
    position: absolute;
    left: 700px;
    top: 130px;
    width: 360px;
    height:276px;
    margin: 140px auto;
  }
  .login-title {
    text-align: center;
  }
  .el-button{
    margin-left:0px;
    padding:0;
    border:none;
    color:#FFFFFF
  }
  .el-button:hover{
    background-color:#FFFFFF;
  }
  .footer{
    position:absolute;
    top:90%;
    left:60%;
  }
  .text{
    display: inline-block;
    position: absolute;
    width: 400px;
    height:19px;
    font-size: 14px;
    float: right;
    margin-top: -30px;
    margin-left: 35px;
  }
  .login-center-layout {
    height:100%;
    width:100%;
  }
</style>
