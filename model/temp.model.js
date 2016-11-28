var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var tempSchema = new Schema( {
    name: String,
    temperature: Number,
    humidity: Number,
    date: Date
} );
mongoose.model( 'temp', tempSchema );