<template>
    <main>
        <SectionStyle1 :data="store.Section1"/>
    </main>
</template>

<script>
    import { store } from '../store.js';
    import SectionStyle1 from '../components/MainSectionComponents/SectionStyle1.vue'
    export default {
        components : {
            SectionStyle1
        },
        data() {
            return {
                store
            }
        },
    }
</script>

<style lang="scss" scoped>
    @use '../style/variables' as *;
    
</style>