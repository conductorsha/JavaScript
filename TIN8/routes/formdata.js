var express = require('express');
var router = express.Router();

router.post('/formdata', (req,res, next)=>{
    let body = req.body;
    let person ={
        name: body.name,
        email : body.email,
        number: body.number
    };
    res.render("formdata", person);
});

module.exports = router;