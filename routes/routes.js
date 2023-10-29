
const { register, login, home } = require("../controller/userController")
const auth = require("../middleware/userAuth")

const user=require("express").Router()

user.post("/register",register)
user.post("/login",login)
user.get("/",auth,home)

module.exports=user