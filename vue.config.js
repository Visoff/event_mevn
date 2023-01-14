const { defineConfig } = require('@vue/cli-service')
const fs = require("fs")
module.exports = defineConfig({
  devServer: {
    port:8081,
    host:"visoff.ru",
    https:{key: fs.readFileSync(__dirname+'/ssl/cert.key', 'utf8'), cert: fs.readFileSync(__dirname+'/ssl/cert.pem', 'utf8')}
  }
})
