<template>
  <article class="w-100 h-100">
    <div class="card-up">
      <img :src="data.image" alt="" class="w-100">
    </div>
    <div class="card-down w-100 text-start font-body">
      <h1 class="color-dark">{{ data.title }}</h1>
      <h2 class="color-mid-dark">{{ data.metaData }}</h2>
      <p class="color-mid-dark" v-if="data.body" v-for="paragraph in data.body">{{ paragraph }}</p>
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
    padding: 5% 5% 0 5%;
    background-color: $color-cube-1;
    .card-down {
      h1 {
        font-size: 2rem;
        font-weight: 600;
        margin-top: 30px;
      }
      h2 {
        font-size: 1.1rem;
        font-weight: 500;
        margin-top: 15px;
        margin-bottom: 25px;
      }
      p {
        font-size: 1.3rem;
        font-weight: 500;
        margin-bottom: 15px;
      }
    }
}
</style>