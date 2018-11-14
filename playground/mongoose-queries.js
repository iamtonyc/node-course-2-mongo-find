const {ObjectID}=require('mongodb');

const {mongoose}=require('./../server/db/mongoose');
const {Todo}=require('./../server/models/todo');
const {User}=require('./../server/models/user');

var id='5be9aa60248313882bad8455';
// var id='5bec1e59b8ed25883af59aef1';

// if (!ObjectID.isValid){
//   console.log('ID not valid');
// }

// Todo.find({
//     _id: id
// }).then((todos)=>{
//   console.log('Todos',todos);
// });

// Todo.findOne({
//   _id: id
// }).then((todo)=>{
// console.log('Todo',todo);
// });

// Todo.findById(id).then((todo)=>{
//   if (!todo){
//     return console.log('Id not found');
//   }
//   console.log('Todo by Id',todo);
// }).catch((e)=>console.log(e));


User.findById(id).then((user)=>{
  if (!user){
    return console.log('Id not found');
  }
  console.log(JSON.stringify(user,undefined,2));
}).catch((e)=>console.log(e));