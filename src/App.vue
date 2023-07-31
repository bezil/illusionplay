<template>
  <div id="q-app">
    <router-view />
  </div>
</template>
<script>
export default {
  name: 'App'
}
</script>
<style lang="scss">
.ip-font {
  font-family: 'Avenir-Regular';
}
.ip-font-light {
  font-family: 'Avenir-Light';
}
.ip-font-medium {
  font-family: 'Avenir-Medium';
}
.ip-font-bold {
  font-family: 'Avenir-Bold';
}
.dark-bg{
  background: $dark;
}
</style>
