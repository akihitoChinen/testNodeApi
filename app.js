var express = require('express');
var app = express();

app.get('/', (req, res) => {
	res.send('node api sample');
	console.log('send response');
});


app.listen(3000, () => {
	console.log('start server port:3000');
});
