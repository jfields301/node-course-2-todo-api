// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

// db.collection('Todos').findOneAndUpdate({
//   _id: new ObjectID('5884f450b213250ac50bb9e0')
// }, {
//   $set: {
//     completed: true
//   }
// } , {
//   returnOriginal: false
// }).then((result) => {
//   console.log(result);
// });

db.collection('Users').findOneAndUpdate({
  _id: new ObjectID('5883c53d4bf41a22b86b26b8')
}, {
  $set: {
    name: 'John'
  },
  $inc: {
    age: 1
  }
}, {
  returnOriginal: false
}).then((result) => {
  console.log(result);
});

  // db.close();
});
