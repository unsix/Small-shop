var Mock = require("mockjs")
var express = require("express")
var router = express.Router();

router.use("/shopcart",function (req,res) {
  console.log(req.body);
  //调用mock方法模拟数据
  var data = Mock.mock({


}
  );
  return res.json(data);
})

module.exports = router;