//mongodb
//Connecting to MongoDB
//Require Mongoose
var mongoose = require('mongoose');
//Define a schema
var Schema = mongoose.Schema;
var url = 'mongodb+srv://ajay:ajay@librarycluster.zfgjb.mongodb.net/library?retryWrites=true&w=majority';
mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

//Defining and creating models
//Defining schemas
const bookSchema = new Schema({
  title:  String, // String is shorthand for {type: String}
  pub: String,
  isbn: String,
  author: String,
  category:String,
  price: Number,
  count: Number
});
//Creating a model



var books = mongoose.model('books',bookSchema);

exports.insertBook = (data)=>{
    books.create(data, function (err, bookInstance) {
        if (err) return handleError(err);
        // saved!
        console.log('Saved book 1');
    });
}


