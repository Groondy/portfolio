<template>
  <div class="e-commerce">
    <Back />
    <section>
      <h2>E-commerce</h2>
      <p>
        Ce site d’e-commerce est mon tout premier site web. Je suis plutôt
        content du résultat même si j’ai découvert lors de ce projet qu’il me
        manquait de la pratique sur le HTML/CSS car c’était la première fois que
        je codais seul, c’est pourquoi le CSS n’est pas très «propre». De plus,
        j’ai codé la version desktop sans penser au responsive, du coup il n’est
        pas optimal.
      </p>

      <p>
        Tout d’abord, j’ai commencé par la création d’une maquette sur Figma en
        réfléchissant aux aspects techniques que je pourrais monter sur le site.
      </p>
      <img
        src="@/assets/img/figmaECommerce.webp"
        alt="e-commerce"
        class="img-projet"
      />

      <p>
        Puis, je me suis mis à la programmation en créant un SPA(single page
        application) grâce à Nuxt JS. Je me suis alors rendu compte de l’utilité
        des frameworks et de leur gain de temps. J’ai donc utilisé les
        fonctionnalités disponibles comme le store que j’ai utilisé pour passer
        la catégorie d’une page à l’autre. J’ai aussi utilisé le layout pour
        ajouter à chaque page le header. Pour le panier j’ai simplement utilisé
        le local storage mais je ne suis pas allé jusqu’à l’implémentation d’un
        mode de payement.
      </p>

      <p>
        Sur ce site il n’y a pas de backend, j’ai juste un fichier Javascript
        avec mes produits et mes images sur le storage de Firebase. Firebase que
        j’ai aussi utilisé pour mettre en ligne facilement et gratuitement mon
        site.
      </p>
      <img src="@/assets/img/firebase.webp" alt="firebase" class="img-projet" />
      <p>
        Ce premier projet n’est pas extraordinaire mais il m’a permis
        d’apprendre beaucoup de choses dans tous les domaines.
      </p>

      <a href="https://github.com/Groondy/projet-e-commerce" class="github"
        ><img src="@/assets/img/github.svg" alt="github" />GitHub</a
      >
      <a href="https://projet-e-commerce-57835.web.app/" class="lien-site"
        ><span>lien vers le site</span></a
      >
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.e-commerce {
  width: 100%;
  height: 100%;
  @include flex-column-around-center;
  color: white;

  section {
    width: 80%;
    margin-top: 70px;
    margin-bottom: 300px;

    h2 {
      font-size: $font-13;
      margin-bottom: 50px;

      @media screen and (max-width: 550px) {
        text-align: center;
      }
    }

    p {
      font-size: $font-8;
      line-height: 130%;
      text-align: justify;
      margin-bottom: 50px;
      @media screen and (max-width: 550px) {
        text-align: center;
        font-size: $font-6;
      }
    }

    .img-projet {
      width: 65%;
      height: auto;
      display: block;
      margin: 0 auto 70px auto;

      @media screen and (max-width: 660px) {
        width: 100%;
      }
    }

    .github {
      color: white;
      font-size: $font-10;
      @include flex-row-center-center;
      margin-top: 50px;
      width: 180px;
      margin: 0 auto 0 auto;
      img {
        margin-right: 15px;
        width: 46px;
        height: auto;
      }
    }

    .lien-site {
      color: white;
      letter-spacing: 0.1rem;
      background-color: $secondary-color;
      font-size: $font-8;
      width: 300px;
      height: 60px;
      display: block;
      margin: 50px auto 0 auto;
      @include flex-row-center-center;
      transition: 0.3s ease-in-out;

      &:hover {
        background-color: $secondary-color-hover;
      }
    }
  }
}
</style>
