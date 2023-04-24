#!/usr/bin/env node
import express from "express"
import minimist from "minimist"


import {rps, rpsls} from './lib/rpsls.js';

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));

let argv = minimist(process.argv.slice(2));
const port = argv.port || 5000;

//Begin listening and print name of port 
app.listen(port, () => {
	console.log(`Server listening on port ${port}`);
});


app.get('/app', (_, res) => {
    console.log(res.statusMessage)
    res.status(200).send("200 OK");
});


app.get('/app/rps/', (_, res) => {
    res.status(200).send(rps());
});

app.get('/app/rpsls/', (_, res) => {
	res.status(200).send(rpsls());
});

// Default endpoint returns 404 error
app.get('*', (req, res) => {
    console.log(res.statusMessage)
	res.status(400).send("404 NOT FOUND");
});




