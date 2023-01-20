<template>
    <section :style="{backgroundImage : 'url('+ data.image +')'}">
        <div class="section-up d-flex flex-column align-items-center text-center">
            <h1>{{ data.title }}</h1>
            <h2>{{ data.subtitle }}</h2>
            <div class="form-newsletter">
                <input type="text" name="" id="" placeholder="Insert your email ...">
                <ButtonComponent :text="data.buttonText" :customWidth="'200px'" :color="data.buttonColor"/>
            </div>
            <p>{{ data.body }}</p>
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
        padding: 125px 0;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
    }
    div.section-up {
        background: linear-gradient( to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.7) 100% );
        h1 {
            width: 20%;
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
            margin-top: 20px;
        }
        p {
            width: 25%;
            font-family: $font-body;
            font-size: 1.2rem;
            font-weight: 600;
            color: $color-cube-4;
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