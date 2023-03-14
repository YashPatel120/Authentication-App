
const model=require("../Model/userModel")
let jwt=require('jsonwebtoken')
const JWT_KEY="gsdfg984tsdfg489w3"

module.exports.protectRout=function protectRout(req,res,next)
{
    
    if(req.cookies.login)
    {   let isVarified=jwt.verify(req.cookies.login,JWT_KEY)
        if(isVarified)
        {   console.log(isVarified)
            next();
        }
        else{
            res.json({
                messege:"user not verified"
            })
        }
        
    }
    else{
        
        res.json({
            messege:"User Not Logged In"
        })
    }
}


module.exports.getUser=async function getUser(req,res)
{       
        let get=await model.find();

        console.log(get);
        res.json({
            
            messege:"All users listed ",
            list:get
        })

        
}

module.exports.postUser=async function postUser(req,res)
{
    let user=req.body;
    let get=await model.create(user);

        console.log(get);
        res.json({
            messege:"${user} is added listed ",
            list:get
        })
        res.statusCode=201;

}

module.exports.deleteUser=async function deleteUser(req,res)
{
    let user=req.body;
    let delet=await model.findOneAndDelete({name:user.name})

        console.log(delet);
        res.json({
            messege:{user}+"is deleted ",
            list:delet
        })

}
module.exports.updateUser=async function updateUser(req,res)
{
    let update=req.body;
    let delet=await model.findOneAndUpdate({name:"yash23"},update)

        console.log(delet);
        res.json({
            messege:delet+"is updated ",
            list:delet
        })

}

module.exports.refresh=async function refresh(req,res)
{
    res.cookie("login",false)
}

// async function getCookies(req,res)
// {
   
// }
// async function setCookies(req,res)
// {
//     // res.cookie("isLoggedIn",true,);
//     res.cookie("isLoggedIn",false,);
//    res.cookie("isAuthorized",false);     
//    res.send("Cookie Sent")
// }