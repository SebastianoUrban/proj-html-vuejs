<template>
    <div>
        <HeaderJumbo :data="store.jumboSlides"  />
    </div>
</template>

<script>
    import { store } from '../store.js';
    import NavBar from './sub_components/NavBar.vue';
    import HeaderJumbo from './sub_components/HeaderJumbo.vue';

    export default {
        components : {
            NavBar,
            HeaderJumbo
        },
        data() {
            return {
                store
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>