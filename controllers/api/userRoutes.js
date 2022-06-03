const express = require('express');
const router = express.Router();
const {User,Character} = require('../../models');
const jwt = require("jsonwebtoken")
require("dotenv").config()
const bcrypt = require("bcrypt");
const {withAuth} = require("../../utils/tokenAuth")

// GET ALL
router.get("/",(req,res)=>{
    User.findAll({
        include:[Character]
    }).then(users=>{
        res.json(users)
    }).catch(err=>{
        console.log(err);
        res.status(500).json({msg:"an error occured",err})
    })
})
router.get("/verifyToken",withAuth,(req,res)=>{
    res.json({userId:req.user})
})

// GET ONE
router.get("/:id",(req,res)=>{
    User.findByPk(req.params.id,{
        include:[Character]
    }).then(user=>{
        if(!user) {
            return res.status(404).json({msg:"no record found!"})
        }
        res.json(user)
    }).catch(err=>{
        console.log(err);
        res.status(500).json({msg:"an error occured",err})
    })
})

// CREATE NEW
router.post("/",(req,res)=>{
    User.create(req.body).then(newUser=>{
        const token = jwt.sign({
            userId:newUser.id
        },process.env.JWT_SECRET,{
            expiresIn:"6h"
        })
        res.json({
            user:newUser,
            token:token
        })
    }).catch(err=>{
        console.log(err);
        res.status(500).json({msg:"an error occurred",err})
    })
})

// LOGIN
router.post("/login",(req,res)=>{
    User.findOne({
        where:{
            username:req.body.username
        }
    }).then(foundUser=>{
        if(!foundUser){
            return res.status(401).json({msg:"invalid login credentials"})
        }
        if(bcrypt.compareSync(req.body.password,foundUser.password)){
            const token = jwt.sign({
                userId:foundUser.id
            },process.env.JWT_SECRET,{
                expiresIn:"6h"
            })
            return res.json({
                user:foundUser,
                token:token
            })
        }
        return res.status(401).json({msg:"invalid login credentials"})
    })
})

module.exports = router;