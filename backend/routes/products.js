const router = require('express').Router();
let Product = require('../models/product.model');

router.route('/').get((req,res) =>{

    Product.find()
        .then(Products => res.json(Products))
        .catch(err => res.status(400).json('Error: ' + err));

});

router.route('/add').post((req,res) => {
  
    const title = req.body.title;
    const img = req.body.img;
    const price = Number(req.body.price);
    const company = req.body.company;
    const info = req.body.info;
    const inCart = req.body.inCart;
    const count = Number(req.body.count);
    const total = Number(req.body.total);
    const newProduct = new Product({title,img,price,company,info,inCart,count,total});
    
    newProduct.save()
    .then((newProduct)=> res.json(newProduct))
        .catch(err => res.status(400).json('Error: ' + err ));

});

router.route('/:id').get((req,res)=>{

    Product.findOne({"_id":req.params.id})
    .then(Products => res.json(Products))
    .catch(err => res.status(400).json('Error: ' + err));
});
router.route('/add').post((req,res) => {
  
    const title = req.body.title;
    const img = req.body.img;
    const price = Number(req.body.price);
    const company = req.body.company;
    const info = req.body.info;
    const inCart = req.body.inCart;
    const count = Number(req.body.count);
    const total = Number(req.body.total);
    const newProduct = new Product({title,img,price,company,info,inCart,count,total});
    
    newProduct.save()
        .then(()=> res.json('Product Added!'))
        .catch(err => res.status(400).json('Error: ' + err ));

});

router.route('/delete/:id').get((req,res)=>{
    
    Product.findOneAndRemove({"_id":req.params.id})
    .exec()
    .then(Products => res.json(Products))
    .catch(err => res.status(400).json('Error: ' + err));
});
module.exports = router;
