const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})

// Public path ignored for self-hosted deployment
// module.exports = {
//   publicPath: process.env.NODE_ENV === 'production'
//     ? '/phoenix-website/'
//     : '/'
// }