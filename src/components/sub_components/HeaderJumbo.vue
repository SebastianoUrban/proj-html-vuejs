<template>
  <div class="jumbo w-100 bg-cover-centered" :style="{backgroundImage: 'url('+ data[activeIndex].background +')'}">
    <div class="wrapper w-100 h-100 d-flex " >
      <article class="newspaper h-100 d-flex flex-column justify-content-center">
        <HandwriteText :text="data[activeIndex].author"/>
        <p class="newspaper-body font-title color-light">{{ data[activeIndex].newspaperArticle }}</p>
        <h5 class="newspaper-signature font-body color-mid-light">{{ data[activeIndex].newspaperSignature }}</h5>
        <div class="slider">
          <button class="prev font-bold"><i class="fa-solid fa-arrow-left color-light"></i></button>
          <button class="next font-bold"><i class="fa-solid fa-arrow-right color-light"></i></button>
        </div>
      </article>
      <article class="buy h-100 d-flex align-items-end">
        <BuyArticle :data="data[activeIndex].buySection"/>
      </article>
      <div class="tags text-center">
        <div class="tag d-flex flex-column justify-content-evenly">
          <p ><i class="fa-solid fa-folder"></i></p>
          <h4>Demos</h4>
        </div>
        <div class="tag color-mid-dark">
          <p><span class="dol color-secondary font-bold">$</span><span class="price color-secondary font-light-bold">{{ data[activeIndex].price }}</span></p>
          <h4>On Sale</h4>
        </div>
      </div>
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
    height: 1000px;
    .wrapper {
      background: linear-gradient( to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.7) 100% );
      position: relative;
      .tags {
        position: absolute;
        top: 20%;
        right: 20px;
        .tag {
          background-color: $color-cube-1;
          height: 80px;
          width: 80px;
          margin-top: 10px;
          border-radius: $btn-border-radius;
          p {
            font-size: 2rem;
            margin: 0;
            .dol {
              font-size: 1rem;
              vertical-align: text-top;
            }
          }
          h4 {
            font-size: 1rem;
          }
        }
      }
      article.newspaper {
        width: 65%;
        padding: 5% 14% 0 15%;
        p.newspaper-body {
          font-size: 3.15rem;
          font-weight: 700;
        }
        h5.newspaper-signature {
          font-style: italic;
        }
        div.slider {
          margin-top: 60px;
          button {
            width: 60px;
            height: 60px;
            border: none;
            background-color: $color-cube-2;
            font-size: 1.5rem;
            i {
              margin-right: 10px;
            }
            &.prev {
              border-top-left-radius: $btn-border-radius;
              border-bottom-left-radius: $btn-border-radius;
            }
            &.next {
              border-top-right-radius: $btn-border-radius;
              border-bottom-right-radius: $btn-border-radius;
              margin-left: 5px;
            }
          }
        }
      }
      article.buy {
        width: 35%;
      }
    }
  }
</style>