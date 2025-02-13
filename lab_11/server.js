var express = require('express'); 
var app = express(); 
//route1
app.get('/', function(req, res){  
      res.send("Hello world! by express"); 
});

//route2
app.get('/test', function(req, res){  
      res.send("this is route 2"); 
}); 
    
//route3

app.get('/add', function(req, res){ 
    var x = req.query.x; 
    var y = req.query.y;   
    res.send("X + Y="+(x+y));
 }); 


app.listen(8080);


app.use(express.static('public'))

app.get('/getform', function(req, res)
{ 
    var name = req.query.name; 
    var quest = req.query.quest;   
        res.send("Hi "+name+" I am sure you will "+quest) ;
     });