const express = require("express")

const {registerUsers,loginUsers} = require("../controllers/auth.controller")

const router = express.Router()

router.post("/register",registerUsers);

router.post("/login",loginUsers);

module.exports = router;