var http = require('http');
var fs = require('fs');



var server = http.createServer(function (request, response) 
{
  fs.readFile('/etc/config/MESSAGE', 'UTF-8', (err, fileData) => {
    if(err)
    {
      console.log(err)
    }
    else
    {
      response.writeHead(200, {"Content-Type": "text/html"});
      response.write("'MESSAGE' (from evn variable): " +process.env.MESSAGE +"<br/>");
      response.write("'MESSAGE' (from volume): " +  fileData);
    }
  });
  const message = process.env.MESSAGE;
  const name = process.env.NAME;
  response.write(`Message: ${message}\n`);
  response.write(`From: ${name}\n`);
  response.end(`\n`);
});
const port = process.env.PORT || 3000;
server.listen(port, () => console.log(`Application listening on ${port}`));
