var mysql  = require('mysql');
var dbconn = mysql.createConnection({
  host     : 'magsunlimited',
  user     : 'root',
  password : 'Root@123',
  database : 'test'
});

dbconn.connect(function(err){
  if(err){
    console.log(err);
  }else{
    console.log('Database connection successful');
  }
});

