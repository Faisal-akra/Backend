const http = require("http");

const myServer = http.createServer((req, res) => {

  const get = req.method;
  const link = req.url;

  if (get === "GET") {
    res.end("Faisal backend developer");
  }
})

myServer.listen(7000)