<template>
  <div id="app">
    <router-view></router-view>
    <TabBarModule></TabBarModule>
  </div>
</template>

<script>
import TabBarModule from "@/components/tabbar/TabBarModule";
export default {
  name: 'App',
  components: {
    TabBarModule
  }
}
</script>

<style>
    @import "./assets/css/base.css";

</style>
