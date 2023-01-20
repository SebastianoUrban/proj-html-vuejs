<template>
  <div class="background h-50 w-100" >
    <div class="buy-up w-100 d-flex justify-content-around">
      <div class="buy-image w-50 h-100 bg-contain-centered" :style="{backgroundImage: 'url('+ data.image +')'}"></div>
      <div class="buy-text w-50 h-100 d-flex flex-column justify-content-center">
        <h1 class="buy-title font-title font-bold color-dark">{{ data.title }}</h1>
        <h2 class="buy-subtitle font-body color-primary">{{ data.subtitle }}</h2>
        <p class="buy-body font-body color-mid-light">{{ data.body }}</p>
      </div>
    </div>
    <div class="buy-down w-100 font-bold">
      <button class="buy-amazon w-50 font-bold color-dark" ><i class="fa-brands fa-amazon"></i> Buy On Amazon</button>
      <button class="buy-apple w-50 font-bold color-dark"><i class="fa-brands fa-apple"></i> Buy On AppleStore</button>
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
    background-color: $color-cube-1;
    padding: 10%;
    div.buy-up {
    height: 80%;
      div.buy-text {
        .buy-title {
          font-size: 2rem;
        }
        .buy-subtitle {
          font-weight: 600;
          font-size: 1.2rem;
          margin-top: 1rem;
        }
        .buy-body {
          font-weight: 600;
          font-size: 1rem;
          margin-top: 1rem;
        }
      }
    }
    div.buy-down {
      height: 20%;
      button {
        height: 60px;
        border: 1px solid $material-design-3;
        background-color: $color-cube-1;
        font-size: 1.1rem;
        box-shadow: 10px 8px 15px rgba(0, 0, 0, 0.1);
        &:hover {
          background-color: $material-design-3;
          color: $color-cube-1;
        }
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