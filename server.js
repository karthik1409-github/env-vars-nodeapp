var http = require('http');
var fs = require('fs');
var server = http.createServer(function (request, response) 
{
  fs.readFile('/etc/config/MESSAGE', 'UTF-8', (err, fileData) => {
    if(err)
    {
      response.writeHead(200, {"Content-Type": "text/html"});
      response.write("Error:<br/>");
      response.write(JSON.stringify(err));
    }
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write("'MESSAGE' (from evn variable): " +process.env.MESSAGE +"<br/>");
    response.write("'MESSAGE' (from volume): " +  fileData);
    
    response.end();
  });
});
const port = process.env.PORT || 3000;
server.listen(port, () => console.log(`Application listening on ${port}`));
