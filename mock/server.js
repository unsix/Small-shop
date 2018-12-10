var express = require("express")
var app = express();

var router = express.Router();

app.get('/', function(req, res) {
  res.send('hello world');
});

router.use("/test",require('./text'));


app.use("/api",router)


app.listen(9095,function(){
  console.log('9095')
})
