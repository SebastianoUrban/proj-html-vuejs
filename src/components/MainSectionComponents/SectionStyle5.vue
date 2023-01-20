<template>
    <section :style="{backgroundImage : 'url('+ data.image +')'}" class="bg-cover-centered w-100">
        <div class="section-up d-flex flex-column align-items-center text-center">
            <h1 class="font-title font-bold color-light">{{ data.title }}</h1>
            <h2 class="font-body color-primary">{{ data.subtitle }}</h2>
            <div class="form-newsletter">
                <input type="text" name="" id="" placeholder="Insert your email ...">
                <ButtonComponent :text="data.buttonText" :customWidth="'200px'" :color="data.buttonColor"/>
            </div>
            <p class="font-body color-mid-light">{{ data.body }}</p>
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
        padding: 125px 0;
    }
    div.section-up {
        background: linear-gradient( to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.7) 100% );
        h1 {
            width: 20%;
            font-size: 3rem;
        }
        h2 {
            font-size: 1.5rem;
            font-weight: 500;
            margin-top: 20px;
        }
        p {
            width: 25%;
            font-size: 1.2rem;
            font-weight: 600;
            margin-top: 25px;
        }
        .form-newsletter {
            margin-top: 30px;
            input {
                height: 50px;
                border-radius: $btn-border-radius;
                width: 450px;
                margin-right: 20px;
                padding: 0 10px;
            }
        }
    }
</style>