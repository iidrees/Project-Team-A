var http = require("http");
var fs = require('fs');

var server = http.createServer(function(req, res){
    
    if (req.url === '/login' || req.url === '/') {
        res.writeHead(200, {'Content-Type' : 'text/html'});
        fs.createReadStream(__dirname + '/login.html', 'utf8').pipe(res);
        
    } else if ( req.url === '/home') {
        res.writeHead(200, {'Content-Type':'application/json'});
        fs.createReadStream(__dirname + '/home.html', 'utf8').pipe(res);
    } else if (req.url === '/checkin') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        fs.createReadStream(__dirname + '/checkin.html', 'utf8').pipe(res);
    } else if (req.url === '/checkout') {
        res.writeHead(200, {'Content-Type' : 'text/html'});
        fs.createReadStream(__dirname + '/checkout.html', 'utf8').pipe(res);

    } 

    if (req.url.indexOf('.css') !== -1 ) {
        fs.readFile(__dirname + '/index.css', function(err,data){
            if (err) console.log(err);
            res.writeHead(200, {'Content-Type' : 'text/css'});
            res.write(data);
            res.end();
        })
    }
});

server.listen(3000, function(){
    console.log('Server listening on port 3000');
})