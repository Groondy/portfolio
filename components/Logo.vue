<template>
  <div class="logo" @mouseover="anim">
    <img :src="require(`~/assets/img/${img}`)" alt="logo techno" />
  </div>
</template>

<script>
export default {
  props: ["img"],
  methods: {
    anim(e) {
      if (e.target.className === "logo") {
        let logo = e.target;
        logo.addEventListener("mouseover", e => {
          let attrX = e.offsetX - 50;
          let attrY = e.offsetY - 50;
          logo.style.transform = `translate(${attrX}px, ${attrY}px)`;
        });

        logo.addEventListener("mouseleave", () => {
          logo.style.transform = "";
        });
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.logo {
  border-radius: 100%;
  background-color: #fff;
  margin: 15px;
  width: 100px;
  height: 100px;
  box-shadow: 0 0 30px rgba($color: #fff, $alpha: 0.25);
  display: flex;
  transition: 1.1s ease-out;

  img {
    width: 60%;
    height: auto;
    margin: auto;
  }
}

@media screen and (max-width: 460px) {
  .logo {
    margin: 5px;
  }
}
</style>
