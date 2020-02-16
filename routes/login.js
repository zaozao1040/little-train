var express = require('express');
var router = express.Router();
const {login}=require('../controller/login')
const { SuccessModel, ErrorModel } = require('../model/resModel')

router.post('/login', function(req, res, next) {
  const { phoneNumber,password } = req.body
  const result = login(phoneNumber,password)
  console.log('result',result)
  return result.then(data=>{
    if(data.phone_number){
      
      //设置session
      req.session.phoneNumber = data.phone_number
      req.session.userName = data.user_name
      res.json(
        new SuccessModel('登录成功')
      )
      return
    }
    res.json(
      new ErrorModel('登录失败')
    )
  })
  // res.json({
  //   errno:0,
  //   data:{
  //     phoneNumber,
  //     password
  //   }
  // })
});

module.exports = router;
