const express = require('express')
const authRouter = require("../Router/authRouter");
let cookieParser=require("cookie-parser")
const app=express();
let model=require("../Model/userModel");

// const { response } = require('express');
app.use(cookieParser());
let userRout=express.Router();

let jwt=require('jsonwebtoken')

const JWT_KEY="gsdfg984tsdfg489w3"




userRout
.route('/')
.get(protectRout,getUser)
.post(postUser)
.delete(deleteUser)
.patch(updateUser)

// userRout
// .route('/cookies')
// .get(getCookies)
// .post(setCookies)



module.exports=userRout;