var http = require("http");
var url = require("url");

// function start(route, handle) {
//     function onRequest(request, response) {
//         var pathname = url.parse(request.url).pathname;
//         console.log("Request for "+ pathname +" received.");
//
//         route(handle, pathname, response);
//     }
//
//     http.createServer(onRequest).listen(8888);
//     console.log("Server has started.");
// }

var myUrl = "http://www.baidu.com/xiaopatch?name=wangqing&age=22";
var p = url.parse(myUrl, true);

console.log(p.query.age);