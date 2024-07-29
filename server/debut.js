
const express=require("express");
const cors=require("cors");
const mongoose=require("mongoose");
const routerUser=require("./routes/Users1")
const routerRecepie=require("./routes/Recepies");
const app=express();
require("dotenv").config()
app.use(cors())
app.use(express.json());

app.use("/auth",routerUser)
app.use("/recepie",routerRecepie)

mongoose.connect(process.env.Url)




app.listen(3010,()=>{console.log('server strated !!! ')})