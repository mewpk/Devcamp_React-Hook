const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const userCtrl = require("./routes/userCtrl")

app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());

app.use(cors());

app.get("/", async (req,res)=>{
    await res.json({data : {
        Status : "Success"
    }}).status(200)


} )

app.use("/user" , userCtrl);

app.listen(3000 , ()=>{
    console.log("SERVER START PORT ===> 3000");
})
