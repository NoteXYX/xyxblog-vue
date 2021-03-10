<template>
  <el-menu
    class="categories"
    default-active="0"
    @select="handleSelect"
    active-text-color="red">
    <el-menu-item index="0" class="leftAlign">
      <i class="el-icon-menu"></i>
      <span slot="title">全部</span>
    </el-menu-item>
    <el-menu-item index="1" class="leftAlign">
      <svg class="icon" aria-hidden="true">
          <use xlink:href="#iconhdkf"></use>
      </svg>
      <span slot="title">后端技术</span>
    </el-menu-item>
    <el-menu-item index="2" class="leftAlign">
      <svg class="icon" aria-hidden="true">
          <use xlink:href="#iconqdkf"></use>
      </svg>
      <span slot="title">前端技术</span>
    </el-menu-item>
    <el-menu-item index="3" class="leftAlign">
      <svg class="icon" aria-hidden="true">
          <use xlink:href="#iconjinrong"></use>
      </svg>
      <span slot="title">金融</span>
    </el-menu-item>
    <el-menu-item index="4" class="leftAlign">
      <svg class="icon" aria-hidden="true">
          <use xlink:href="#iconchanpin"></use>
      </svg>
      <span slot="title">产品技术</span>
    </el-menu-item>
    <el-menu-item index="5" class="leftAlign">
      <svg class="icon" aria-hidden="true">
          <use xlink:href="#iconduxiaoshuo"></use>
      </svg>
      <span slot="title">小说</span>
    </el-menu-item>
  </el-menu>
</template>

<script>
  export default {
    name: 'SideMenu'
  }
</script>

<style scoped>
  .categories {
    position: fixed;
    margin-left: 50%;
    left: -600px;
    top: 100px;
    width: 150px;
  }

  .leftAlign {
    text-align: left;
  }

  .icon {
    width: 1.3em; height: 1.3em;
    fill: currentColor;
    overflow: hidden;
    margin-left: 2px;
    margin-right: 0.7em;
  }
</style>
