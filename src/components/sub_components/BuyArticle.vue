<template>
  <div class="background " >
    <div class="buy-up d-flex justify-content-around">
      <div class="buy-image" :style="{backgroundImage: 'url('+ data.image +')'}"></div>
      <div class="buy-text d-flex flex-column justify-content-center">
        <h1 class="buy-title">{{ data.title }}</h1>
        <h2 class="buy-subtitle">{{ data.subtitle }}</h2>
        <p class="buy-body">{{ data.body }}</p>
      </div>
    </div>
    <div class="buy-down">
      <button class="buy-amazon"><i class="fa-brands fa-amazon"></i> Buy On Amazon</button>
      <button class="buy-apple"><i class="fa-brands fa-apple"></i> Buy On AppleStore</button>
    </div>
  </div>
  
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
  div.background {
    width: 100%;
    height: 50%;
    background-color: $color-cube-1;
    padding: 10%;

    div.buy-up {
    width: 100%;
    height: 80%;
      div.buy-image {
        width: 50%;
        height: 100%;
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;
      }
      div.buy-text {
        width: 50%;
        height: 100%;
        .buy-title {
          font-family: $font-title;
          font-weight: 700;
          font-size: 2rem;
        }
        .buy-subtitle {
          font-family: $font-body;
          font-weight: 600;
          font-size: 1.2rem;
          color: $color-cube-5;
          margin-top: 1rem;
        }
        .buy-body {
          font-family: $font-body;
          font-weight: 600;
          font-size: 1rem;
          color: $color-cube-4;
          margin-top: 1rem;
        }
      }
    }
    div.buy-down {
      width: 100%;
      height: 20%;
      button {
        width: 50%;
        height: 60px;
        border: 1px solid $matirial-design-3;
        background-color: $color-cube-1;
        font-size: 1.1rem;
        font-weight: bold;
        i {
          margin-right: 10px;
        }
        &.buy-amazon {
          border-top-left-radius: $btn-border-radius;
          border-bottom-left-radius: $btn-border-radius;
        }
        &.buy-apple {
          border-top-right-radius: $btn-border-radius;
          border-bottom-right-radius: $btn-border-radius;
        }
      }
    }
  }

</style>