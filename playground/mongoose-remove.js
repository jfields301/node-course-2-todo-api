const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//   console.log(result);
// });

// Todo.findOneAndRemove()
// Todo.findByIdAndRemove()

// Todo.findOneAndRemove().then((todo) => {
//   console.log(todo);
// })

Todo.findByIdAndRemove('58a0a6df38f5a6d593b9b12d').then((todo) => {
  console.log(todo);
})
