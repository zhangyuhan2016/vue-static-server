## vue-static-server
>请在vue@cli 3.0 + 项目中使用
### 指南
```
// Install
npm i vue-static-server -D
// UnInstall
npm uninstall vue-static-server -D
```
### 使用
```
const staticServer = require('vue-static-server')
staticServer({
    port: 1234,       // 端口号
    baseUrl:  '/',    // 路径
    outputDir: 'dist' // npm run build 后的输出路径
})
```
### 介绍
启动本地测试服务器,用于检测服务器上的程序是否可以正确运行
### 构建
* 使用 express 作为静态服务器
* 使用 opn 打开浏览器
* 使用 address 获取IP地址

