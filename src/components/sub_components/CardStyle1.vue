<template>
  <article :style="{backgroundImage : 'url('+ data.image +')'}">
    <h1>{{ data.title }}</h1>
    <hr>
    <h2>{{ data.subtitle }}</h2>
    <p v-for="paragraph in data.body">
      {{ paragraph }}
    </p>
    <div class="author-data d-flex align-items-center">
      <img :src="data.logo" alt="">
      <h3>{{ data.author }} ,  <span class="newspaper">{{ data.newspaper }}</span></h3>
    </div>
  </article>
</template>

<script>
  export default {
    props: {
      data : Object
    },
  }
</script>

<style lang="scss" scoped>
  @use '../../style/variables' as *;
  article {
    width: 100%;
    padding: 15% 10%;
    background-size: cover;
    background-position: center;
    border-bottom-right-radius: 80px;
    h1 {
      font-family: $font-title;
      font-size: 3rem;
      font-weight: bold;
      color: $color-cube-1;
    }
    hr {
      color: white;
      margin-top: 3rem;
    }
    h2 {
      font-family: $font-body;
      font-size: 1.5rem;
      font-weight: 500;
      color: $color-cube-1;
      margin-top: 2rem;
    }
    p {
      font-family: $font-body;
      font-size: 1.2rem;
      font-weight: 400;
      color: $color-cube-1;
      margin-top: 1.5rem;
      }
    .author-data {
      margin-top: 2rem;
      img {
        height: 40px;
        margin-right: 30px;
      }
      h3 {
        font-family: $font-body;
        font-size: 1.2rem;
        font-weight: 600;
        color: $color-cube-1;
        margin-top: 1.5rem;
        span.newspaper {
          color: $material-design-3;
        }
      }
    }
}
</style>