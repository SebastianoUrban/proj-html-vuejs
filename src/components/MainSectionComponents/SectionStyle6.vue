<template>
    <section class="w-100 d-flex flex-column align-items-center">
        <div class="section-up text-center">
            <h1 class="font-title font-bold color-dark">{{ data.title }}</h1>
            <h2 class="font-body color-primary font-light-bold">{{ data.subtitle }}</h2>
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
        padding: 100px 0;

    }
    div.section-up {
        h1 {
            font-size: 3rem;
        }
        h2 {
        font-size: 1.5rem;
        margin-top: 2rem;
        }
    }
    div.section-down {
        width: 70%;
        margin: 0 auto;
        margin-top: 50px;
    }
</style>