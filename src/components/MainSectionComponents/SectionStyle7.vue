<template>
    <section :style="{backgroundImage : 'url('+ data.background +')'}">
        <div class="section-up d-flex justify-content-between">
            <div class="section-left">
                <h1>{{ data.title }}</h1>
                <h2>{{ data.subtitle }}</h2>
            </div>
            <div class="section-right d-flex align-items-center">
                <ButtonComponent :text="data.buttonText" :customWidth="'300px'" :color="data.buttonColor"/>
            </div>
        </div>

        <div class="section-down d-flex justify-content-between">
            <div class="section-left" >
                <CardStyle5 :data="data.mainCard"/>
            </div>
            <div class="section-right d-flex flex-column justify-content-center align-item-center text-center">
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
        width: 100%;
        padding: 150px 0;
        background-color: $median-cut-1;

    }
    div.section-up {
        width: 70%;
        margin: 0 auto;
        div.section-left {
            width: 50%;
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
            color: $material-design-3;
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
            height: 100%;
        }
        
    }
</style>