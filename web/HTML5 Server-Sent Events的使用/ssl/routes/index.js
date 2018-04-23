var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});
router.get('/stream', (req, res, next) => {
  console.log(1122)
  if (true) {
      res.writeHead(200, {
          "Content-Type": "text/event-stream",
          "Cache-Control": "no-cache",
          "Connection": "keep-alive",
          "Access-Control-Allow-Origin": "*",
      });
      res.write("retry: 10000\n");
      res.write("event: connecttime\n");
      res.write("data: " + (new Date()) + "\n\n");
      res.write("data: " + (new Date()) + "\n\n");

      interval = setInterval(function () {
          console.log(new Date());
          res.write("data: " + (new Date()) + "\n\n");
      }, 1000);

      req.connection.addListener("close", function () {
          clearInterval(interval);
      }, false);
  }
});
module.exports = router;
