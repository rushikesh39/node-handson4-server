const express=require("express")
const user = require("./routes/routes")
const app=express()
const cors=require('cors')
app.use(express.json())
app.use(cors())
app.use('/api',user)

app.listen(5000,()=>{
    console.log("server is running on port 5000")
})