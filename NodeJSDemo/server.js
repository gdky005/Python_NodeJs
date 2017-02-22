var http = require("http");
var url = require("url");

function getMockJS(route, handle) {
    function onRequest(request, response) {
        var pathname = url.parse(request.url).pathname;
        route(handle, pathname, response);
    }

    http.createServer(onRequest).listen(8888);
}

exports.getMockJS = getMockJS;