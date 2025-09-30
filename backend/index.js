const express = require('express')
const app = express()
const prisma = require("./config/db")

const authRoutes = require("./routes/auth.routes")



const cors = require('cors')
app.use(cors())

require('dotenv').config()
app.use(express.json())

const PORT = 3000

//test
app.get("/ping",async (req,res)=>{
    try{
        const data =  await prisma.users.findMany({
            where:{
                id : 1
            }
        })
        return res.send(data)

    }catch(err){
        console.log(err)
        return res.status(400).send("Something went wrong"+ err)
    }

})

app.use("/auth",authRoutes)


app.listen(PORT,()=>{
    console.log("Server is running")
})