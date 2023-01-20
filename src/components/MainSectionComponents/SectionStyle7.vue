<template>
    <section class="bg-colored w-100">
        <div class="section-up d-flex justify-content-between">
            <div class="section-left w-50">
                <h1 class="font-title font-bold color-dark">{{ data.title }}</h1>
                <h2 class="font-body color-secondary font-light-bold">{{ data.subtitle }}</h2>
            </div>
            <div class="section-right d-flex align-items-center">
                <ButtonComponent :text="data.buttonText" :customWidth="'300px'" :color="data.buttonColor"/>
            </div>
        </div>

        <div class="section-down d-flex justify-content-between">
            <div class="section-left" >
                <CardStyle5 :data="data.mainCard"/>
            </div>
            <div class="section-right h-100 d-flex flex-column justify-content-center align-item-center text-center">
                <CardStyle5 :data="card" v-for="card in data.secondaryCards"/>
            </div>
        </div>
    </section>
</template>

<script>
    import ButtonComponent from '../sub_components/ButtonComponent.vue';
    import CardStyle5 from '../sub_components/CardStyle5.vue';

    export default {
        components : {
            ButtonComponent,
            CardStyle5
        },
        props : {
            data : Object
        }
    }
</script>

<style lang="scss" scoped>
    @use '../../style/variables' as *;
    section {
        padding: 150px 0;
    }
    div.section-up {
        width: 70%;
        margin: 0 auto;
        div.section-left {
        h1 {
            font-size: 3rem;
            }
            h2 {
            font-size: 1.5rem;
            margin-top: 1rem;
            }
        }
    }
    div.section-down {
        width: 70%;
        margin: 0 auto;
        margin-top: 50px;
        div.section-left {
            width: 65%;
        }
        div.section-right {
            width: 30%;
        }
    }
</style>