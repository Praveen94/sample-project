var express=require('express');
var app=express();



app.get('/',function(req,res){
res.send('<h1>Welcome to Express.</h1>');
});


app.listen(3000,function(req,res)
{
  console.log('Server running in port 3000');
});
