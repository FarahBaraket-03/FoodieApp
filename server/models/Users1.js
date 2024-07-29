const mongoose=require('mongoose');

const Userschema= new mongoose.Schema({
    username:{type:String, required:true,unique:true},
    password:{type:String, required:true}
    
})

const UserModel=mongoose.model("users1",Userschema);

module.exports=UserModel;
