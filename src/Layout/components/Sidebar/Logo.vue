<template>
  <div class="sidebar-logo-container" >
    <router-link to="/" class="sidebar-logo-link" >
      <img :src="logo" class="sidebar-logo">
      <h1 class="sidebar-title" >{{ title }}</h1>
    </router-link>
  </div>
</template>

<script>
import logoImg from '@/assets//logo/logo.png'
export default {
  name:'Logo',
  data () {
    return {
      logo:logoImg,
      title:'若依权限管理系统'
    }
  }
}
</script>

<style scoped lang='scss'>

.sidebar-logo-container{
  width: 100%;
  height: 50px;
  text-align: center;
  & .sidebar-logo-link{
    display: inline-block;
    
    width: 100%;
    height: 100%;
    & .sidebar-logo{
      width: 32px;
      height: 32px;
      vertical-align: middle;
    }
    & .sidebar-title{
      display: inline-block;
      color: #fff;
      font-size: 14px;
      vertical-align: middle;
      font-weight: 600;
    }
  }
}
</style>