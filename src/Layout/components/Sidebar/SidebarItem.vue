<template>
  <el-submenu index="1">
      <template slot="title">
        <i class="el-icon-location"></i>
        <span>一</span>
      </template>
      <el-submenu index="1-1">
        <template slot="title">1-1</template>
        <el-menu-item index="1-1-1">1-1-1</el-menu-item>
      </el-submenu>
    </el-submenu>
</template>

<script>


export default {
  name: "SidebarItem",
  props: {
    
  },
  components: {
    
  }
};
</script>

<style>
</style>