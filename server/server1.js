var {mongoose}=require('./db/mongoose');
var {Todo}=require('./models/todo');
var {User}=require('./models/user');

 var newUser =new User({
     email: 'iamtonycheung@gmail.com'
 });

newUser.save().then((doc)=>{
    console.log(JSON.stringify(doc,undefined, 2));
  },(e)=>{
    console.log('Unable to save todo',e);
  });

