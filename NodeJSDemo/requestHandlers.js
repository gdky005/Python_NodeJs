var Mock = require('mockjs');
var url = require('url');
var qs = require('querystring');

function getMockJS(request, response) {
    // 请求的地址是： http://127.0.0.1:8888/getMockJS?key=123&key2=222

    // var str = request.url;  ->  /getMockJS?key=123&key2=222
    // var str = url.parse(request.url).pathname;  -> /getMockJS
    // var str = url.parse(request.url).query;  -> key=123&key2=222


    var p = url.parse(request.url, true);
    var text = p.query.json;

    console.log("request 的数据是：" + text);

    var data = Mock.mock(JSON.parse(text));
    var responseData = JSON.stringify(data, null, 4);

    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write(responseData);
    response.end();
}

exports.getMockJS = getMockJS;