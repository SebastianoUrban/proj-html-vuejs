<template>
  <div class="background d-flex justify-content-around" >
    <div class="buy-image" :style="{backgroundImage: 'url('+ data.image +')'}">
    </div>
    <div class="buy-text">
      <h1 class="buy-title">{{ data.title }}</h1>
      <h2 class="buy-subtitle">{{ data.subtitle }}</h2>
      <p class="but-body">{{ data.body }}</p>
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
    background-color: white;
    padding: 10%;

    div.buy-image {
      width: 50%;
      height: 100%;
      background-size: contain;
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
      }
    }
  }

</style>