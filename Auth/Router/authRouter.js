const express=require("express")
let app=express();
let jwt=require('jsonwebtoken')
app.use(express.json());
let authRouter=express.Router();
let cookieParser=require("cookie-parser")
let model=require("../Model/userModel")
app.use(cookieParser())
const bc=require("bcrypt");
const JWT_KEY="gsdfg984tsdfg489w3"
const {getUser,postUser,updateUser,deleteUser,protectRout,refresh}=require("../Controller/userController")

authRouter.route('/').get(getSignUp).post(postSignUp);

authRouter
.route('/login')
.post(userLogin)

authRouter
.route('/refresh')



authRouter
.route('/signup')
.get(protectRout,getUser)
.post(postUser)
.delete(deleteUser)
.patch(updateUser)


// app.get("/",(req,res)=>{

//     res.sendFile('./Sign Up/signup.html',{root:__dirname});
// })


function getSignUp(req,res)
{
    

        res.sendFile('./Sign Up/signup.html',{root:__dirname});
       


    
}



function postSignUp(req,res)
{
    

        
      console.log(req.body);
      res.send(req.body);

   
}

async function userLogin(req,res)
{
      try{let data=req.body;
            let user=await model.findOne({email:data.email})
            
            if(user)
            {
                  if(data.password==user.password)
                  {
                        let yid=['_id'];
                        let token=jwt.sign({payload:yid},JWT_KEY)
                        res.cookie("login",token,{httpOnly:true}) 
                        
                         return res.send("User Logged IN").status(200)
                             
                        
                  }
                  else{
                        res.send("Invalid Password").status(401);
                       
                        
                  }
            }
            else
            {
                  res.send("User not Found")
            }
      }
      catch(err)
      {
            res.json({
                  messege:err.messege
            })
                  
            
      }

      

      
}



module.exports=authRouter;