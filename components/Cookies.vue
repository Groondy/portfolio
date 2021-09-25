<template>
  <div class="cookies">
    <div class="cookies-content" :class="{ isopen: open }">
      <p class="text">Voulez vous activer les cookies ?</p>
      <div class="btn-container">
        <div class="btn yes" @click="updateCookiesYes"><p>oui</p></div>
        <div class="btn no" @click="updateCookiesNo"><p>non</p></div>
      </div>
    </div>
    <div class="close">
      <img src="~/assets/img/cookies.svg" alt="cookie" @click="toggleCookies" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cookies: false,
      open: false
    };
  },

  methods: {
    updateCookiesYes() {
      this.cookies = true;
      this.open = false;
      this.$emit("updateCookies", this.cookies);
    },
    updateCookiesNo() {
      this.cookies = false;
      this.open = false;
      this.$emit("updateCookies", this.cookies);
    },
    toggleCookies() {
      if (this.open === true) {
        this.open = false;
      } else {
        this.open = true;
      }
    }
  },
  mounted() {
    setTimeout(() => {
      this.open = true;
    }, 3000);
  }
};
</script>

<style lang="scss" scoped>
.cookies {
  position: fixed;
  bottom: 25px;
  left: 50%;
  min-width: 330px;
  transform: translateX(-50%);
  @include flex-column-between-center;

  &-content {
    background-color: #fff;
    border-radius: 5px;
    border: 2px solid black;
    margin-bottom: 10px;
    opacity: 0;
    visibility: hidden;
    max-height: 1px;
    transition: 0.5s ease-in-out;
    transform: translateY(200px);

    .text {
      color: black;
      padding: 15px;
      letter-spacing: 0.1rem;
    }

    .btn-container {
      @include flex-row-between-end;
      border-top: 2px solid black;
      color: black;

      .btn {
        width: 50%;
        height: 100%;
        @include flex-row-center-center;
        cursor: pointer;
        padding: 10px 0;
      }

      .yes {
        border-right: 2px solid black;
        transition: 0.3s;
        &:hover {
          background-color: #34d399;
        }
      }
      .no {
        transition: 0.3s;

        &:hover {
          background-color: #ef4444;
        }
      }
    }
  }

  .close {
    width: 50px;
    height: 50px;
    background-color: $secondary-color;
    border-radius: 100%;
    display: flex;

    img {
      margin: auto;
      width: 50%;
    }
  }

  .isopen {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
    max-height: 100px;
  }
}
</style>
