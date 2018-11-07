<div align="center">
  <h1>vue-static-server<br><em>打开vue-cli-service build后的页面</em></h1>
  <div>
    <a href="https://github.com/zhangyuhan2016/vue-static-server/releases">
        <img src="https://img.shields.io/github/release/zhangyuhan2016/vue-static-server/all.svg"/>
    </a>
    <a href="https://github.com/zhangyuhan2016/vue-static-server/commits/master">
        <img src="https://img.shields.io/github/last-commit/zhangyuhan2016/vue-static-server.svg"/>
    </a>
    <a href="#">
        <img src="https://img.shields.io/badge/%40vue%2Fcli-3.x-green.svg">
    </a>
  </div>
  <a href="https://nodei.co/npm/vue-static-server/"><img src="https://nodei.co/npm/vue-static-server.png"></a>
</div>

### 安装
```
// Install
npm i vue-static-server -D
// UnInstall
npm uninstall vue-static-server -D
```
### 使用
```
npm run static-server
```
### 用途
启动本地测试服务器,用于检测服务器上的程序是否可以正确运行


### 更新
* 0.0.14 支持history模式,写入scripts
* 0.0.6  可以运行

### 构建
* 使用 express 作为静态服务器
* 使用 opn 打开浏览器
* 使用 address 获取IP地址
* 使用 connect-history-api-fallback 支持history

