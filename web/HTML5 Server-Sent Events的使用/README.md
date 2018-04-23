# HTML5 Server-Sent Events:EventSource 的使用
写于：2018年04月23日
##概要
- Server-Sent Events(SSE)的使用场景：在浏览器和服务器建立连接后，服务器单方面地、不间断地发送信息给浏览器，即当应用只需要从服务器推送数据到浏览器，就可以考虑使用SSE。
- SSE的特点：
1.建立在HTTP的基础上的持续连接。
2.使用简单，服务器只需设置相应的响应头部格式。

## 如何使用
### 浏览器
浏览器通过`EventSource`对象来实现SSE的功能。
#### EventSource
##### 构造器
```javascript
//同源
var url;
url='/stream';
/**
//如果服务器和浏览器支持跨域，也可以写成
url='http(s)://IPAdress:port/stream';
**/
//创建一个可以从特定url接收SSE的EventSource实例
var source=new EventSource(url);
```
##### 属性
`readyState`（只读）：一个用来表示连接的状态的数字，可能的取值有`CONNECTION`(`0`)、`OPEN`(`1`)、`CLOSE`(`2`)。
`url`(只读)：EventSource实例的URL。
`withCredentials`(只读)：A Boolean indicating whether the `EventSource` object was instantiated with cross-origin ([CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)) credentials set (`true`), or not (`false`, the default).
##### 事件处理

##### 方法

##### 例子

### 服务器实现 - expressJS 版
#### 极其简单的实现
#### 注意事项
##### 格式
##### 两次换行
##### express中间件compress的处理
