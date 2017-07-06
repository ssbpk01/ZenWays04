var express = require('express')
var router = express.Router()
var mongoose = require('mongoose')

/* Model Import */
var dog = require('./models/dog.js')

/* Mongoose connection */
mongoose.connect('mongodb://admin:12345@ds139942.mlab.com:39942/comaaditya')

/* Page Routes */
router.get('/',function(req,res){
  res.send("Hello World !")
})

router.post('/',function(req,res){
  res.send('Hello POST !')
})

router.get('/name/:user_name',function(req,res){
  res.status(200)
  res.set('Content-type','text/html')
  res.send('<html><body>Hi! '+req.params.user_name+'</body></html>');
})

router.post('/username',function(req,res){
  var username = req.body.username
  res.send(username)
})

router.post('/registration',function(req,res){
  var firstName = req.body.firstName
  var lastName = req.body.lastName
  var email = req.body.email
  var phone = req.body.phone

  res.json(firstName)
})

router.post('/dogName',function(req,res){
  var dogName = req.body.name

  dog.findOne({'name':dogName},function(err,data){
    if(err) {
      res.send(err)
    }
    res.json(data)
  })
})

module.exports = router
