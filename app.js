var express = require('express');
var app = express();

app.get('/', (req, res) => {
	res.send('node api sample');
	console.log('send response');
});


var port = process.env.PORT || 1337;
app.listen(port, () => {
	console.log('start server port:3000');
});
