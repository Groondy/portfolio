<template>
  <div>
    <nuxt-link to="/">
      <img src="@/assets/img/logo.svg" alt="virtualhert" />
      <p>retour</p>
    </nuxt-link>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
a {
  width: 120px;
  height: 100px;
  margin-top: 50px;
  transition: 0.3s ease-in-out;

  @include flex-column-between-center;
  color: white;
  img {
    width: 70%;
    height: auto;
  }

  p {
    font-size: $font-7;
    transition: 0.3s ease-in-out;
  }

  &:hover {
    transform: scale(1.1);

    p {
      color: $secondary-color;
    }
  }
}
</style>
