const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: false,

  pwa: {
    name: 'Bookshelf'
  }
})