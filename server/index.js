var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var _ = require('lodash');

//Create express app
var app =express();

//Add middleware necessary for REST api
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(methodOverride('X-HTTP-Method-Override'));

//Add CORS support
app.use(function(req,res,next){
	res.header('Access-Control-Allow-Origin','*');
	res.header('Access-Control-Allow-Methods','GET,POST,PUT,DELETE');
	res.header('Access-Control-Allow-Headers','Content-Type');
	next();
});


app.use('/hello',function(req,res,next){
	res.send('Hello World!');
	next(); 
});

//Connect to MongoDb database
mongoose.connect('mongodb://localhost/movieTrailerApp');
mongoose.connection.once('open',function(){

	app.models =require('./models/index');
	console.log('Listning on port 3000');
	app.listen(3000);
});