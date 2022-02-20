const WebpackPwaManifest = require("webpack-pwa-manifest");


new WebpackPwaManifest({
    name: "Money Counter",
    short_name: "Budget",
    description: "An app that tracks your budget.",
    start_url: "../index.html",
    background_color: "#01579b",
    theme_color: "#ffffff",
    fingerprints: false,
    inject: false,
    icons: [{
      src: path.resolve("assets/img/icons/icon-512x512.png"),
      sizes: [96, 128, 192, 256, 384, 512],
      destination: path.join("assets", "icons")
    }]
  })