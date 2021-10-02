import Vue from "vue";
import VueGtag from "vue-gtag";

export default ({ app }) => {
  const RGPD = localStorage.getItem("RGPD:accepted");

  Vue.use(
    VueGtag,
    {
      config: { id: "G-PYGC3EBYSB" },
      appName: "Virtual hart",
      pageTrackerScreenviewEnabled: true,
      bootstrap: RGPD == "true",
      enabled: RGPD == "true",
      params: {
        anonymize_ip: true
      }
    },
    app.router
  );
};
