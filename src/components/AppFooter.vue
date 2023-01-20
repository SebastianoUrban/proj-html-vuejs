<template>
    <footer :style="{backgroundImage : 'url('+ store.footer.background+')'}">
        <div class="wrapper position-relative">
            <div class="footer-up d-flex justify-content-between">
                <div class="section1">
                    <h1>{{ store.footer.section1.title }}</h1>
                    <p>{{ store.footer.section1.body }}</p>
                </div>
                <div class="section2">
                    <h1>{{ store.footer.section2.title }}</h1>
                    <ul class="list-unstyled">
                        <li v-for="element in store.footer.section2.body" :key="element.id">
                            {{ element }}
                        </li>
                    </ul>
                </div>
                <div class="section3">
                    <h1>{{ store.footer.section3.title }}</h1>
                    <ul class="list-unstyled">
                        <li v-for="element in store.footer.section3.body" :key="element.id">
                            {{ element }}
                        </li>
                    </ul>
                </div>
            </div>
            <div class="footer-down">
                <p>{{ store.footer.copyright }}</p>
            </div>
            <img src="../assets/images/author-logo-round.png" alt="">
            <button><i class="fa-solid fa-angle-up"></i></button>
        </div>
    </footer>
</template>

<script>
    import { store } from '../store.js';
    export default {
        data() {
            return {
                store
            }
        },
    }
</script>

<style lang="scss" scoped>
    @use '../style/variables' as *;

    footer {
        .wrapper {
            background: linear-gradient( to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.7) 100% );
            img{
                width: 10%;
                position: absolute;
                top: 25%;
                left: 10%;
            }
            button {
                width: 50px;
                height: 50px;
                background-color: $color-cube-3;
                border: none;
                border-radius: $btn-border-radius;
                color: $color-cube-1;
                position: absolute;
                bottom: 0%;
                right: 10%;
            }
            .footer-up {
                width: 60%;
                margin: 0 auto;
                padding: 100px;
                h1 {
                    font-family: $font-title;
                    font-size: 2rem;
                    font-weight: 600;
                    color: $color-cube-1;
                    margin-bottom: 40px;
                }
                p, li {
                    font-family: $font-body;
                    font-size: 1.2rem;
                    font-weight: 400;
                    color: $color-cube-1;
                    margin-bottom: 15px;
                }
                .section1 {
                    width: 30%;
                }
                .section2 {
                    width: 30%;
                    li::before {
                        content: '\003E';
                        font-weight: bold;
                        margin-right: 1rem;
                    }
                }
                .section3 {
                    width: 30%;
                }
            }
            .footer-down {
                width: 60%;
                margin: 0 auto;
                padding: 50px 100px;
                p {
                    font-family: $font-body;
                    font-size: 1.2rem;
                    font-weight: 400;
                    color: $color-cube-1;
                    margin-bottom: 15px;
                }

            }
        }
    }
</style>