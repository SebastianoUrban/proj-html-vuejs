<template>
    <section class="d-flex flex-column align-items-center">
        <div class="section-up text-center">
            <h1>{{ data.title }}</h1>
            <h2>{{ data.subtitle }}</h2>
        </div>
            
        <div class="section-down d-flex justify-content-between">
            <CardStyle4 v-for="card in data.cards" :data="card"/>
        </div>
    </section>
</template>

<script>
    import CardStyle4 from '../sub_components/CardStyle4.vue';

    export default {
        components : {
            CardStyle4
        },
        props : {
            data : Object
        }
    }
</script>

<style lang="scss" scoped>
    @use '../../style/variables' as *;
    section {
        width: 100%;
        padding: 100px 0;

    }
    div.section-up {
        h1 {
            font-family: $font-title;
            font-size: 3rem;
            font-weight: bold;
            color: $color-cube-2;
        }
        h2 {
        font-family: $font-body;
        font-size: 1.5rem;
        font-weight: 500;
        color: $color-cube-5;
        margin-top: 2rem;
        }
    }
    div.section-down {
        width: 70%;
        margin: 0 auto;
        margin-top: 50px;
    }
</style>