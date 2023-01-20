<template>
  <article>
    <div class="card-up">
      <img :src="data.image" alt="" class="w-100">
    </div>
    <div class="card-down font-body text-center">
      <h1 class="color-dark font-light-bold">{{ data.title }}</h1>
      <hr class="color-mid-light">
      <p class="color-mid-dark font-light-bold">{{ data.body }}</p>
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
    width: 30%;
    background-color: $color-cube-1;
    .card-down {
      padding: 30px 20px;
      h1 {
      font-size: 2rem;
      margin-bottom: 20px;
      }
      p {
        font-size: 1.2rem;
        margin-top: 25px;
      }
    }
}
</style>