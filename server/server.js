var express=require('express');
var bodyParser=require('body-parser');

var {mongoose}=require('./db/mongoose');
var {Todo}=require('./models/todo');
var {User}=require('./models/user');

// var todo=new Todo({
//   text:"abac"
// });
// todo.save();

var app=express();
app.use(bodyParser.json());

app.post('/todos',(req,res)=>{
  console.log(req.body);
  var todo=new Todo({
    text:req.body.text
  });
  todo.save().then((doc)=>{
      res.send(doc);
  },(e)=>{  
      res.status(400).send(e);
  });
});

app.listen(3000, ()=>{
  console.log('Started on port 3000');
});


// var otherTodo =new Todo({
//   text: 'Something to Do'
// })

// otherTodo.save().then((doc)=>{
//     console.log(JSON.stringify(doc,undefined, 2));
//   },(e)=>{
//     console.log('Unable to save todo',e);
//   });
