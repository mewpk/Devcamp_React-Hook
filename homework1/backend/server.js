const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());

app.use(cors());

app.listen(3000 , ()=>{
    console.log("SERVER START PORT ===> 3000");
})
