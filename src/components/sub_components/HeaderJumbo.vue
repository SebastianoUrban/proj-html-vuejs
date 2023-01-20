<template>
  <div class="jumbo" :style="{backgroundImage: 'url('+ data[activeIndex].background +')'}">
    <div class="wrapper d-flex " >
      <article class="newspaper d-flex flex-column justify-content-center">
        <HandwriteText :text="data[activeIndex].author"/>
        <p class="newspaper-body">{{ data[activeIndex].newspaperArticle }}</p>
        <h5 class="newspaper-signature">{{ data[activeIndex].newspaperSignature }}</h5>
        <div class="slider">
          <button class="prev"><i class="fa-solid fa-arrow-left"></i></button>
          <button class="next"><i class="fa-solid fa-arrow-right"></i></button>
        </div>
      </article>
      <article class="buy d-flex align-items-end">
        <BuyArticle :data="data[activeIndex].buySection"/>
      </article>
      <div class="tags text-center">
        <div class="tag d-flex flex-column justify-content-evenly">
          <p ><i class="fa-solid fa-folder"></i></p>
          <h4>Demos</h4>
        </div>
        <div class="tag">
          <p><span class="dol">$</span><span class="price">{{ data[activeIndex].price }}</span></p>
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
    width: 100%;
    height: 1000px;
    background-size: cover;
    background-position: center;
    
    .wrapper {
      height: 100%;
      width: 100%;
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
          color: $color-cube-3;
          p {
            font-size: 2rem;
            margin: 0;
            .price {
              color: $material-design-3;
              font-weight: 600;
            }
            .dol {
              color: $material-design-3;
              font-size: 1rem;
              vertical-align: text-top;
              font-weight: bold;
            }
          }
          h4 {
            font-size: 1rem;
          }
        }
      }
      article.newspaper {
        width: 65%;
        height: 100%;
        padding: 5% 14% 0 15%;
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
        div.slider {
          margin-top: 60px;
          button {
            width: 60px;
            height: 60px;
            border: none;
            color: $color-cube-1;
            background-color: $color-cube-2;
            font-size: 1.5rem;
            font-weight: bold;
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
        height: 100%;
      }
    }
  }
</style>