import execjs,os

# 正常
ctx = execjs.compile("""
            function add(x, y) {
                return x + y;
            }
""")
print(ctx.call("add", 1, 2))



# 需要下面的代码能执行成功
# http://mockjs.com/dist/mock
paths = os.path.dirname(__file__)
print(paths)
file = paths + "/js/mock.js"
print(file)

ctx = execjs.compile("""
        function getData() {
            // 使用 Mock
            var data = Mock.mock({
                'list|1-10': [{
                    'id|+1': 1
                }]
            });

            return JSON.stringify(data, null, 4);
        }
""")
print(ctx.call("getData"))


# 想借助这样的形式：
# // 配置 Mock 路径
# require.config({
#     paths: {
#         mock: 'http://mockjs.com/dist/mock'
#     }
# })
# // 加载 Mock
# require(['mock'], function(Mock){
#     // 使用 Mock
#     var data = Mock.mock({
#         'list|1-10': [{
#             'id|+1': 1
#         }]
#     })
#
#
#     document.write(JSON.stringify(data, null, 4))
#     // // 输出结果
#     // document.body.innerHTML +=
#     //     '<pre>' +
#     //     JSON.stringify(data, null, 4) +
#     //     '</pre>'
# })