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


    var data = Mock.mock({
        // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
        'list|1-10': [{
            // 属性 id 是一个自增数，起始值为 1，每次增 1
            'id|+1': 1
        }]
    });

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