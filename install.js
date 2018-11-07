const rf= require("fs");
console.log('--__dirname--', __dirname)
rf.readFile("package.json",'utf-8',function(err,data){
  if(err){
    console.log("error");
  }else{
    console.log(data)
    if (typeof data === 'string') {
      let before = JSON.stringify(data)
      let s = before.match(/scripts(.*?)}/)[0]
      let temp = s.substr(0,s.length-5) + ',\\n    \\"static-server\\": \\"node ./node_modules/vue-static-server/index.js\\"\\n  }'
      let result = before.replace(/scripts(.*?)}/,temp)
      rf.writeFile('package.json', JSON.parse(result),  function(err) {
        if (err) {
          return console.error(err);
        }
        console.log("数据写入成功！");
      })
    }
  }
});
console.log("Install Scripts OK !");