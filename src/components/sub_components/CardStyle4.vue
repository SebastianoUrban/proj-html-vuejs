<template>
  <article :style="{backgroundImage : 'url('+ data.image +')'}" class="">
    <div class="card-up text-center d-flex flex-column justify-content-end align-items-center">
      <h1>{{ data.title }}</h1>
      <div>
        <hr>
      </div>
      <h2>{{ data.subtitle }}</h2>
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
    height: 425px;
    background-size: cover;
    border-bottom-right-radius: 40px;
    overflow: hidden;
    .card-up {
      width: 100%;
      height: 100%;
      padding: 30px 20px;
      background: linear-gradient( to bottom, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.6) 100% );
      h1 {
      font-family: $font-body;
      font-size: 1.5rem;
      font-weight: 500;
      color: $color-cube-1;
      }
      & div {
        width: 15%;
        hr {
          color: $color-cube-1;
          margin-top: 10px;
        }
      }
      h2 {
        font-family: $font-body;
        font-size: 1rem;
        font-weight: 500;
        color: $color-cube-5;
        margin-top: 15px;
      }
    }
}
</style>