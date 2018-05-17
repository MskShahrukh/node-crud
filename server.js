const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}))

const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectId;
var db;

MongoClient.connect('mongodb://localhost:27017/', (err,result)=>{
	
	if (err){ throw err}
	else{
		db = result.db('test-db')
		console.log("-- MongoDB connected.")

	}
})


app.listen(3000, (err,res)=>{
	if(err) throw err

})



app.get('', (req,res)=>{
	res.redirect('/getUsers');
})

// 1- Get all users
app.get('/getUsers', (req,res)=>{
	db.collection("users").find({}).toArray( (err,data)=>{
		if (err){ throw err}
		else{
			res.send(data)
		}
	})

})


//  2 - Create a new User
app.get('/createUser/:name', (req,res)=>{
	var name = req.params.name
	db.collection("users").save({
		"name":name
	})
	res.redirect('/getUsers');

})

// 3 - Get User with ID
app.get('/getUser/:id', (req,res)=>{
	var id = req.params.id
	db.collection("users").find({
		"_id":ObjectId(id)

	}).toArray( (err,data)=>{
		if (err){ throw err}
		else{
			res.send(data)
		}
	})
	
})

// 4 - Update User with id/ newname
app.get('/updateUser/:id/:name', (req,res)=>{
	var id = req.params.id
	var name = req.params.name
	db.collection("users").update(
		{"_id":ObjectId(id)},
		{$set:{"name":name}}

		).toArray( (err,data)=>{
		if (err){ throw err}
		else{
			res.send(data)
		}
	})
	
})