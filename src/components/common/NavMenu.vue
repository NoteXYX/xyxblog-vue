<template>
  <el-menu
    :default-active="this.$route.path"
    router
    mode="horizontal"
    background-color="white"
    text-color="#222"
    active-text-color="red"
    style="min-width: 1300px;">
    <el-menu-item v-for="(item,i) in navList" :key="i" :index="item.name">
      <i :class="item.navIcon"></i>{{ item.navItem }}
    </el-menu-item>
    <a href="#nowhere" style="color: #222;float: right;padding: 20px;">更多功能</a>
    <i class="el-icon-menu" style="float:right;font-size: 45px;color: #222;padding-top: 8px"></i>
    <span style="position: absolute;padding-top: 20px;right: 43%;font-size: 20px;font-weight: bold">小谢游乐园</span>
  </el-menu>
</template>

<script>
  export default {
    name: 'NavMenu',
    data () {
      return {
        navList: [
          {name: '/index', navItem: '首页', navIcon: 'el-icon-s-home'},
          {name: '/library', navItem: '图书馆', navIcon: 'el-icon-s-management'},
          {name: '/shop', navItem: '欣选好货', navIcon: 'el-icon-s-goods'},
          {name: '/admin', navItem: '个人中心', navIcon: 'el-icon-s-custom'}
        ]
      }
    }
  }
</script>

<style scoped>
  a{
      text-decoration: none;
    }

    span {
      pointer-events: none;
    }
</style>
