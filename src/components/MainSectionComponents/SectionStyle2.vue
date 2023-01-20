<template>
    <section :style="{backgroundImage : 'url('+ data.background +')'}" class="w-100 bg-cover-centered">
        <div class="section-up h-100 d-flex">
            <div class="section-left w-50 bg-contain-centered" :style="{backgroundImage : 'url('+ data.image +')'}">
            </div>
            <div class="section-right w-50 d-flex flex-column justify-content-center align-item-center text-center">
                <h1 class="font-title color-light font-bold">{{ data.title }}</h1>
                <h2 class="font-body color-primary font-light-bold">{{ data.subtitle }}</h2>
                <p class="font-body color-mid-light font-light-bold">{{ data.body }}</p>
                <div class="logos d-flex justify-content-between">
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
        height: 600px;
        padding-top: 50px;
    }
    div.section-up {
        width: 60%;
        margin: 0 auto;
        div.section-right {
            h1 {
                font-size: 3rem;
            }
            h2 {
                font-size: 1.5rem;
                margin-top: 1rem;
            }
            p {
                width: 70%;
                margin: 30px auto;
                font-size: 1.2rem;
            }
            .logos {
                width: 75%;
                margin: 0 auto;
            }
        }
    }
</style>