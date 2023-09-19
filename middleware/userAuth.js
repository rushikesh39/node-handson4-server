let arr=[];
const jwt=require('jsonwebtoken');
const bccrypt=require('bcrypt');
const secretkey='@123';
const saltround=10;
const register=(req,res)=>{
    const details=req.body;
    const find=arr.find((item)=>details.email===item.email);
    if(find){
        return res.send({msg:'email already registered'});
    }
    const hashpassword=bcrypt.hashSync(details.password, saltround);
    const temp={
        email:details.email,
        password:hashpassword,
    };
    arr.push(temp);
    const token=jwt.sign({email:details.email},secretkey,{expiresIn:""});
    res.send({msg:'user is registered',result:arr, token});
};
const login=async(req,res)=>{
    const details=req.body;
    const find=arr.find((item)=>details.email=== item.email);
    if(!find){
        return res.statusCode(200).send({msg:"user not registerd"});
    }
    const token=jwt.sign({email:details.email},secretkey);
    return res.send({msg:'user is loged in successfully',token:token});
}
module.exports={register,login}