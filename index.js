const http = require("http");
const fs = require("fs");

const PORT = 5000;

const server = http.createServer(function listner(request, response) {
  if (request.url == "/") {
    fs.readFile("index.html", (err, data) => {
      if (err) {
        console.error(err);
        response.writeHead(500, { "Content-Type": "text/html" });
        response.end("500 - Internal Server Error");
        return;
      }
      response.writeHead(200, { "Content-Type": "text/html" });
      response.end(data);
    });
  } else {
    response.writeHead(404, { "Content-Type": "text/html" });
    response.end("404 - Page Not Found");
  }
});

server.listen(PORT, function () {
  console.log("Server listening on port: " + PORT);
});
