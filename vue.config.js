
const path = require('path');

module.exports = ({
  configureWebpack: {
    resolve: {
      alias: {
        "cesium": path.resolve(__dirname, "public/Cesium/Cesium.js")//lmw add 3 告诉vite未编译时如何引入cesium
      },
    },
  },
})
