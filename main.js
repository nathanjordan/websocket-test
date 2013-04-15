var app = require('http').createServer(handler)
  , io = require('socket.io').listen(1337,{ log: false } )
  , fs = require('fs')

app.listen(80);

function handler (req, res) {
  fs.readFile(__dirname + '/index.html',
  function (err, data) {
    if (err) {
      res.writeHead(500);
      return res.end('Error loading index.html');
    }

    res.writeHead(200);
    res.end(data);
  });
}

io.sockets.on('connection', function (socket) {

  	var sys = require("util");

	var stdin = process.openStdin();

	stdin.addListener("data", function(d) {
        
		var message = d.toString().substring(0, d.length-1);

		socket.emit( 'chat' , message );
  
		});
  
  socket.on('chat', function (data) {
  
  	console.log("Client: " + data);
  
  });


});
