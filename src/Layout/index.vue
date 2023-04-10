<template>
  <div class="app-wrapper">
    <Sidebar class="sidebar-container"></Sidebar>
    <div>
      <div>
        <Navbar></Navbar>
        <TagsView></TagsView>
      </div>
      <AppMain></AppMain>
    </div>
  </div>
</template>

<script>
import Sidebar from './components/Sidebar/index.vue'
import TagsView from './components/TagsView/index.vue'
import AppMain from  './components/AppMain.vue'
import Navbar from './components/Navbar.vue'
export default {
  name:'Layout',
  components: {
    Navbar,
    AppMain,
    TagsView,
    Sidebar
  }
}
</script>

<style scoped lang='scss'>
// import前面要加@
@import '~@/assets/styles/variables.scss';
.app-wrapper{
  width: 100%;
  height: 100%;
}
.sidebar-container{
  width: 200px;
  height: 100%;
  background-color: $base-menu-background;
  position: fixed;
}
</style>