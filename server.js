var express=require('express');
const port=procees.env.PORT || 3000;
var app=express();



app.get('/',function(req,res){
res.send('<h1>Welcome to Express.</h1>');
});


app.listen(port,function(req,res)
{
  console.log(`Server running in port ${port}`);
});
