import Vue from "vue";
import VueGtag from "vue-gtag";

Vue.use(VueGtag, {
  config: { id: process.env.ANALYTICS_ID },
  appName: "virtual hart",
  enabled: () => {
    const rgpd = localStorage.getItem("RGPD:accepted");

    if (typeof rgpd !== null && rgpd === false) {
      return false;
    }
    if (typeof rgpd !== null && rgpd === true) {
      return true;
    }
    return false;
  }
});
