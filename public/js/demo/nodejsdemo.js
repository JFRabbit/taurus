var http = require("http");

http.createServer(function (request, response) {
    //response.writeHead(200, {'Content-Type': 'text/plain'});

    var msg = {name: "Tom", age: 18};

    response.end(JSON.stringify(msg));
}).listen(8090);

console.log('Server running at http:127.0.0.1:8090/');