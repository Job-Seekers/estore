const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();

const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const db = require('./config/keys').mongoURI;
mongoose
  .connect(db)
  .then(() => {
    console.log('MongoDB Connected');
  })
  .catch(err => {
    console.log(err);
    console.log(' MongoDB Not Connected');
  });

const usersRouter = require('./routes/users');
const productRouter = require('./routes/products');

app.use('/products',productRouter);
app.use('/users',usersRouter);


app.listen(port,()=>{

    
    console.log(`Server is running on port: ${port}`);
    
})

app.get('/', function (req, res) {
   
    res.send("Hello World");

   });