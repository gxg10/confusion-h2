const express = require('express');
const bodyParser = require('body-parser');

const mongoose = require('mongoose');

const Feedback = require('../models/feedback');
var authenticate = require('../authenticate');
const cors = require('./cors');


const feedbackRouter = express.Router();

feedbackRouter.route('/')
.options(cors.corsWithOptions, (req, res) => { res.sendStatus(200); })
.get(cors.corsWithOptions, (req, res, next)=>{
	Feedback.find(req.query)
	.then((feedback)=>{
		res.statusCode = 200;
		res.setHeader('Content-Type','application/json');
		res.json(feedback);
	}, (err)=>next(err))
	.catch((err)=>next(err));
})
.post(cors.corsWithOptions, (req,res,next)=>{
	Feedback.create(req.body)
	.then((feed)=>{
		console.log('feedback created', feed);
		res.statusCode = 200;
		res.setHeader('Content-Type','application/json');
		res.json(feed);
	}, (err)=>next(err))
	.catch((err)=>next(err));
});




module.exports = feedbackRouter;