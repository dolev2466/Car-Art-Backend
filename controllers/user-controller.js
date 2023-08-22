const HttpError = require('../models/http-error');
const User = require('../models/user');
const jwt = require("jsonwebtoken");


const login = async (req,res,next) =>{
    const {username,password}= req.body;
    console.log(req.body);
    const identifiedUser = await User.findOne({username});
    if(!identifiedUser || identifiedUser.password != password){
        const error = new HttpError('Could not identify user , credentials  to be wrong',404);
        return next(error);
    }
    const token = jwt.sign({ username }, "MakeThingsGoRight", { expiresIn: "5h" });
    res.json(token);
 };

 exports.login = login;