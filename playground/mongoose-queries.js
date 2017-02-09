const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var id = '58895a0df959138c21aea293';

User.findById(id).then((user) => {
  if (!user){
    return console.log('No user found');
  }
  console.log('User', JSON.stringify(user));
}, (e) => {
  console.log(e.message);
});

// var id = '589bce5f875fade827b9772e11';
//
// if (!ObjectID.isValid(id)) {
//   console.log('ID not valid');
// }

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//   if (!todo) {
//     return console.log('Id not found!');
//   }
//   console.log('Todo by id', todo);
// }).catch((e) => console.log(e));
