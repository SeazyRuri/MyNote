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