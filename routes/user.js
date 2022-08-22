const express=require("express")
const router=express.Router()

const {getUser,getUserdById,getAlluser,updateUser} =require("../controllers/user")
const {isSignedIn,isAuthenticated,isAdmin} =require("../controllers/auth")
router.param("userId",getUserdById)
router.get("/users",isSignedIn,isAuthenticated,isAdmin,getAlluser)
router.get("/profile/:userId",isSignedIn,isAuthenticated,getUser)
router.put("/user/:userId",isSignedIn,isAuthenticated,updateUser)


module.exports=router;