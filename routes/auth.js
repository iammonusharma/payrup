var express = require('express')
var router = express.Router()
const { check, validationResult } = require("express-validator");

const {signout,signup,signin,isSignedIn}=require("../controllers/auth")

router.get("/logout",signout)
router.post("/register",[
    check("name","name should be atleast 3 char").isLength({min:3}),
    check("username","username should be atleast 6 char").isLength({min:6}),
    check("email","email is required").isEmail(),
    check("password")
    .isLength({ min: 5 })
    .withMessage('must be at least 5 chars long')
    .matches(/\d/)
    .withMessage('must contain a number')
    
],signup)

router.post("/login",[
    check("email","email is required").isEmail(),
    check("password")
    .isLength({ min: 1 })
    
],signin)

router.get("/test",isSignedIn,(req,res)=>{
    res.json(req.auth)
})

module.exports=router;