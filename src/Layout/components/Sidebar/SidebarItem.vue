<template>
  <div v-if="!item.hidden">
    <!-- 设置 :index="item.path" 后（两处），菜单不会联动，可删除该属性观看效果 -->
    <template  v-if="!item.children">
      <AppLink :to="item.path">
         <el-menu-item :index="item.path" v-if="!item.children">
      <menu-item icon="item.menu.icon" :title="item.meta.title"></menu-item>
    </el-menu-item>
      </AppLink>
    </template>
   
    <el-submenu v-else :index="item.path">
      <template slot="title">
        <menu-item icon="item.menu.icon" :title="item.meta.title"></menu-item>
      </template>
      <!-- 封装组件的时候使用自己 -->
      <sidebar-item
        v-for="child in item.children"
        :key="child.path"
        :item="child"
      ></sidebar-item>
    </el-submenu>
  </div>
</template>

<script>
import MenuItem from './Item.vue'
import AppLink from './Link'
export default {
  name: "SidebarItem",
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  components: {
    MenuItem,AppLink
  }
};
</script>

<style>
</style>