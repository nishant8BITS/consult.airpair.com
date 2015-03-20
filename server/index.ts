/// <reference path="typings/tsd.d.ts" />

import express = require("express")
var app	= express()

app.use("/", (req,res,next) => {
	res.send('OK!')
})

var server = 
	app.listen(9999, () => console.log("Listening on port 9999") )