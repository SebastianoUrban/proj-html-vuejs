<template>
    <section>
        <div class="section-up d-flex flex-column align-items-center">
            <HandwriteText :text="data.title"/>
            <p class="text-center font-body">{{ data.body }}</p>
            <ButtonComponent :text="data.buttonText" :customWidth="'200px'" :color="data.buttonColor"/>
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
    }
    div.section-up {
        width: 60%;
        margin: 0 auto;
        padding: 100px 0;
        p {
            font-size: 2rem;
            font-weight: 500;
            margin-bottom: 40px;
        }
    }
</style>