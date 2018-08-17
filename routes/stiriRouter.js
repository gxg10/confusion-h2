const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
var authenticate = require('../authenticate');
const cors = require('./cors');

const Stiri = require('../models/stiri');

const stiriRouter = express.Router();

stiriRouter.use(bodyParser.json());

stiriRouter.route('/')
.options(cors.corsWithOptions, (req, res) => { res.sendStatus(200); })
.get(cors.corsWithOptions, (req, res, next)=>{
	Stiri.find(req.query)
	.then((stire)=>{
		res.statusCode = 200;
		res.setHeader('Content-Type','application/json');
		res.json(stire);
	}, (err)=>next(err))
	.catch((err)=>next(err));
})
.post(cors.corsWithOptions, authenticate.verifyUser, authenticate.verifyAdmin, (req,res,next)=>{
	Stiri.create(req.body)
	.then((stire)=>{
		console.log('stire created', stire);
		res.statusCode = 200;
		res.setHeader('Content-Type','application/json');
		res.json(stire);
	}, (err)=>next(err))
	.catch((err)=>next(err));
})
.delete(cors.corsWithOptions, authenticate.verifyUser, authenticate.verifyAdmin, (req, res, next)=>{
	Stiri.remove({})
	.then((resp)=>{
		res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(resp);
	}, (err) => next(err))
	.catch((err) => next(err));
});


module.exports = stiriRouter;