<template>
  <article >
    <div class="card-up">
      <img :src="data.image" alt="">
    </div>
    <div class="card-down text-start">
      <h1>{{ data.title }}</h1>
      <h2>{{ data.metaData }}</h2>
      <p v-if="data.body" v-for="paragraph in data.body">{{ paragraph }}</p>
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
    height: 100%;
    padding: 7%;
    background-color: $color-cube-1;
    .card-up {
      width: 100%;
      img {
        width: 100%;
      }
    }
    .card-down {
      width: 100%;
      h1 {
      font-family: $font-body;
      font-size: 2rem;
      font-weight: 600;
      color: $color-cube-2;
      margin-top: 30px;
      }
      h2 {
        font-family: $font-body;
        font-size: 1.1rem;
        font-weight: 500;
        color: $color-cube-3;
        margin-top: 15px;
        margin-bottom: 25px;
      }
      p {
        font-family: $font-body;
        font-size: 1.3rem;
        font-weight: 500;
        color: $color-cube-3;
        margin-bottom: 15px;
      }
    }
}
</style>