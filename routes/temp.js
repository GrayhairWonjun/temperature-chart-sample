var express = require('express');
var router = express.Router();

var tempModel = require('mongoose').model('temp');


router.get('/', function( req, res, next ) {
	var d = new Date();
    tempModel.find( {date: {$gt: d.setDate(d.getDate() - 1)}} )
        .sort( {date:-1} )
//        .limit( 50 )
    	.exec( function( err, temps ) {
	        if(err){
	            return next(err);
	        }else{
	        	var t = [], h = [];
	        	temps.map( function(val, idx){
	        		t.push("{x: new Date(" + val.date.getTime() + "), y:" + val.temperature +"}");
	        		h.push("{x: new Date(" + val.date.getTime() + "), y:" + val.humidity + "}");
	        	});
	            res.render('temp', {humidity: h.reverse(), temperature: t.reverse()});
	        }
        } );
} );

module.exports = router;
