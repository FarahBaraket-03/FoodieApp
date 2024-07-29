const express=require("express");
const RecepieModel=require("../models/Recepies")
const UserModel=require("../models/Users1")
const routerRecepie=express.Router();
const mongoose=require("mongoose");

routerRecepie.get("/getall",async(req,res)=>{
    const AllRecepies= await RecepieModel.find({});
    res.status(200).json(AllRecepies);
    console.log(AllRecepies);
})

routerRecepie.get("/get/:id",async(req,res)=>{
    const AllRecepies= await RecepieModel.find({userOwner:req.params.id});
    res.status(200).json(AllRecepies);
})

routerRecepie.get("/getname/:id",async(req,res)=>{
    const user=await UserModel.findOne({_id:req.params.id});
    res.status(200).json(user.username);
})


routerRecepie.delete("/delete/:id",async(req,res)=>{
    const AllRecepies= await RecepieModel.deleteOne({_id:req.params.id});
    res.status(201).json(AllRecepies);
})

routerRecepie.post("/",async (req, res) => {
    const recipe = new RecepieModel({
      _id: new mongoose.Types.ObjectId(),
      name: req.body.name,
      description:req.body.description,
      ingredients: req.body.ingredients,
      imageURL: req.body.imageURL,
      cookingTime: req.body.cookingTime,
      userOwner: req.body.userOwner,
    });
    console.log(recipe);
  
    try {
      const result = await recipe.save();
      res.status(201).json({
        createdRecipe: {
          name: result.name,
          image: result.imageURL,
          ingredients: result.ingredients,
          description: result.description,
          _id: result._id,
          cookingTime: req.body.cookingTime,
        },
      });
    } catch (err) {
      // console.log(err);
      res.status(500).json(err);
    }
  });


routerRecepie.put("/update/:id",async(req,res)=>{
  try{
    const result=await RecepieModel.findByIdAndUpdate(req.params.id,req.body)
    res.status(201).json('update succesully')
  }
  catch(err){
    console.log(err)
  }
})

module.exports=routerRecepie;
