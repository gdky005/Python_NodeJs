var exec = require("child_process").exec;

var Mock = require('mockjs')

function start(response) {
    console.log("Request handler 'start' was called.");

    // exec("ls -lah", function (error, stdout, stderr) {
    //
    //     response.writeHead(200, {"Content-Type": "text/plain"});
    //     response.write(stdout);
    //     response.end();
    // })

    // exec("find /",
    //     {timeout: 10000, maxBuffer: 20000 * 1024},
    //     function (error, stdout, stderr) {
    //         response.writeHead(200, {"Content-Type": "text/plain"});
    //         response.write(stdout);
    //         response.end();
    //     });

    var text = "{\"list|1-10\": [{\"id|+1\": 1}]}";

    var data = Mock.mock(JSON.parse(text));

    var responseData = JSON.stringify(data, null, 4);


    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write(responseData);
    response.end();


}

function upload(response) {
    console.log("Request handler 'upload' was called.");
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hello Upload");
    response.end();
}

exports.start = start;
exports.upload = upload;