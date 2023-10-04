const express= require("express");
const Places= require("./models/Places");
const cors = require("cors");
const fs=require('fs');

const app = express();
app.use(express.json());
app.use(
    cors({
      credentials: true,
      origin:"http://127.0.0.1:5173",
    })
  );
app.get("/test",(req,res)=>{
    res.json("test ok");
})
app.get("/",(req,res)=>{
    const data=Places;
    res.json(data);
})
// app.get("/:id",async (req,res)=>{
//   const {id}=req.params;
//   const data=await Places.findById(id);
//   res.json(data);
// })

// app.get(`/:location`,async (req,res)=>{
//     const {loc} =req.params;
//     console.log(loc);
//     const data= await Places.filter(place=>place.location==loc);
//     res.json(data);
// })

app.listen(5000, console.log("server is running on port 5000."));