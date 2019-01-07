var express = require('express');
var router = express.Router();

router.post('/form', (req, res, next)=>{
    res.render("form");
    next();
});

module.exports = router;