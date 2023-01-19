<template>
  <article>
    <div class="card-up">
      <img :src="data.image" alt="">
    </div>
    <div class="card-down text-center">
      <h1>{{ data.title }}</h1>
      <hr>
      <p>{{ data.body }}</p>
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
    .card-up {
      img{
        width: 100%;
      }
    }
    .card-down {
      padding: 30px 20px;
      h1 {
      font-family: $font-body;
      font-size: 2rem;
      font-weight: 500;
      color: $color-cube-2;
      margin-bottom: 20px;
      }
      p {
        font-family: $font-body;
        font-size: 1.2rem;
        font-weight: 500;
        color: $color-cube-3;
        margin-top: 25px;
      }
    }
}
</style>