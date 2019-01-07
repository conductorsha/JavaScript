var express = require('express');
var parser = require('body-parser');
var router = express.Router();
router.use(parser.json());

router.post('/jsondata', (req,res)=>{
    let body = req.body;
    let worker ={
        name: body.name,
        email : body.email,
        position: body.position
    };
    res.render('jsondata', {worker : worker});
});

module.exports = router;