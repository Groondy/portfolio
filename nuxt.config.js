export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: "static",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Virtual Hart",
    htmlAttrs: {
      lang: "fr"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "Développeur web junior à Nantes"
      },
      { name: "format-detection", content: "telephone=no" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["./assets/style/index.scss"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{ src: "~/plugins/sal.js", mode: "client" }],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ["@nuxtjs/dotenv", "@nuxtjs/google-fonts"],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["@nuxtjs/style-resources", "@nuxtjs/recaptcha", "@nuxtjs/toast"],
  styleResources: {
    scss: ["./assets/style/*.scss"]
  },

  recaptcha: {
    size: "normal",
    siteKey: process.env.SITE_KEY,
    version: 2
  },

  googleFonts: {
    families: {
      "Roboto Mono": [500],
      Roboto: [500]
    }
  },

  toast: {
    position: "top-right",
    register: [
      {
        name: "mailSend",
        message: "Mail envoyé",
        options: {
          type: "info",
          duration: 5000
        }
      }
    ]
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {}
};
