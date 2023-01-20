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
                        <li>
                            <i class="fa-brands fa-facebook-f"></i>
                            <i class="fa-brands fa-twitter"></i>
                            <i class="fa-brands fa-instagram"></i>
                            <i class="fa-brands fa-linkedin-in"></i>
                            <i class="fa-brands fa-youtube"></i>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="footer-down text-center">
                <p>© Copyright 2012-2020 ! Avada Theme by <span class="copyrigth-special">ThemeFusion</span> | All Rights Reserved | Powered by <span class="copyrigth-special">WordPress</span></p>
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
        background-size: cover;
        .wrapper {
            background: linear-gradient( to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.75) 100% );
            img{
                width: 8%;
                position: absolute;
                top: 35%;
                left: 10%;
                transform: translate(-50%, -50%);
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
                padding: 150px 0 ;
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
                    i {
                        margin-right: 20px;
                    }
                }
            }
            .footer-down {
                width: 60%;
                margin: 0 auto;
                padding-bottom: 50px;
                p {
                    font-family: $font-body;
                    font-size: 1.2rem;
                    font-weight: 400;
                    color: $color-cube-4;
                    margin-bottom: 15px;
                    .copyrigth-special {
                        font-weight: 600;
                        color: $color-cube-1;
                    }
                }

            }
        }
    }
</style>