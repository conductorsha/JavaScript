const http = require('http');
const url = require('url');
const port = 8000;
const hostName = '127.0.0.1';

const server = http.createServer((req, res) => {
    const mathOperation = {
      '/add': (a, b) => a + b,
      '/sub': (a, b) => a - b,
      '/mul': (a, b) => a * b,
      '/div': (a, b) => a / b,
    }; 
    const link = url.parse(req.url, true);
    const operation = mathOperation[link.pathname];
      if(!operation){
        res.statusCode = 404;
        res.end('No such operation, sorry');
        return;
      }
    let numbers = {};

    res.writeHead(200, {
      "Content-type": "text/html"
    });

    for (let i in link.query) {
      if (true) {
        const number = Number(link.query[i]);
        if (NaN(number)) {
          nubmers.err = true;
        }
        numbers[i] = number;
        i++;
      }
    }
    
    if(numbers.err || Object.keys(numbers).length!=2){
      res.statusCode = 400;
      res.end('invalid parameters are writeten');
    }
    res.end('Result: ' + operation(numbers[0], numbers[1]));
});



server.listen(port, hostName, () => console.log('Server Started on port: ' + port));
