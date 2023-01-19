<template>
    <section :style="{backgroundImage : 'url('+ data.background +')'}">
        <div class="section-up d-flex">
            <div class="section-left" :style="{backgroundImage : 'url('+ data.image +')'}">
            </div>
            <div class="section-right d-flex flex-column justify-content-center align-item-center text-center">
                <h1>{{ data.title }}</h1>
                <h2>{{ data.subtitle }}</h2>
                <p>{{ data.body }}</p>
                <div class="logos w-100 d-flex justify-content-between">
                    <img :src="logo" alt="" v-for="logo in data.logos">
                </div>
            </div>

        </div>
    </section>
</template>

<script>
    import HandwriteText from '../sub_components/HandwriteText.vue';
    import ButtonComponent from '../sub_components/ButtonComponent.vue';
    export default {
        components : {
            HandwriteText,
            ButtonComponent
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
        height: 600px;
        padding-top: 50px;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
    }
    div.section-up {
        width: 60%;
        height: 100%;
        margin: 0 auto;
        div.section-left {
            width: 50%;
            background-size: contain;
            background-repeat: no-repeat;
            background-position: center;
        }
        div.section-right {
            width: 50%;
            h1 {
            font-family: $font-title;
            font-size: 3rem;
            font-weight: bold;
            color: $color-cube-1;
            }
            h2 {
            font-family: $font-body;
            font-size: 1.5rem;
            font-weight: 500;
            color: $color-cube-5;
            margin-top: 1rem;
            }
            p {
            font-family: $font-body;
            font-size: 1.2rem;
            font-weight: 600;
            color: $color-cube-4;
            margin-top: 1.5rem;
            }
        }
    }
</style>