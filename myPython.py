import execjs

# http://www.cnblogs.com/mumuli/p/5641791.html




print(execjs.get().name)

execjs.ExternalRuntime.name = "Mockjs"


# var Mock = require('mockjs')
# var data = Mock.mock({
#     // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
#     'list|1-10': [{
#         // 属性 id 是一个自增数，起始值为 1，每次增 1
#         'id|+1': 1
#     }]
# })
# // 输出结果
# console.log(JSON.stringify(data, null, 4))


print(execjs.get().name)

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









# a = execjs.eval("'red yellow blue'.split(' ')")
# print(a)

# ctx = execjs.compile("""
#             function add(x, y) {
#                 return x + y;
#             }
# """)
# print(ctx.call("add", 1, 2))

# ctx = execjs.compile("""
#         function getData() {
#         // 使用 Mock
#         var data = Mock.mock({
#             'list|1-10': [{
#                 'id|+1': 1
#             }]
#         });
#                 return JSON.stringify(data, null, 4);
#         }
# """)
# print(ctx.call("getData"))


# ctx = execjs.compile("""
#         function getData() {
#         // 使用 Mock
#         var data = Mock.mock({
#             'list|1-10': [{
#                 'id|+1': 1
#             }]
#         });
#                 return JSON.stringify(data, null, 4);
#         }
# """)
# print(ctx.call("getData"))


# var data = Mock.mock({
#             'list|1-10': [{
#                 'id|+1': 1
#             }]
#         });

# ctx = execjs.compile("""
#             var a = "hello1111";
#             var b = 1 +4;
#             function add() {
#                 return a + "_" + b;
#             }
#
#             function add2(x, y) {
#                 return x + "_" + y;
#             }
# """)
# print(ctx.call("add"))
# print(ctx.call("add2", 3, 5))

# execjs.ExternalRuntime.compile("/bin/mock.js")
#
# default = execjs.get()
# print(default.eval("1 + 2"))

# jscript = execjs.get("Node")
# print(jscript.eval("1 + 2"))
