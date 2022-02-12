<template>
  <a-layout theme="light" :style="{height:(windowH-170+'px')}">
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
      <a-layout-content :style="{ margin: '24px 16px 0' }">
        <div :style="{ padding: '24px', background: '#fff', minHeight:'100%'}">content</div>
      </a-layout-content>
       <a-layout-footer style="padding: 12px">
      </a-layout-footer>
    </a-layout>
    
  </a-layout>
</template>
<script>
import { UserOutlined, VideoCameraOutlined, UploadOutlined } from '@ant-design/icons-vue';
import { defineComponent, ref } from 'vue';
import profile from '../config/profile';
export default defineComponent({
  components: {
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
  },

  setup() {
    const windowH = profile.windowH
    const onCollapse = (collapsed, type) => {
      console.log(collapsed, type);
    };
    const onBreakpoint = broken => {
      console.log(broken);
    };

    return {
      selectedKeys: ref(['4']),
      windowH,
      onCollapse,
      onBreakpoint,
    };
  },

});
</script>
<style>
.ant-layout{
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
.ant-layout.ant-layout-has-sider{
  background: red;
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