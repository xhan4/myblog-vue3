<template>
<div class="route">
      <div class="navbar">
    <div class='navbarContainer'>
    <div class="navbar-left">
      <img class="navbar-left-img" src="../assets/images/logo.svg" />
      <text class="navbar-left-text">流年絮语</text>
    </div>
    <div class="navbar-right">
      <div class="navber-right-first">
         
        <div><router-link to="home"><home-outlined />&nbsp;首页</router-link></div>
        <div><router-link to="type"><appstore-outlined />&nbsp;类别</router-link></div>
        <div><router-link to="label"><tag-outlined />&nbsp;标签</router-link></div>
         <div><router-link v-if="state.isLogin" :style="{paddingRight:'10px'}" to="system"><setting-outlined />&nbsp;管理</router-link></div>
       <input type="password" style="display:none" />
          <a-input-search
      v-model:value.prevent="state.value"
      placeholder="input search text"
      style="width: 200px"
      @search="onSearch"
    />
      </div>
      <div>
        
         <a-button v-if="!state.isLogin" type="primary" @click.prevent="showModal">登录</a-button>
          <a-popover  v-else  title="个人信息" >
             <template #content>
              <a-menu>
                   <a-menu-item @click="logout"><export-outlined />&nbsp;退出登录</a-menu-item>
              </a-menu>
           </template>
           <a-avatar style="background-color: #f56a00" src="https://img0.baidu.com/it/u=17951455,3911166728&fm=26&fmt=auto" />
           <text>admin</text>
          </a-popover>
     </div>                          
       
       <a-modal v-model:visible="state.visible" width="600px" :footer="null" :closable="false" :bodyStyle="{padding:'0px'}">
         <Login @close-Modal="closeModal"/>
    </a-modal>
    </div>
    </div>
  </div>

  <div class="route-container" :style="{minHeight:(profile.windowH-85+'px')}">
       <router-view></router-view>
  </div>

<div class='route-footer'>
     <div class='route-footer-firstLine'>
         <a href="http://beian.miit.gov.cn" data-v-125ceb1c="">豫ICP备2020033754</a>
     </div>
     <div class='route-footer-secondLine'>
        <img class="footer-img" src="https://img.alicdn.com/tfs/TB1..50QpXXXXX7XpXXXXXXXXXX-40-40.png" alt="" data-v-125ceb1c="">
       <a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=41132802000328" data-v-125ceb1c="">
       豫公网安备 41132802000328号</a>
      </div> 
   </div>
</div>
</template>

<script setup>
import {reactive} from 'vue';
import Login from './Login.vue';
import profile from '../config/profile';
import * as cache from '../lib/cache';
import {useRouter} from 'vue-router';
import {message} from 'ant-design-vue';
import { HomeOutlined,SettingOutlined,AppstoreOutlined,ExportOutlined,TagOutlined} from '@ant-design/icons-vue';
   const state = reactive({
     visible:false,
     isLogin:false,
     value:"",
     })
   const router = useRouter();
   if(cache.getSessionId()){
        state.isLogin = true
   }else{
     state.isLogin = false
   }
    const onSearch = ()=>{
      console.log(state.value,'value')
    }
    const showModal = ()=>{
        state.visible = true
    }
    const closeModal = () => {
        state.visible = false
        state.isLogin = true
     }
     const logout = ()=>{
        message.success(`退出成功`,1.5);
        cache.removeSessionId();
        router.push("/home")
        state.isLogin = false
     }
</script>
  
<style scoped>
.route{
  position: relative;
  min-height:100%
}
 .navbar {
  position: fixed;
  left: 0;
  top: 0;
  z-index: 20;
  width:100%;
  box-shadow: 0 1px 8px 0 rgba(0, 0, 0, 0.1);
  background: #FFF;
}
.navbarContainer{
  display: flex;
  padding: 10px 30px;
}
.navbar-left {
  padding-left: 20px;
  flex-grow: 1;
  display: flex;
  align-items: center;
}
.navbar-left-img {
  width: 35px;
  height: 35px;
}
.navbar-left-text {
  display: block;
  font-size: 19px;
  font-weight: 600;
}
.navbar-right {
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.navber-right-first {
  display: flex;
  align-items: center;
}
.navber-right-first div {
  padding: 0 10px;
}
a{
  color: #666;
}
.navbar-right div a:hover {
  color: #1e90ff;
}
.router-link-active {
  color: #1e90ff;
}
.route-container{
   padding-top:55px;
}
.route-footer{
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 0px;
  padding: 15px 0;
  border-top: 1px solid #eaecef;
  background: #FFF;
}
.route-footer-firstLine{
   padding:5px 0;
}
.route-footer-secondLine{
  display: flex;
  justify-content: center;
}
.footer-img{
  width: 20px;
  height: 20px;
  margin-right: 10px;
}
.route-footer a{
 color: #1E90FF;
}
</style>