const express = require("express");

const mongoose = require("mongoose")



//middleware
const cors = require("cors")
app.use(cors())
const app = express();
app.use(express.json())

mongoose.connect("mongodb://localhost:27017/",{
    useNewUrlParser:true,
    useUnifiedTopology:true,
})

const userShema = new mongoose.Schema({
    firstname:String,
    lastname:String,
    age:Number,
    gender:String,
})

const User = mongoose.model("User",userShema)



app.post('/api/SignUp',async(req,res)=>{
    const {firstname,lastname,age,gender} = req.body
    try{
        const newUser = new User({
            firstname:firstname,
            lastname:lastname,
            age:age,
            gender:gender
        })
        await newUser.save()
        res.status(201)
    }
    catch(err){
        res.status(400)
    }

})

app.listen(5000,()=>{
    console.log("Server started")
})