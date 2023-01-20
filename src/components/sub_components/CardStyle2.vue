<template>
  <article class="w-100">
    <div class="card-up bg-colored">
      <h1 class="font-title font-bold color-dark">{{ data.title }}</h1>
      <p class="font-body color-mid-light">{{ data.body }}</p>
    </div>
    <div class="author-data d-flex align-items-center">
      <img :src="data.logo" alt="">
      <h3 class="font-body color-dark">{{ data.author }} ,  {{ data.newspaper }}</h3>
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
    padding-left: 10%;
    border-bottom-right-radius: 80px;
    margin-bottom: 30px;
    .card-up {
      padding: 10%;
      h1 {
      font-size: 2rem;
      }
      p {
        font-size: 1.2rem;
        font-weight: 400;
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
        font-size: 1.2rem;
        font-weight: 600;
      }
    }
}
</style>