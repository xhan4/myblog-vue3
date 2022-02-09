<template>
  <div class="login">
    <div class="login-container">
      <div class="login-middle">
        <div class="login-middle-top"></div>
        <div class="login-middle-bottom">
          <div class="big-box" :class="{ bigActive: isLogin }">

             <div class="login-middle-bottom-firstDiv" v-if='isLogin'>
              <div class="btitle">创建账户</div>
              <div class="bform">
                <input
                 type="text"
                  v-model="registerForm.username"
                  placeholder="用户名"
                />
                <input
                  type="password"
                  v-model="registerForm.password"
                  placeholder="密码"
                />
                 <input
                  type="password"
                  v-model="registerForm.password"
                  placeholder="确认密码"
                />
                <button @click="regiser">注册</button>
              </div>
            </div>

            <div class="login-middle-bottom-firstDiv" v-else>
              <div class="btitle">账户登录</div>
              <div class="bform">
                <input
                 type="text"
                  v-model="loginForm.username"
                  placeholder="用户名"
                />
                <span class="errTips" v-if="usernameError">* 用户名不能为空 *</span>
                <input
                  type="password"
                  v-model="loginForm.password"
                  placeholder="密码"
                />
                <span class="errTips" v-if="passwordError">* 密码不能为空 *</span>
               <!-- 验证码实现 -->
               <input ref="codeValue" type="text" placeholder="验证码" v-model="code_text">
               <img @click="getCode" :src="codeImg" alt="验证码">
                <button @click="login">登录</button>
              </div>
            </div>
          </div>

          <div class="small-box" :class="{ smallActive: isLogin }">

               <div class="login-middle-bottom-secondDiv" v-if="isLogin">
              <div @click="changeType">
                <div class="signUpTextA">REGISTER</div>
                <div class="signUpTextB">骗你的，根本没有注册</div>
              </div>
            </div>

            <div class="login-middle-bottom-secondDiv" v-else>
              <div @click="changeType">
                <div class="signUpTextA">SIGNUP</div>
                <div class="signUpTextB">没有账号请点击注册</div>
              </div>
            </div>
          
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as rest from "../lib/rest";
import profile from '../config/profile'
export default {
  name: "Login",
  data() {
    return {
      loginForm: {
        username: "",
        password: "",
      },
      registerForm:{
       username:"",
       password:""
      },
      isLogin: false,
      usernameError:false,
      passwordError:false,
      codeImg : `${profile.baseURL}/user/code?t=${new Date().getTime()}`,
      code_text:""
    };
  },
  methods: {
    login: function () {
      if(!this.loginForm.username){
            this.usernameError=true;
      }else if(!this.loginForm.password){
           this.usernameError=false;
           this.passwordError=true;
      }else{
         const params = { ...this.loginForm ,code_text:this.code_text};
          rest.login(params).then(res=>{
            if(res.data.code===400||res.data.code===422){
               this.$message.error(`登录失败！${res.data.message}`);
            }else if(res.data.code===200){
                this.$router.push({name:"system"})
            }
       })
      }
      
    },
     getCode() {
        // 添加时间戳进行验证码切换
        this.codeImg = `${profile.baseURL}/user/code?t=${new Date().getTime()}`;
        this.$refs.codeValue.value = "";
         },
    regiser(){

    },
    changeType: function () {
      this.isLogin = !this.isLogin;
    },
  },
};
</script>

<style scoped>
.login {
  height: 100vh;
  background-image: url("../assets/images/bk.jpg");
  background-size: cover;
}
.login-container {
  width: 100%;
  height: 100%;
  position: relative;
}

.login-middle {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 600px;
  height: 400px;
  box-shadow: 0 0 3px #f0f0f0, 0 0 6px #f0f0f0;
}
.login-middle-top {
  width: 100%;
  height: 30%;
  background-color: #e1b02b;
}
.login-middle-bottom {
  width: 100%;
  height: 70%;
  background-color: #fff;
  position: relative;
}
.btitle {
  font-size: 1.5em;
  font-weight: bold;
  color: rgb(57, 167, 176);
}
.bform {
  width: 100%;
  height: 80%;
  padding: 5px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
.bform .errTips{
  display: block;
  width: 50%;
  text-align: left;
  color: red;
  font-size: 0.7em;
  margin-left: 1em;
}
.login-middle-bottom-firstDiv {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.login-middle-bottom-firstDiv input {
  width: 50%;
  height: 30px;
  border: none;
  outline: none;
  border-radius: 10px;
  padding-left: 2em;
  background-color: #f0f0f0;
}
.login-middle-bottom-firstDiv button {
  width: 20%;
  height: 30px;
  border-radius: 24px;
  border: none;
  outline: none;
  background-color: rgb(57, 167, 176);
  color: #fff;
  font-size: 0.9em;
  cursor: pointer;
}
.login-middle-bottom-secondDiv {
  height: 100%;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
}
.signUpTextA {
  font-size: 30px;
  padding: 20px;
}
.signUpTextB {
  text-align: center;
}
.big-box {
  width: 70%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  transform: translateX(0%);
  transition: all 1s;
}
.small-box {
  width: 30%;
  height: 100%;
  position: absolute;
  background: linear-gradient(135deg, rgb(57, 167, 176), rgb(56, 183, 145));
  right: 0;
  bottom: 0;
  transform: translateX(0%);
  transition: all 1s;
}
.bigActive {
  left: 30%;
  transition: all 1s;
}
.smallActive {
  left: 30%;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-top-right-radius: inherit;
  border-bottom-right-radius: inherit;
  transform: translateX(-100%);
  transition: all 1s;
}
</style>