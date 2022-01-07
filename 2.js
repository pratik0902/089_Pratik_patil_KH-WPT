const express=require("express");
const app=express();
app.use(express.json());
const cors=require("cors");
app.use(cors());
const {getall,postall}=require("./1");
app.get("/get",async(req,res)=>{
    const list=await getall()
    res.json(list);
});
app.post("/post",async(req,res)=>{
    const user=req.body;
    await postall(user);
    res.json("operation successfull");
})
app.listen(5000,()=>console.log("server started"));
