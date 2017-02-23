# -*- coding:utf-8 -*-
import requests

jsonStr1 = "{\"number|1-100\":1}"
jsonStr2 = "{\"number|+1\": 202}"
jsonStr3 = "{ \"object|2-4\": { \"110000\": \"北京市\", \"120000\": \"天津市\", \"130000\": \"河北省\", \"140000\": \"山西省\" } }"

jsonStr = jsonStr3

url = "http://127.0.0.1:8888/getMockJS?json=" + jsonStr

response = requests.get(url)
# print(response.json())
print(response.content.decode("utf8", response.text))



# print(response.encoding)

#
# req = response
#
# if req.encoding == 'ISO-8859-1':
#     encodings = requests.utils.get_encodings_from_content(req.text)
#     if encodings:
#         encoding = encodings[0]
#     else:
#         encoding = req.apparent_encoding
# # encode_content = req.content.decode(encoding, 'replace').encode('utf-8', 'replace')
# # print(encode_content)


# text = req.content.decode(encoding, req.text)
# text = response.content.decode("utf-8", response.text)
# print(text)