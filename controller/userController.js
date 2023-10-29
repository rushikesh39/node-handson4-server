const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const saltround = 8;
const secreatekey = "@123";
const arr = [];
const register = (req, res) => {
  const data = req.body;
  console.log("register", data);
  const user = arr.find((item) => item.email === data.email);
  if (user) {
    return res.send({ msg: "user is already exist" });
  }
  const hashpassword = bcrypt.hashSync(data.password, saltround);
  const temp = {
    name: data.name,
    email: data.email,
    mobile: data.mobile,
    password: hashpassword,
  };
  arr.push(temp);
  const token = jwt.sign({ email:data.email}, secreatekey,{expiresIn:"1m"});
 return res.send({ msg: "user Register successfully", token: token});
  console.log(arr);
};
const login = (req, res) => {
  const data = req.body;
  console.log("login", data);
  const user = arr.find((item) => item.email === data.email);
  if (user) {
    const password = bcrypt.compareSync(data.password, user.password);
    if (password) {
      const token = jwt.sign({ email: data.email }, secreatekey,{expiresIn:"1m"});
      return res.send({ msg: "Success", token: token });
    } else {
      return res.send({ msg: "password is wrong" });
    }
  } else {
    return res.send({ msg: "user Not exist" });
  }
  console.log(arr);
};
const home = (req, res) => {
  res.send("Home page");
};
module.exports = { register, login, home };
