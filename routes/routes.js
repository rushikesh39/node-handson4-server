const route=require("express").Router();
const {register,login}=require("../controller/userController")

route.post("/register",register)
route.post("/login",login)
route.get("/dashboard",)
module.exports=route;