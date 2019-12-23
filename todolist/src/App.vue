<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>


<script>
import Login from './views/Login';

export default {
  components: {Login}
}
</script>

<style >
  @import "./assets/css/public.css";

</style>
