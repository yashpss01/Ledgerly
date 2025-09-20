const {PrismaClient} = require("./generated/prisma")
const prisma = new PrismaClient();

const express = require("express")
const app = express();

const dotenv = require("dotenv")
dotenv.config();

const cors = require("cors")
app.use(cors())
app.use(express.json())


//sample
app.get("/testing",(req,res)=>{
    console.log("testing successful" )
    res.send("OK")
})







app.listen(3000,()=>{
    console.log("server is listening")
})
