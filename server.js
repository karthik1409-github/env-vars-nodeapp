var http = require('http');
var fs = require('fs');
var server = http.createServer(function (request, response) {
  fs.readFile('/etc/config/MESSAGE', 'UTF-8', (err, fileData) => 
  {
    if(err)
    {
      response.writeHead(200, {"Content-Type": "text/html"});
      response.write("Volume read PROBLEM" +"<br/>");
      response.write(JSON.stringify(err));
      response.end();
    }
    else
    {
      response.writeHead(200, {"Content-Type": "text/html"});
      response.write("Volume file data is: " +fileData +"<br/>");
      response.write("'MESSAGE' (from volume): " +fileData +"<br/>");
      response.end();
    }
  });
})

const port = process.env.PORT || 3000;
server.listen(port, () => console.log(`Application listening on ${port}`));
