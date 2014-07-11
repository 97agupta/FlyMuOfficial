var connect = require('connect');
connect.createServer(
    connect.static("index.html")
).listen(8080);