var mongoose = require('mongoose');
var config = require('./config.js');

module.exports = function() {
    var conn = mongoose.connect( config.db );
    require( '../model/temp.model.js' );
    //conn.model( 'temp', tempSchema );
    return conn;
}
