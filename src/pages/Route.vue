<template>
      <div class="navbar">
    <div class='navbarContainer'>
    <div class="navbar-left">
      <img class="navbar-left-img" src="../assets/images/logo.png" />
      <text class="navbar-left-text">流年絮语</text>
    </div>
    <div class="navbar-right">
      <div class="navber-right-first">
        <div><router-link to="/home">首页</router-link></div>
        <div><router-link to="/type">类别</router-link></div>
        <div><router-link to="/label">标签</router-link></div>
      </div>
      <div><router-link to='/login'>登录</router-link></div>
    </div>
    </div>
  </div>
  <div class="home-container">
       <router-view></router-view>
  </div>

</template>

<script scoped>
export default {
    name:'Home'
}
</script>
  
<style>
 .navbar {
  position: fixed;
  left: 0;
  top: 0;
  z-index: 20;
  width:100%;
  box-shadow: 0 1px 8px 0 rgba(0, 0, 0, 0.1);
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
.navbar-right div a:hover {
  color: #1e90ff;
}
.router-link-active {
  color: #1e90ff;
}
.home-container{
  padding-top:55px;
}

</style>