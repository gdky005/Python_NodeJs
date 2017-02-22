var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requestHandlers");

var handle = {};
// handle["/"] = requestHandlers.getMockJS;
handle["/getMockJS"] = requestHandlers.getMockJS;

server.getMockJS(router.route, handle);