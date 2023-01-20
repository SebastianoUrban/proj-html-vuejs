<template>
    <main>
        <SectionStyle1 :data="store.Section1"/>
        <LogosBand :data="store.SectionLogos"/>
        <SectionStyle2 :data="store.Section2"/>
        <SectionStyle3 :data="store.Section3"/>
        <SectionStyle4 :data="store.Section4"/>
        <SectionStyle5 :data="store.Section5"/>
        <SectionStyle6 :data="store.Section6"/>
        <SectionStyle7 :data="store.Section7"/>
    </main>
</template>

<script>
    import { store } from '../store.js';
    import SectionStyle1 from '../components/MainSectionComponents/SectionStyle1.vue';
    import LogosBand from '../components/MainSectionComponents/LogosBand.vue';
    import SectionStyle2 from '../components/MainSectionComponents/SectionStyle2.vue';
    import SectionStyle3 from '../components/MainSectionComponents/SectionStyle3.vue';
    import SectionStyle4 from '../components/MainSectionComponents/SectionStyle4.vue';
    import SectionStyle5 from '../components/MainSectionComponents/SectionStyle5.vue';
    import SectionStyle6 from '../components/MainSectionComponents/SectionStyle6.vue';
    import SectionStyle7 from '../components/MainSectionComponents/SectionStyle7.vue';

    export default {
        components : {
            SectionStyle1,
            LogosBand,
            SectionStyle2,
            SectionStyle3,
            SectionStyle4,
            SectionStyle5,
            SectionStyle6,
            SectionStyle7
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