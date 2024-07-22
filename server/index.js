const express = require("express");

const app = express();

const bodyParser = require("body-parser");

const bcrypt = require("bcrypt");

const path = require("path");

const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/",{
    useNewUrlParser:true,
    useUnifiedTopology:true,
})

const userShema = new mongoose.Schema({
    name:String,
    surname:String,
    age:Number,
    gender:String,
})

const User = mongoose.model("User",userShema)