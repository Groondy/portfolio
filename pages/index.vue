<template>
  <div class="index">
    <section class="main">
      <div class="main-content">
        <img src="@/assets/img/logo.svg" alt="virtual hart" class="logo" />
        <h1>
          VIRTUAL HART
        </h1>
      </div>
      <img
        src="@/assets/img/separation.svg"
        alt="separation"
        class="separation-left"
      />
    </section>
    <section class="presentation">
      <div class="presentation-content">
        <div
          class="text"
          data-sal="slide-right"
          data-sal-duration="1500"
          data-sal-easing="ease-out"
        >
          <h2>Présentation</h2>
          <p>
            Je suis Baptiste, je suis au lycée et je souhaite travailler dans
            l’intelligence artificielle. J’ai appris le<strong>
              développement web </strong
            >par plaisir mais maintenant j’aimerais créer des sites sur mon
            temps libre. J’utilise principalement le framework javascript<strong>
              Vue.js </strong
            >avec le sur-framework <strong>Nuxt.js</strong>.
          </p>
        </div>
        <div class="img-and-technos">
          <div class="desktop">
            <img
              src="@/assets/img/desktop.svg"
              alt="desktop"
              class="desktop-content"
            />
          </div>
          <ul>
            <li><Logo img="logoVue.webp" /></li>
            <li><Logo img="nuxtjs.svg" /></li>
            <li><Logo img="figma.webp" /></li>
            <li><Logo img="sass.webp" /></li>
            <li><Logo img="tailwind.webp" /></li>
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
        <h2
          data-sal="slide-left"
          data-sal-duration="800"
          data-sal-easing="ease-out"
        >
          Projets
        </h2>
        <ul>
          <a href="virtualhart.fr" target="_blank">
            <li>
              <Projet img="projetPortfolio.webp" text="Portfolio" />
            </li>
          </a>
          <li>
            <a href="https://projet-e-commerce-57835.web.app/" target="_blank">
              <Projet img="projetECommerce.webp" text="E-commerce" />
            </a>
          </li>
        </ul>
      </div>
      <img
        src="@/assets/img/separation.svg"
        alt="separation"
        class="separation-left"
      />
    </section>
    <section class="contact">
      <div class="contact-content">
        <h2
          data-sal="slide-right"
          data-sal-duration="800"
          data-sal-easing="ease-out"
        >
          Contact
        </h2>
        <form class="contact-form" @submit.prevent="sendEmail">
          <div class="name">
            <input type="text" name="nom" placeholder="Nom" required />
            <input type="text" name="prenom" placeholder="Prénom" required />
          </div>
          <input type="email" name="email" placeholder="email" required />
          <textarea name="message" placeholder="Message" required></textarea>
          <recaptcha />
          <input type="submit" value="envoyer" id="btn-contact" />
        </form>
      </div>
    </section>
    <footer>
      <div class="footer-content">
        <div class="links">
          <h3>Liens:</h3>
          <ul>
            <li>
              <a
                href="https://www.facebook.com/baptiste.jemain.52/"
                target="_blank"
                >Facebook</a
              >
            </li>
            <li>
              <a href="https://github.com/Groondy" target="_blank">Github</a>
            </li>
            <li>baptiste.jemain@gmail.com</li>
            <li>
              <a
                href="https://www.linkedin.com/in/baptiste-jemain-2ab768220/"
                target="_blank"
                >Linkedin</a
              >
            </li>
          </ul>
        </div>
        <div class="services">
          <h3>Services proposés:</h3>
          <ul>
            <li>création site internet à Nantes</li>
            <li>optimisation du référencement</li>
            <li>création du design d'une marque</li>
          </ul>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import emailjs from "emailjs-com";
import { init } from "emailjs-com";
init(process.env.USER_ID);

export default {
  methods: {
    async sendEmail(e) {
      try {
        await this.$recaptcha.getResponse();

        await emailjs
          .sendForm(
            process.env.SERVICE_ID,
            process.env.TEMPLATE_ID,
            e.target,
            process.env.USER_ID
          )
          .then(this.$toast.global.mailSend())
          .then(document.querySelector("form").reset());

        await this.$recaptcha.reset();
      } catch (err) {
        console.log(err);
      }
    }
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
    min-height: 675px;
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
          line-height: 140%;
        }
      }

      .img-and-technos {
        width: 100%;
        @include flex-row-center-start;

        .desktop {
          width: 400px;
          background-color: #fff;
          padding: 25px;
          border-radius: 5px;
          transform: skew(3deg);

          img {
            width: 100%;
            transform: skew(-3deg);
          }
        }

        ul {
          margin-top: 10px;
          margin-left: 40px;
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
    padding-bottom: 8vw;
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
          margin-bottom: 40px;
        }

        input[type="submit"] {
          background-color: $secondary-color;
          color: #fff;
          font-size: $font-9;
          width: 240px;
          height: 50px;
          letter-spacing: 0.3rem;
          margin-top: 2.5vw;
          border: 0;
          transition: 0.4s ease-in-out;
          cursor: pointer;

          &:hover {
            background-color: $secondary-color-hover;
            transform: scale(1.05);
          }
        }
      }
    }
  }

  footer {
    width: 100%;
    height: 250px;
    background-color: $primary-color;
    @include flex-row-center-start;

    .footer-content {
      width: 90%;
      height: 70%;
      @include flex-row-around-start;
      margin-top: 50px;
      letter-spacing: 0.2rem;
      .links {
        h3 {
          font-size: $font-8;
          margin-bottom: 20px;
          margin-left: -30px;
        }
        li {
          margin-top: 10px;
          font-size: $font-5;
          a {
            color: white;
          }
        }
      }

      .services {
        h3 {
          font-size: $font-8;
          margin-bottom: 20px;
          margin-left: -30px;
        }

        li {
          margin-top: 10px;
          font-size: $font-4;
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
          .desktop {
            margin-bottom: 10vw;
          }
          ul {
            margin-left: 0;
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

    footer {
      height: 500px;
      @include flex-column-start-center;
      .footer-content {
        @include flex-column-between-center;
        .links {
          h3 {
            margin-left: 0;
          }
        }
        .services {
          h3 {
            margin-left: 0;
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

        .img-and-technos {
          .desktop {
            width: 75vw;
          }
        }
      }
    }
  }
}
@media screen and (max-width: 425px) {
  .index {
    .main {
      &-content {
        h1 {
          letter-spacing: 0.3rem;
          font-size: $font-23;
        }
      }
    }
    .presentation {
      &-content {
        .text {
          h2 {
            font-size: $font-9;
          }
          p {
            font-size: $font-6;
          }
        }

        .img-and-technos {
          width: 90%;
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

    footer {
      text-align: center;

      .footer-content {
        .links {
          h3 {
            font-size: $font-7;
          }
        }
        .services {
          h3 {
            font-size: $font-7;
          }
        }
      }
    }
  }
}
</style>
