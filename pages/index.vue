<template>
  <div class="index">
    <section class="main">
      <div class="main-content">
        <img src="@/assets/img/logo.svg" alt="virtual hart" class="logo" />
        <h1>{{ title }}</h1>
      </div>
      <img
        src="@/assets/img/separation.svg"
        alt="separation"
        class="separation-left"
      />
    </section>
    <section class="presentation">
      <div class="presentation-content">
        <div class="text">
          <h2>Présentation</h2>
          <p>
            Je m’appelle Baptiste Jemain, j’ai actuellement 16 ans et je
            souhaite travailler dans l’intelligence artificielle. J’ai appris le
            développement web par plaisir mais maintenant j’aimerais créer de
            vrais sites sur mon temps libre. J’utilise principalement le
            framework javascript Vue.js avec le sur-framework Nuxt.js.
          </p>
        </div>
        <div class="img-and-technos">
          <img
            src="@/assets/img/dessinMoi.png"
            alt="virtual hart"
            class="me-img"
          />
          <ul>
            <li><Logo img="logoVue.png" /></li>
            <li><Logo img="nuxtjs.svg" /></li>
            <li><Logo img="nodejs.png" /></li>
            <li><Logo img="sass.png" /></li>
            <li><Logo img="mysql.png" /></li>
          </ul>
        </div>
      </div>
      <img
        src="@/assets/img/separation.svg"
        alt="separation"
        class="separation-right"
      />
    </section>
    <section class="projets">
      <div class="projets-content">
        <h2>Projets</h2>
        <ul>
          <li><Projet /></li>
          <li><Projet /></li>
          <li><Projet /></li>
        </ul>
      </div>
      <img
        src="@/assets/img/separation.svg"
        alt="separation"
        class="separation-left"
      />
    </section>
    <section class="contact" v-if="load === true">
      <div class="contact-content">
        <h2>Contact</h2>
        <form class="contact-form" @submit.prevent="sendEmail">
          <div class="name">
            <input type="text" name="nom" placeholder="Nom" required />
            <input type="text" name="prenom" placeholder="Prénom" required />
          </div>
          <input type="email" name="email" placeholder="email" required />
          <textarea name="message" placeholder="Message" required></textarea>
          <label class="remarque">Remarque</label>
          <input
            class="remarque"
            name="remarque"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
            placeholder="nom@domaine.com"
            v-model="antispam"
          />
          <input type="submit" value="envoyer" id="btn-contact" />
        </form>
      </div>
    </section>
  </div>
</template>

<script>
import emailjs from "emailjs-com";
import { init } from "emailjs-com";
init(process.env.USER_ID);

export default {
  data() {
    return {
      title: " ",
      antispam: "",
      load: false
    };
  },
  methods: {
    sendEmail(e) {
      if (this.antispam === "") {
        emailjs
          .sendForm(
            process.env.SERVICE_ID,
            process.env.TEMPLATE_ID,
            e.target,
            process.env.USER_ID
          )
          .then(document.querySelector("form").reset())
          .then(
            () => {
              alert("Mail envoyé");
            },
            () => {
              alert("Une erreur est survenue");
            }
          );
      }
    },
    updateTitle(baseTitle) {
      this.title = baseTitle.join("");
    },
    setTitle() {
      const finishTitle = ["VIRTUAL HART"];
      const baseTitle = [];
      let letterIndex = 0;
      let self = this;

      function loop() {
        setTimeout(function() {
          if (letterIndex < finishTitle[0].length) {
            baseTitle.push(finishTitle[0][letterIndex]);
            self.updateTitle(baseTitle);
            letterIndex++;
            loop();
          }
        }, 150);
      }

      setTimeout(function() {
        loop();
      }, 200);
    }
  },

  mounted() {
    this.setTitle();
    this.load = true;
  }
};
</script>

<style lang="scss">
.index {
  width: 100vw;
  color: #fff;

  .main {
    background-color: $primary-color;
    height: 100vh;
    min-height: 100vh;
    width: 100%;
    position: relative;
    @include flex-row-center-center;

    &-content {
      height: 85%;
      width: 100%;
      @include flex-column-around-center;

      h1 {
        font-size: $font-46;
        letter-spacing: 0.7rem;
        text-align: center;
        position: relative;
        &::after {
          content: "";
          position: absolute;
          height: 6rem;
          width: 5px;
          background-color: #fff;
          top: 10px;
          transform: translateY(-4px);
          right: -20px;
          animation: anim 1s linear infinite;
        }
      }
    }
  }

  .presentation {
    position: relative;
    width: 100vw;
    margin-top: 10vw;
    padding-bottom: 10vw;
    @include flex-row-center-center;

    &-content {
      width: 100%;
      height: 100%;
      @include flex-column-between-center;

      .text {
        width: 50%;
        margin-bottom: 7vw;
        h2 {
          font-size: $font-18;
          text-align: center;
          margin-bottom: 2vw;
        }
        p {
          font-size: $font-6;
          text-align: justify;
          line-height: 130%;
        }
      }

      .img-and-technos {
        width: 60%;
        @include flex-row-around-start;

        .me-img {
          width: 300px;
          height: 400px;
          background-color: #fff;
        }

        ul {
          margin-top: 10px;
          @include flex-row-center-center;
          flex-wrap: wrap;
          max-width: 400px;
        }
      }
    }
  }

  .projets {
    position: relative;
    width: 100vw;
    padding-top: 5vw;
    padding-bottom: 8vw;
    background-color: $primary-color;
    @include flex-row-center-center;

    &-content {
      @include flex-column-around-center;
      width: 100%;

      h2 {
        font-size: $font-18;
        margin-bottom: 3vw;
      }

      ul {
        @include flex-row-center-center;
        flex-wrap: wrap;
        width: 90%;
        max-width: 980px;
      }
    }
  }

  .contact {
    position: relative;
    width: 100vw;
    padding-top: 10vw;
    padding-bottom: 12vw;
    @include flex-row-center-center;
    &-content {
      @include flex-column-around-center;
      width: 50%;

      h2 {
        font-size: $font-18;
        margin-bottom: 2vw;
      }

      form {
        @include flex-column-around-center;
        width: 100%;

        .name {
          width: 100.8%;
          @include flex-row-between-center;

          input {
            width: 48.5%;
          }
        }

        input {
          height: 40px;
          font-size: $font-9;
          width: 100%;
          margin-bottom: 15px;
        }

        textarea {
          width: 100.3%;
          min-height: 250px;
          font-size: $font-10;
        }

        input[type="submit"] {
          background-color: $secondary-color;
          color: #fff;
          font-size: $font-9;
          width: 170px;
          height: 50px;
          letter-spacing: 0.3rem;
          margin-top: 2.5vw;
          border: 0;
          transition: 0.4s ease-in-out;

          &:hover {
            background-color: $secondary-color-hover;
          }
        }

        .remarque {
          display: none;
        }
      }
    }
  }

  .separation-left {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100vw;
    height: auto;
  }

  .separation-right {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100vw;
    height: auto;
    transform: rotate(180deg);
  }
}

@media screen and (max-width: 950px) {
  .index {
    .main {
      &-content {
        .logo {
          width: 550px;
          height: auto;
        }

        h1 {
          font-size: $font-36;
          letter-spacing: 0.5rem;
          &::after {
            height: 4.5rem;
          }
        }
      }
    }

    .presentation {
      &-content {
        .text {
          width: 75%;
          h2 {
            font-size: $font-14;
          }
          p {
            font-size: $font-5;
            letter-spacing: 0.2rem;
          }
        }

        .img-and-technos {
          @include flex-column-between-center;
          .me-img {
            margin-bottom: 3vw;
          }
        }
      }
    }

    .projets {
      &-content {
        h2 {
          font-size: $font-14;
        }
      }
    }

    .contact {
      &-content {
        h2 {
          font-size: $font-14;
        }

        form {
          .name {
            @include flex-column-around-center;

            input {
              width: 100%;
            }
          }
        }
      }
    }
  }
}

@media screen and (max-width: 600px) {
  .index {
    .main {
      &-content {
        .logo {
          width: 90vw;
          height: auto;
        }

        h1 {
          font-size: $font-25;
        }
      }
    }

    .presentation {
      &-content {
        .text {
          h2 {
            margin-bottom: 6vw;
          }
          p {
            text-align: center;
          }
        }
      }
    }
  }
}
@media screen and (max-width: 425px) {
  .index {
    .presentation {
      &-content {
        .text {
          h2 {
            font-size: $font-10;
          }
          p {
            font-size: $font-4;
          }
        }
      }
    }
    .contact {
      &-content {
        width: 85%;
        h2 {
          margin-bottom: 6vw;
        }
      }
    }
  }
}

@keyframes anim {
  50% {
    opacity: 0.1;
  }
  100% {
    opacity: 1;
  }
}
</style>
