'use strict'
const staticServer = require('./index')
staticServer({
  port: 1234,       // 端口号
  baseUrl:  '/',    // 路径
  outputDir: 'dist' // npm run build 后的输出路径
})