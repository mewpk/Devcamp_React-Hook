const jwt = require("jsonwebtoken")

const AuthenticateToken = async (req,res)=>{
    let token = req.headers.authorization ; 
    if (!token) {
        res.send()
    }


}



module.exports = AuthenticateToken;




