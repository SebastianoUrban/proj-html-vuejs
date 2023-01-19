<template>
    <header>
        <div class="header-top d-flex justify-content-between">
            <img src="../assets/images/author-logo-round.png" alt="">
            <NavBar/>
        </div>
        <HeaderJumbo :data="store.jumboSlides"/>
    </header>
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
    header{
        position: relative;
        div.header-top{
            position: absolute;
            width: 80%;
            margin: 0 10%;
            img {
                height: 275px;
            }
        }
    }
</style>