let arr=[];
const jwt=require('jsonwebtoken');
const bcrypt=require('bcrypt');
const secretkey='@123';
const saltround=10;
const register=(req,res)=>{
    const details=req.body;
    const find=arr.find((item)=>details.email===item.email);
    if(find){
        return res.send({msg:'registered'});
    }
    const hashpassword=bcrypt.hashSync(details.password, saltround);
    const temp={
        userName:details.userName,
        mobile:details.mobile,
        email:details.email,
        password:hashpassword,
    };
    arr.push(temp);
    const token=jwt.sign({email:details.email},secretkey,{expiresIn:"2m"});
    res.send({msg:'user is registered',result:arr, token});
    console.log(arr)
};
const login=async(req,res)=>{
    const details=req.body;
    console.log(details)
    const find=arr.find((item)=>details.email=== item.email);
    if(!find){
        return res.statusCode(200).send({msg:"user not registerd"});
    }
    const validate = await bcrypt.compare(details.password, find.password)
    if(!validate){
        return response.status(401).send({msg : 'password is wrong'})
    }
   
    const token=jwt.sign({email:details.email},secretkey,{expiresIn:'5m'});
    return res.send({msg:'user is loged in successfully',token:token});
   
}
module.exports={register,login}

