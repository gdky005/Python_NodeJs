var Mock = require('mockjs');

function getMockJS(response) {
    var text = "{\"list|1-10\": [{\"id|+1\": 1}]}";

    var data = Mock.mock(JSON.parse(text));

    var responseData = JSON.stringify(data, null, 4);


    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write(responseData);
    response.end();
}

exports.getMockJS = getMockJS;