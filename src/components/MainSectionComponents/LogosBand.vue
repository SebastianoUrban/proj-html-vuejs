<template>
    <section class="bg-colored w-100">
        <div class="section-up d-flex justify-content-evenly">
            <img :src="logo" alt="" v-for="logo in data">
        </div>
    </section>
</template>

<script>
    export default {
        props : {
            data : Object
        }
    }
</script>

<style lang="scss" scoped>
    @use '../../style/variables' as *;
    div.section-up {
        width: 60%;
        margin: 0 auto;
        padding: 50px 0;
        img {
            height: 80px;
        }
    }
</style>