<template>
    <section>
        <div class="section-up d-flex flex-column align-items-center">
            <HandwriteText :text="data.title"/>
            <p>{{ data.body }}</p>
            <ButtonComponent :text="data.buttonText" :customWidth="'200px'" :color="data.buttonColor"/>
        </div>
        <div class="section-down">

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
        width: 80%;
        margin: 0 auto;
    }
    div.section-up {
        padding: 100px;
        p {
            font-family: $font-body;
            font-size: 2rem;
            font-weight: 500;
        }

    }
</style>