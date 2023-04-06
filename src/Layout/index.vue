<template>
  <div>
    <Sidebar></Sidebar>
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

<style>

</style>