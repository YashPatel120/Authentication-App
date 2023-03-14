const express = require('express')
const app = express();
const auth = require("request/lib/auth");
const cookieParser=require('cookie-parser');
app.use(cookieParser());

let model=require("./Model/userModel")

const port = 3000;

app.use(express.json());

let authRouter=require("./Router/authRouter")
// let userRouter=require("./Router/userRouters")


// app.use('/user',userRouter);
app.use('/auth',authRouter);









  



// (async function createUser(){

//         let obj={
//             name:"vithal",
//             email:"jkl@lkj.com",
//             password:"0987654321"

//         }

//         let data=await model.create(obj);
//         console.log(obj)

// })();






app.listen(3000,() => {
  console.log(`Example app listening on port ${port}`)
})


