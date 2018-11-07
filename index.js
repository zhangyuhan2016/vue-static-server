'use strict'

const http = require('http')
const express = require('express')
const app = express()
const history = require('connect-history-api-fallback')

const opn = require('opn')
const address = require('address')

function staticServer ({
    port = 1234,
    baseUrl = '/',
    outputDir = 'dist'
} = {}){
    let url = `http://${address.ip()}:${port}${baseUrl}`
    app.use(history({ htmlAcceptHeaders: ['text/html', 'application/xhtml+xml'] }))
    // 指定映射目录
    app.use(baseUrl, express.static(outputDir))
    // 创建服务端
    http.createServer(app).listen(port, function () {
        console.log(`本地测试服务器启动:  ${url}`)
        opn(url)
    });
}
module.exports = staticServer
