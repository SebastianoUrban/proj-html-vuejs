<template>
  <article :style="{backgroundImage : 'url('+ data.image +')'}" class="">
    <div class="card-up w-100 h-100 font-body text-center d-flex flex-column justify-content-end align-items-center">
      <h1 class="color-light">{{ data.title }}</h1>
      <div>
        <hr class="color-light">
      </div>
      <h2 class="color-primary">{{ data.subtitle }}</h2>
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
    aspect-ratio: 0.8;
    background-size: cover;
    border-bottom-right-radius: 40px;
    overflow: hidden;
    .card-up {
      padding: 30px 20px;
      background: linear-gradient( to bottom, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.6) 100% );
      h1 {
        font-size: 1.5rem;
        font-weight: 500;
        }
      & div {
        width: 15%;
        hr {
          margin-top: 10px;
        }
      }
      h2 {
        font-size: 1rem;
        font-weight: 500;
        margin-top: 15px;
      }
    }
}
</style>