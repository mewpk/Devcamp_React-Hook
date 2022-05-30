const express = require('express');
const router = express.Router();

router.get("/" , async (req,res)=>{
    res.json({
        data : {
            status : "Success!"
        }
    }).status(200)
})
router.post("/login" , async (req,res)=>{

    

})



module.exports = router