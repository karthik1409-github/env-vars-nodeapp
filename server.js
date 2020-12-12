var http = require('http');

var server = http.createServer(function (request, response) 
{
  const message = process.env.MESSAGE;
  const name = process.env.NAME;
  response.write(`Message: ${message}\n`);
  response.write(`From: ${name}\n`);
  response.end(`\n`);
});
const port = process.env.PORT || 3000;
server.listen(port, () => console.log(`Application listening on ${port}`));
