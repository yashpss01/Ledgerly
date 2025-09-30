const bcrypt = require("bcrypt")
const prisma = require("../app")
const registerUsers = async (req,res)=>{
    try{
        const {username,password,age,email} = req.body
        const newPassword = await bcrypt.hash(password,10)

        if (!(username) || !(password) || !(age) || !(email)){
            throw new Error("Something information is empty.")
        }
        const alreadyExist = await prisma.users.findUnique({
            where:{
                OR:{
                    username:username,
                    email:email
                }
            }
        })
        if (alreadyExist) {
            throw new Error("This username or email Already exists.")
        }
        
        const data = await prisma.users.create({
            username:username,
            age:age,
            email:email,
            password:newPassword
        })
        res.json(data)

    }catch(error){
        return res.status(400).send("Error Detected " + error)
    }

}

const loginUsers = async (req,res)=>{
    try{
        const {username,email,password} = req.body


        if (!(username) || !(email)){
            throw new Error("username and email both missing")
        }
        if (!password){
            throw new Error("password missing")
        }
        const data = await prisma.users.findUnique({
            where:{
                OR:{
                    username:username,
                    email:email
                }
            }
        })
        if (!data){
            throw new Error("No user with this username/email")
        }
        if (bcrypt.compare(password,data.password,10)){
            res.json(data) // granted
        }else{
            throw new Error("Password do not match")
        }
        
    }catch(error){
        return res.status(400).send("Error Detected " + error)
    }

}
module.exports = {registerUsers,loginUsers}