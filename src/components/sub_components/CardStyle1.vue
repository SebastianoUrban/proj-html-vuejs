<template>
  <article :style="{backgroundImage : 'url('+ data.image +')'}" class="bg-cover-centered w-100 color-light"> 
    <h1 class="font-title font-bold">{{ data.title }}</h1>
    <hr>
    <h2 class="font-body font-light-bold">{{ data.subtitle }}</h2>
    <p class="font-body" v-for="paragraph in data.body">
      {{ paragraph }}
    </p>
    <div class="author-data d-flex align-items-center">
      <img :src="data.logo" alt="">
      <h3 class="font-body font-light-bold">{{ data.author }} ,  <span class="color-secondary">{{ data.newspaper }}</span></h3>
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
    padding: 15% 12%;
    border-bottom-right-radius: 80px;
    h1 {
      font-size: 3rem;
    }
    hr {
      color: white;
      margin-top: 3rem;
    }
    h2 {
      font-size: 1.5rem;
      margin-top: 2rem;
    }
    p {
      font-size: 1.2rem;
      font-weight: 400;
      margin-top: 1.5rem;
      }
    .author-data {
      margin-top: 2rem;
      img {
        height: 40px;
        margin-right: 30px;
      }
      h3 {
        font-size: 1.2rem;
        margin-top: 1.5rem;
      }
    }
}
</style>