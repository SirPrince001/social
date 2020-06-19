const User = require("../models/user");
const Bcrypt = require("bcryptjs");
require("../utils/response");
require("dotenv").config();

exports.registerUser = async (request) => {
  let { name, email, password, username } = request.body;

  //hash the password
  password = Bcrypt.hashSync(request.body.password, 10);
  //check if user exist
  let existingUser = User.findOne({ email: request.body.email });

  if (!existingUser) {
    let newUser = new User({
      name: name,
      email: email,
      password: password,
      username: username,
    });

    let data = await newUser.save();
    data = data.toJSON();
    data.password;
    delete password;
    return new Response(200, data);
  }
};

//login user
exports.loginUser = async (request) => {
  //check if user is login
  let uLogin = User.findOne({ email: request.body.email });
  if (!uLogin)
    throw new ResponseError(400, "Please login with another credentials");

  // compare the hashed password
  if (!Bcrypt.compareSync(request.body.password, uLogin.password)) {
    throw new ResponseError(400, "Password do not matech");
  } else {
    return new Response(200, data);
  }
};


// update user
exports.updateUser = async (request)=>{
    let {name,email,password} = request.body

    // check if the fields are empty
    if(!name && !email && !password) 
    // find the user to be updated
    let updatedUser = findOne({email:request.body.email})
    if(!updatedUser){
       throw new ResponseError(400, 'provide credentials')
    }else{
        let pass = Bcrypt.hashSync(request.body.password,10)
        await User.findOneAndUpdate({email:email} , {$set{password:pass}})
        return new Response(200,pass)
    }
}