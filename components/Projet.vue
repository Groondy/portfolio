<template>
  <div class="projet">
    <div class="projet-content">
      <img :src="require(`@/assets/img/${img}`)" alt="projet" />
      <h3>{{ text }}</h3>
    </div>
  </div>
</template>

<script>
export default {
  props: ["img", "text"]
};
</script>

<style lang="scss" scoped>
.projet {
  width: 300px;
  height: 200px;
  background-color: #c4c4c4;
  margin: 10px;
  border: 3px #dddddd solid;
  position: relative;

  .projet-content {
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;
    display: block;
    color: black;

    img {
      width: 100%;
      height: auto;
      transition: 0.6s ease;
    }

    h3 {
      z-index: 10;
      font-size: $font-13;
      position: absolute;
      text-align: center;
      width: 80%;
      top: 35%;
      left: 50%;
      transform: translate(-50%, 100px);
      transition: 0.6s ease;
      opacity: 0;
      letter-spacing: 0.1rem;
      line-height: 150%;
    }
  }

  &:hover {
    .projet-content {
      img {
        transform: scale(1.15);
        filter: opacity(10%) contrast(150%);
      }
      h3 {
        transform: translate(-50%, -50%);
        opacity: 1;
      }
    }
  }
}
</style>
