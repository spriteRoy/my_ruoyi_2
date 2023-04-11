<template>
  <el-submenu index="1">
      <template slot="title">
        <i class="el-icon-location"></i>
        <span>导航一yiyiy</span>
      </template>
      <el-submenu index="1-4">
        <template slot="title">选项4</template>
        <el-menu-item index="1-4-1">选项1</el-menu-item>
      </el-submenu>
    </el-submenu>
</template>

<script>
export default {
  name:'SidebarItem'
};
</script>

<style>
</style>