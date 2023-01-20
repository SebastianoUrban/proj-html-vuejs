<template>
    <nav class="w-50 color-light">
        <ul class="list-unstyled d-flex justify-content-between">
            <li v-for="page, index in navbarList" :key="index" :class="(index == activIndex) ? 'active' : ''" @click="activIndex = index" class="font-body font-bold">
                {{ page }}
            </li>
            <li :class="(navbarList.length == activIndex) ? 'active' : ''" @click="activIndex = navbarList.length" class="font-body font-bold"><i class="fa-solid fa-cart-shopping"></i></li>
        </ul>
    </nav>
</template>

<script>
    export default {
        data() {
            return {
                navbarList : ['Home', 'About Me', 'Testimonials', 'My Blog', 'Meetups', 'Shop', 'Contact Me'],
                activIndex : 0
            }
        },
    }
</script>

<style lang="scss" scoped>
    @use '../../style/variables' as *;
    li {
        line-height: 100px;
        border-top: solid;
        border-width: 8px;
        border-color: rgba($color: #000000, $alpha: 0.0);
        font-size: 1.1rem;
        &.active {
            border-color: $color-cube-5;
            color: $color-cube-5;
        }
    }
</style>