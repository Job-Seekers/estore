const router = require('express').Router();
let User = require('../models/user.model');

router.route('/').get((req,res) =>{

    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err));

});

router.route('/add').post((req,res) => {

    const Username = req.body.Username;
    const password=req.body.password;
    const email=req.body.email;
    const type =req.body.type;
    const fullname= req.body.fullname;
    const country = req.body.country;
    const phone= req.body.phone;
    const newUser = new User({Username,password,email,type,fullname,country,phone});

    newUser.save()
        .then(()=> res.json('User Added!'))
        .catch(err => res.status(400).json('Error: ' + err ));

});


module.exports = router;
