<template>
  <a-layout theme="light">
    <a-layout-sider
    theme="light"
      breakpoint="lg"
      collapsed-width="0"
      @collapse="onCollapse"
      @breakpoint="onBreakpoint"
    >
      <div class="logo" />
      <a-menu v-model:selectedKeys="selectedKeys" theme="light" mode="inline">
        <a-menu-item key="1">
          <user-outlined />
          <span class="nav-text">nav 1</span>
        </a-menu-item>
        <a-menu-item key="2">
          <video-camera-outlined />
          <span class="nav-text">nav 2</span>
        </a-menu-item>
        <a-menu-item key="3">
          <upload-outlined />
          <span class="nav-text">nav 3</span>
        </a-menu-item>
        <a-menu-item key="4">
          <user-outlined />
          <span class="nav-text">nav 4</span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header :style="{ background: '#fff', padding: 0 }" />
      <a-layout-content :style="{ margin: '24px 16px 0' }">
        <div :style="{ padding: '24px', background: '#fff', minHeight:'100%'}">content</div>
      </a-layout-content>
      <a-layout-footer style="text-align: center">
        <a href="http://beian.miit.gov.cn" data-v-125ceb1c="">豫ICP备2020033754</a>
        <div class='route-footer-secondLine'>
        <img class="footer-img" src="https://img.alicdn.com/tfs/TB1..50QpXXXXX7XpXXXXXXXXXX-40-40.png" alt="" data-v-125ceb1c="">
       <a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=41132802000328" data-v-125ceb1c="">
       豫公网安备 41132802000328号</a>
      </div> 
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>
<script>
import { UserOutlined, VideoCameraOutlined, UploadOutlined } from '@ant-design/icons-vue';
import { defineComponent, ref } from 'vue';
export default defineComponent({
  components: {
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
  },

  setup() {
    const onCollapse = (collapsed, type) => {
      console.log(collapsed, type);
    };

    const onBreakpoint = broken => {
      console.log(broken);
    };

    return {
      selectedKeys: ref(['4']),
      onCollapse,
      onBreakpoint,
    };
  },

});
</script>
<style>
.ant-layout{
  height:100%;
}
#components-layout-demo-responsive .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}

.site-layout-sub-header-background {
  background: #fff;
}

.site-layout-background {
  background: #fff;
}

[data-theme='dark'] .site-layout-sub-header-background {
  background: #141414;
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