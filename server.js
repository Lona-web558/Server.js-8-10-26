//Server.js

require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const path = require('path');


// express app

const app = express();

app.use(cors());
app.use(express.json());

app.get('/health', (req, res) => res.json({status: 'ok'}));

app.use('/api/auth', require('./auth'));
app.use('/api/profile', require('./profile'));


app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));

//404 error message

app.use((req, res) => {
	res.status(404).json({message: 'Route not found'})});
	
	
//500 error message

app.use((err, req,res, next) => {
	console.error(err);
	res.status(500).json({message: 'Server error'})});
	
	
	
	const PORT = process.env.PORT || 3000; 
	
	app.listen(PORT, () => console.log(`Server running at ${PORT}`) );
	
		
	