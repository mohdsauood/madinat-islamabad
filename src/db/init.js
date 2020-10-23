const mongoose = require('mongoose');

export default function test() {
  mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true });
  const db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', function () {
    console.log('connected to mongo db sucessfully');
  });
}
module.exports = test;
