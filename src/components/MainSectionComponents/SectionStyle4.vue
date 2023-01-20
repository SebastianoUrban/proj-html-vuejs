<template>
    <section class="bg-colored w-100 d-flex flex-column align-items-center">
        <div class="section-up text-center">
            <h1 class="font-title font-bold color-dark">{{ data.title }}</h1>
            <h2 class="font-body color-primary">{{ data.subtitle }}</h2>
        </div>
            
        <div class="section-down d-flex justify-content-between">
            <CardStyle3 v-for="card in data.cards" :data="card"/>
        </div>
    </section>
</template>

<script>
    import CardStyle3 from '../sub_components/CardStyle3.vue';

    export default {
        components : {
            CardStyle3
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
            font-weight: 500;
            margin-top: 20px;
        }
    }
    div.section-down {
        width: 80%;
        margin: 0 auto;
        margin-top: 50px;
    }
</style>