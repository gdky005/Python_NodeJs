import execjs, os


# # 执行本地自定义的js
# print(execjs.compile('function test(){'
#                      'return 5'
#                      '}'
#                      ''
#                      ''
#                      '').call("test"))

paths = os.path.dirname(__file__)

print(paths)

dir = paths + "/js/modules.js"

execjs.eval(dir)

print(dir)
# #执行*.js里的文件
print(execjs.compile(open(dir).read()).call('add',3,4))