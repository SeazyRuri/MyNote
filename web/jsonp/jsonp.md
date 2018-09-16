# JSONP

jsonp是使用`script`标签获取数据，他不受浏览器的同源策略限制，可以跨域获取数据

优点：

* 可以跨域
* 兼容性好

缺点：

* 只支持get
* 调用失败不返回状态码
* 存在一定的安全性问题，由于可以跨域，如果返回的信息包含敏感内容，而用户的cookie没过期，容易被恶意网站利用
* 如果callback没有过滤，存在XSS安全漏洞。

浏览器端代码：

```javascript
function jsonp(url,data,callback){
        let script = document.createElement("script");
        let _callback = 'jsonpcb'+Math.random().toString(36).substring(2);
        script.src=`${url}?${querystring(data)}&callback=${_callback}`

        window[_callback] = function(data){
            callback(data);
            document.body.removeChild(script);
            delete window[_callback];
        }
        document.body.appendChild(script);
        function querystring (data){
            let qs=[];
            for(let key in data){
                if(!data.hasOwnProperty(key))return;
                qs.push(`${key}=${data[key]}`);
            }
            return qs.join('&');
        }
    }
```

express服务器示例

```js
var express = require('express');
var app = express();
app.get('/jsonp/', function (req, res, next) {
    res.set('Content-Type', 'application\/json;charset=utf0-8')
    let _callback = req.query.callback;
    if (_callback && _callback.indexOf("jsonpcb") == 0)
        res.send(`${_callback}(${JSON.stringify(req.query)})`);
    else res.send(req.query);
});
if (!module.parent) {
    app.listen(80, function () {
        console.log("静态网页已经部署")
    });
}

module.exports = app;
```

