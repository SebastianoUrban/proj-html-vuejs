<template>
  <div>
    <AppHeader/>
    <AppMain/>
    <AppFooter/>
  </div>
</template>

<script>
  import AppHeader from './components/AppHeader.vue';
  import AppMain from './components/AppMain.vue';
  import AppFooter from './components/AppFooter.vue';

  export default {
    components : {
      AppHeader,
      AppMain,
      AppFooter
    }
  }
</script>

<style lang="scss">
  @use './style/_variables.sass' as *;
</style>