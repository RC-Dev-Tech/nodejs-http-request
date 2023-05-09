# ![](https://drive.google.com/uc?id=10INx5_pkhMcYRdx_OO4rXNXxcsvPtBYq) NodeJs - Http Request
> ##### 理論請自行找，網路上有很多相關的文章，這邊只關注於範例實作的部分.

---

<!--ts-->
## 目錄:
* [簡介](#簡介)
* [實作範例](#實作範例)
* [操作說明](#操作說明)
* [切換範例](#切換範例)
* [延伸項目](#延伸項目)
* [參考資料](#參考資料)
* [備註](#備註)
<!--te-->

---

## 簡介:

原本這篇是想要介紹***request***[^1]跟****request-parmire***[^2]的應用範例，但是因為這兩個套件已經不在維護，<br>
所以這邊就改成介紹如何使用原生的http模組去進行request[^3]的實作範例[^4].<br>
<br>
原生http在打對方api的時候，可以使用兩種方法，分別是get()跟request(),
- get() 這個方法並不支援在請求中傳遞body資料，因為它是用GET方法發送請求.
- requset() 這個方法目前是原生http在打api最泛用的一個方法，<br>
            其method包含了所有(GET、POST、PUT、DELETE)

## 實作範例:
- [Example1](https://github.com/RC-Dev-Tech/nodejs-http-request/blob/main/src/examples/example1.ts) - Hello World.
- [Example2](https://github.com/RC-Dev-Tech/nodejs-http-request/blob/main/src/examples/example2.ts) - http.get().
- [Example3](https://github.com/RC-Dev-Tech/nodejs-http-request/blob/main/src/examples/example3.ts) - http.request().

---

## 操作說明:
#### 1. 安裝套件
> npm install --save
#### 2. 編譯 & 運行
> npm run start

---

## 切換範例:
> 編輯在app.json中的"exsample_mode"，填入的數字代表第幾個範例.

---

## 延伸項目:
* [NodeJs 系列實作](https://github.com/RC-Dev-Tech/nodejs-index) <br>

---

## 參考資料:
* [Node.js HTTP Module](https://www.w3schools.com/nodejs/nodejs_http.asp) <br>
* [Node.js GET/POST请求](https://www.runoob.com/nodejs/node-js-get-post.html) <br>
* [Node.js - anatomy-of-an-http-transaction](https://nodejs.org/zh-cn/docs/guides/anatomy-of-an-http-transaction) <br>
* [Node.js - 該如何用 Node.js 核心模組發送 request 呢？](https://littlehorseboy.github.io/2020/08/02/202008-node-request/#%E7%A8%8B%E5%BC%8F%E7%A2%BC%E9%80%90%E8%A1%8C%E8%AA%AA%E6%98%8E) <br>

---

<!--ts-->
#### [目錄 ↩](#目錄)
<!--te-->

---

## 備註:
[^1]: [npm request](https://www.npmjs.com/package/request) 已於2020年2月起，停止維護，並不在推薦使用.
[^2]: [npm request-promise](https://www.npmjs.com/package/request-promise) 已於2020年2月起，停止維護，並不在推薦使用.
[^3]: 這邊的範例需要模擬一個可以打API的地方，這邊我們可以使用[nodejs-express-rest-api](https://github.com/RC-Dev-Tech/nodejs-express-rest-api)的範例.
[^4]: http.request是node.js中類似curl功能，主要是用來模擬HTTP的動作
