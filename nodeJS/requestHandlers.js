var exec = require("child_process").exec;

function start() {
    console.log("Request handler 'start' was called.");

    var content = "empty";

    exec("find /", function (error, stdout, stderr) {

        console.log("当前数据是：" + stdout);
        content = stdout;
    })

    return content;


    return "hello Start";
}

function upload() {
    console.log("Request handler 'upload' was called.");
    return "Hello Upload";
}

exports.start = start;
exports.upload = upload;