module.exports = {
    apps : [{
        name: "whatsapp_downloader",
        script: "./server.js",
        watch: true,
        env: {
            "NODE_ENV": "development",
        },
        env_production : {
        "NODE_ENV": "production"
        }
    }]
  }