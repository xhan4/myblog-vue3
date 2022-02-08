<template>
  <div class="login">
    <div class="login-container">
      <div class="login-middle">
        <div class="login-middle-top"></div>
        <div class="login-middle-bottom">
          <div class="login-middle-bottom-firstDiv">
            <div>
              <input
                type="text"
                v-model="loginForm.username"
                placeholder="用户名"
              />
            </div>
            <div>
              <input
                type="password"
                v-model="loginForm.password"
                placeholder="密码"
              />
            </div>
            <button @click="login">登录</button>
          </div>
          <div class="login-middle-bottom-secondDiv">
               <div @click='change'>
               <div class='signUpTextA'>SIGNUP</div>
               <div class='signUpTextB'>没有账号请点击注册</div>
               </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as rest from '../lib/rest'
export default {
  name: "Login",
  data() {
    return {
      loginForm: {
        username: "",
        password: "",
      },
    };
  },
  methods:{
    login:function(){
       const params={...this.loginForm}
       rest.login(params)
      //  .then(res=>{
      //        console.log(res.data,'res')
      //  })
    },
    change:function(){
      console.log('我是chnage')
    }
  }
};
</script>

<style scoped>
.login {
  height: 100vh;
  /* background-image: url("../assets/images/login_background.jpg") */
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
  box-shadow: 0px 0px 10px rgb(252, 252, 252);
}
.login-middle-top {
  width: 100%;
  height: 30%;
  background-color: #e1b02b;
}
.login-middle-bottom {
  width: 100%;
  height: 70%;
  background-color: #487db0;
  display: flex;
}
.login-middle-bottom-firstDiv {
  width: 70%;
  height: 100%;
  border-right: 1px solid #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.login-middle-bottom-firstDiv div {
  margin-bottom: 10px;
}
.login-middle-bottom-firstDiv input{
   outline:none;
   height: 30px;
   width: 194px;
}
.login-middle-bottom-firstDiv button{
   outline:none;
   height: 30px;
   width: 194px;
}
.login-middle-bottom-secondDiv {
  width: 30%;
  height: 100%;
  color:#FFF;
  display: flex;
  align-items: center;
  justify-content: center;
}
.signUpTextA{
  font-size: 30px;
  padding:20px;
}
.signUpTextB{
 text-align: center;
}
</style>