const mongoose=require("mongoose");
const bc=require("bcrypt");
const emailV=require("email-validator")
const cookieParser=require('cookie-parser');

mongoose.set('strictQuery', true);
const db_link="mongodb+srv://Yash321:2102000@cluster0.lj5c3qc.mongodb.net/?retryWrites=true&w=majority"
// const db_link="mongodb+srv://Yash:2102000@cluster0.qw8fef5.mongodb.net/test"

mongoose.connect(db_link)
.then(function db(){
    console.log('db connected');
})
.catch(function(err)
{
    console.log(err);
})


const Schema=mongoose.Schema({

    name:{
        required:true,
        type:String,

    },

    email:
    {
        required:true,
        type:String,
        unique:true,
        validate: function(){
            return emailV.validate(this.email)},
        
    },
    // key:
    // {   required:true,
    //     type:String,

    // },
    password:
    {
        required:true,
        type:String,
        minLength:8,
    }
})

// Schema.pre('save',async function()
// {
//     let salt=await bc.genSalt();
//     let hash=await bc.hash(this.password,salt)
//     console.log(hash)
//     // this.key=salt;
//     this.password=hash;
    
// })



let model=mongoose.model("userModel",Schema);
module.exports=model;