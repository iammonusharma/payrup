const User=require("../models/user")


exports.getUserdById=(req,res,next,id)=>{
    
    User.findById(id).exec((err,user)=>{
        if(err || !user){
            return res.status(400).json({
                error:"No user found in DB"
            })
        }
        req.profile=user
        next()
    })
}

exports.getUser=(req,res)=>{
    req.profile.salt=undefined
    req.profile.encry_password=undefined
    req.profile.createdAt=undefined
    req.profile.updatedAt=undefined
    return res.json(req.profile)
}

exports.getAlluser=(req,res)=>{
    User.find().exec((err,users)=>{
        if(err || !users){
            res.status(400).json({
                error:"No Users in DB"
            })
        }
        users.salt=undefined
        users.encry_password=undefined
        users.createdAt=undefined
        users.updatedAt=undefined
        return res.json(users)
    })
    
}

exports.updateUser=(req,res)=>{
    User.findByIdAndUpdate(
        { _id:req.profile._id},
        {$set:req.body},
        {new:true,useFindAndModify:false}
    ).exec((err,user)=>{
        if(err){
            res.status(400).json({
                error:"You are not authorized to update this user"
            })
        }
        user.salt=undefined
        user.encry_password=undefined
        user.createdAt=undefined
        user.updatedAt=undefined
        return res.json(user)
    })
    
}


