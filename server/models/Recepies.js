const mongoose=require('mongoose');

const RecepieSchema= new mongoose.Schema({
    name:{type:String, required:true},
    description:{type:String, required:true},
    imageURL:{type:String, required:true},
    ingredients:{type:[{
        type: String,
        required: true,
      },]},
    cookingTime:{type:String, required:true},
    userOwner:{
        type: String,
        required: true,
       required:true}
})

const RecepieModel=mongoose.model("recepies",RecepieSchema);

module.exports=RecepieModel;
