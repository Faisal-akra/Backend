const http = require("http");
const fs = require("fs");

const myServer = http.createServer((req, res) => {
 const log = `${Date.now()}: new request recieved\n`
  fs.appendFile('main.txt', log, (err, data) => {
    switch(req.url) {
      case '/': res.end("This is home page");
      case '/about': res.end("Hey my name is faisal akram");
      break;
      default: res.end("404 Not Found")
    }
  })

})
myServer.listen(7000, () => console.log("Server is almost done"))