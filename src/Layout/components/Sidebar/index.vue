<template>
  <div>
    <Logo></Logo>
    <el-scrollbar>
      <!-- unique-opened="true" -->
      <el-menu default-active="2" class="el-menu-vertical-demo" :background-color="variables.menuBackground"
        text-color="yellow" :unique-opened="false" active-text-color="#ffd04b">
        <SidebarItem></SidebarItem>
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script>
import Logo from "./Logo.vue";
import variables from "@/assets/styles/variables.scss";
import SidebarItem from "./SidebarItem.vue";
export default {
  name: "Sidebar",
  components: {
    Logo, SidebarItem
  },
  methods: {},
  computed: {
    variables() {
      return variables;
    },
  },
};
</script>

<style scoped lang="scss">
.el-scrollbar {
  height: calc(100% - 50px);
}
</style>