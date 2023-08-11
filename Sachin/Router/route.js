const route = require("express").Router()
const  signupcontroller = require("../Api/controller")

route.post('/signup',signupcontroller.signup);

module.exports=route;