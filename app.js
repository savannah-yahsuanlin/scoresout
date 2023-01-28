const fs = require('fs')
const scoreFunction = require('./scoreFunctions')

fs.readFile('scores.txt', (err, data) => {
	if(err) {
		console.log(err)
	} else {
		console.log(scoreFunction.processScore(data.toString()))
	}
})