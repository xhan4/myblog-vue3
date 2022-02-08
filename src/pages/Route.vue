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
        <div><router-link to="home">首页</router-link></div>
        <div><router-link to="type">类别</router-link></div>
        <div><router-link to="label">标签</router-link></div>
      </div>
      <div><router-link to='login'>登录</router-link></div>
    </div>
    </div>
  </div>

  <div class="route-container">
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

<script >
export default {
    name:'Route'
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
  padding: 0 5px;
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
  padding:55px 60px 115px;
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
}
.route-footer-firstLine{
   padding:20px 0;
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