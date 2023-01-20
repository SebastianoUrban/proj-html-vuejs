<template>
    <section :style="{backgroundImage : 'url('+ data.background +')'}">
        <div class="section-up h-100 d-flex">
            <div class="section-left w-50" :style="{backgroundImage : 'url('+ data.image +')'}">
            </div>
            <div class="section-right w-50 d-flex flex-column justify-content-center align-item-center text-center">
                <h1 class="font-title color-light font-bold">{{ data.title }}</h1>
                <h2 class="font-body color-primary">{{ data.subtitle }}</h2>
                <p class="font-body color-mid-light">{{ data.body }}</p>
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
        width: 100%;
        height: 600px;
        padding-top: 50px;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
    }
    div.section-up {
        width: 60%;
        margin: 0 auto;
        div.section-left {
            background-size: contain;
            background-repeat: no-repeat;
            background-position: center;
        }
        div.section-right {
            h1 {
                font-size: 3rem;
            }
            h2 {
                font-size: 1.5rem;
                font-weight: 500;
                margin-top: 1rem;
            }
            p {
                width: 70%;
                margin: 30px auto;
                font-size: 1.2rem;
                font-weight: 600;
            }
            .logos {
                width: 75%;
                margin: 0 auto;
            }
        }
    }
</style>