<template>
    <main>
        <SectionStyle1 :data="store.Section1"/>
        <LogosBand :data="store.SectionLogos"/>
        <SectionStyle2 :data="store.Section2"/>
    </main>
</template>

<script>
    import { store } from '../store.js';
    import SectionStyle1 from '../components/MainSectionComponents/SectionStyle1.vue';
    import LogosBand from '../components/MainSectionComponents/LogosBand.vue';
    import SectionStyle2 from '../components/MainSectionComponents/SectionStyle2.vue';

    export default {
        components : {
            SectionStyle1,
            LogosBand,
            SectionStyle2
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