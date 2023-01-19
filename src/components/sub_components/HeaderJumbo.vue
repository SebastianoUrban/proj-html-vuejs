<template>
  <div class="jumbo" :style="{backgroundImage: 'url('+ data[activeIndex].background +')'}">
    <div class="wrapper d-flex " >
      <article class="newspaper d-flex flex-column justify-content-center">
        <HandwriteText :text="data[activeIndex].author"/>
        <p class="newspaper-body">{{ data[activeIndex].newspaperArticle }}</p>
        <h5 class="newspaper-signature">{{ data[activeIndex].newspaperSignature }}</h5>
      </article>
      <article class="buy d-flex align-items-end">
        <BuyArticle :data="data[activeIndex].buySection"/>
      </article>
    </div>
  </div>
</template>

<script>
  import HandwriteText from '../sub_components/HandwriteText.vue'
  import BuyArticle from '../sub_components/BuyArticle.vue'

  export default {
    components :{
      HandwriteText,
      BuyArticle
    },
    data() {
      return {
        activeIndex : 0
      }
    },
    props : {
      data : Array
    }
  }
</script>

<style lang="scss" scoped>
  @use '../../style/variables' as *;

  .jumbo {
    width: 100%;
    height: 1000px;
    background-size: cover;
    background-position: center;
    
    .wrapper {
      height: 100%;
      width: 100%;
      background: linear-gradient( to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.7) 100% );

      article.newspaper {
        width: 65%;
        height: 100%;
        padding: 0 14% 0 15%;
        p.newspaper-body {
          color: $color-cube-1;
          font-family: $font-title;
          font-size: 3.15rem;
          font-weight: 700;
        }
        h5.newspaper-signature {
          color: $color-cube-4;
          font-family: $font-body;
          font-style: italic;
        }
      }
      article.buy {
        width: 35%;
        height: 100%;
      }
    }
  }
</style>