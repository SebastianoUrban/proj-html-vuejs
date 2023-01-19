<template>
  <article>
    <div class="card-up">
      <h1>{{ data.title }}</h1>
      <p>{{ data.body }}</p>
    </div>
    <div class="author-data d-flex align-items-center">
      <img :src="data.logo" alt="">
      <h3>{{ data.author }} ,  {{ data.newspaper }}</h3>
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
    padding-left: 10%;
    background-size: cover;
    background-position: center;
    border-bottom-right-radius: 80px;
    margin-bottom: 30px;
    .card-up {
      background-color: $median-cut-1;
      padding: 10%;
      h1 {
      font-family: $font-title;
      font-size: 2rem;
      font-weight: bold;
      color: $color-cube-2;
      }
      p {
        font-family: $font-body;
        font-size: 1.2rem;
        font-weight: 400;
        color: $color-cube-4;
        margin-top: 1.5rem;
      }
    }
    .author-data {
      margin-top: 10px;
      img {
        height: 40px;
        margin-right: 30px;
      }
      h3 {
        font-family: $font-body;
        font-size: 1.2rem;
        font-weight: 600;
        color: $color-cube-2;
      }
    }
}
</style>