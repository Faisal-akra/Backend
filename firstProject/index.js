// // const http = require("http");

// // const myServer = http.createServer((req, res) => {

// //   const get = req.method;
// //   const link = req.url;

// //   if (get === "GET") {
// //     res.end("Faisal backend developer");
// //   }
// // })

// // myServer.listen(7000)









  // const get = req.method;
  // const link = req.url;

  






  import http from 'http';


  const myServer = http.createServer((req, res) => {

    // const path = url.parse(req.url, true);
    if(req.method === "GET" && req.url === '/faisal') {
      res.end("this is a client msg")
    }
  })

  const port = "http://localhost:9000";
  myServer.listen( 9000, ()=> {
    console.log(port);
  })























// //All methods tests http:

// //"GET-Method"

// // const http = require('http');
// // const url = require('url');

// // const myServer = http.createServer((req, res) => {

// //   const method = req.method;
// //   const path = url.parse(req.url, true);


// //   if(method === "GET" && path.pathname === '/') {
// //     res.end(JSON.stringify({respose: "hello guys welcome to my website"}))
// //   }else{
// //     res.end(JSON.stringify({error: "404 page not found"}))
// //   }

// // }
// // )
// // myServer.listen(7000)


// //POST-METHOD

// // const http = require('http');
// // const url = require('url');




// // const myServer = http.createServer((req, res) => {
// //   const option = req.method;
// //   const path = url.parse(req.url);


// //   if(option === "POST" && path.pathname === '/login') {
// //     res.end(JSON.stringify({respone: 'your respone is ready'}))
// //   }else{
// //     res.end(JSON.stringify({404: "page not found"}))
// //   }

// // })
// // myServer.listen(9000)

// //DELTET


// // const http = require('http');
// // const url = require('url');




// // const myServer = http.createServer((req, res) => {
// //   const option = req.method;
// //   const path = url.parse(req.url);


// //   if(option === "DELETE" && path.pathname === '/delete') {
// //     res.end(JSON.stringify({respone: 'your respone is ready'}))
// //   }else{
// //     res.end(JSON.stringify({404: "page not found"}))
// //   }

// // })



// //PATCH


// // const http = require('http');
// // const url = require('url');




// // const myServer = http.createServer((req, res) => {
// //   const option = req.method;
// //   const path = url.parse(req.url);


// //   if(option === "PATCH" && path.pathname === '/patch') {
// //     res.end(JSON.stringify({respone: 'your respone is ready'}))
// //   }else{
// //     res.end(JSON.stringify({404: "page not found"}))
// //   }

// // })
// // myServer.listen(9000)


// //PUT

// // const http = require('http');
// // const url = require('url');

// // const myServer = http.createServer((req, res) => {
// //   const option = req.method;
// //   const path = url.parse(req.url, true);


// //   if(option === "PUT" && path.pathname === '/put') {
// //     res.end(JSON.stringify({respone: 'your respone is ready'}))
// //   }else{
// //     res.end(JSON.stringify({404: "page not found"}))
// //   }

// // })
// // myServer.listen(9000)



// //res.header
// // const http = require('http');
// // const url = require('url');

// // const myServer = http.createServer((req, res) => {
// //   const method = req.method;
// //   const path = url.parse(req.url, true);

// //   if(method === "GET" && path.pathname === "/") {
// //     res.writeHead(200, {"Content-Type": "text/plain"});
// //     res.end("this is clint response")
// //   }else{
// //     res.writeHead(404, {"Content-Type": "text/plain"});
// //     res.end("Page not found")
// //   }
// // })

// // const port = 'http://localhost:9000'

// // myServer.listen(9000 ,() => {
// //   console.log(`Your server link is ${port}`);
// // })




// // const  http = require('http');

// // const myServer = http.createServer((req, res) => {
// //   const options = req.method;
  
// //   if(options === "POST") {
    

// //     let body = "";

// //     // Collect data as it comes in
// //     req.on("data", (chunk) => {
// //       body += chunk;
// //     });

// //     // When all data is received, send a response
// //     req.on("end", () => {
// //       res.writeHead(200, { "Content-Type": "application/json" });
// //       // You can process the body further (e.g., parse JSON) if needed
// //       res.end(
// //         JSON.stringify({
// //           message: "Hello! You made a POST request.",
// //           receivedData: body,
// //         })
// //       );
// //     });

// //     // Handle potential errors during the data reception
// //     req.on("error", (err) => {
// //       console.error(err);
// //       res.writeHead(500, { "Content-Type": "text/plain" });
// //       res.end("Internal Server Error");
// //     });
// //   } else {
// //     // If the request method is not GET or POST, return a 405 Method Not Allowed
// //     res.writeHead(405, { "Content-Type": "text/plain" });
// //     res.end(`${method} method is not allowed.`);
// //   }
// // });

// // // Start the server on port 3000
// // server.listen(3000, () => {
// //   console.log("Server listening on port 3000");
// // });




// // const http = require('http');
// // const querystring = require('querystring');

// // const server = http.createServer((req, res) => {
// //   let body = '';

// //   req.on('data', (chunk) => {
// //     body += chunk;
// //   });

// //   req.on('end', () => {
// //     if (req.method === 'POST' && req.headers['content-type'] === 'application/x-www-form-urlencoded') {
     
// //       const parsedData = querystring.parse(body);

// //       console.log('Received data:', parsedData);
      
// //       res.writeHead(200, { 'Content-Type': 'application/json' });
// //       res.end(JSON.stringify({ message: 'Data received successfully' }));
// //     } else {
// //       res.writeHead(400, { 'Content-Type': 'text/plain' });
// //       res.end('Invalid request');
// //     }
// //   });
// // });

// // // Set the server to listen on port 3000
// // server.listen(3000, () => {
// //   console.log('Server is running at http://localhost:3000');
// // });



// // const express = require('express');
// // const app = express();
// // app.use(express.json())

// // app.get('/', (req, res) => {

// // console.log(req.body);

// // res.json({
// //   message: "successs",
// // })
// // })


// // const port = 'http://localhost:9000'
// // app.listen(9000, () => {
// //   console.log(`your server is ready ${port}`);
// // })



// import express from 'express'

// const app = express();


// app.use(express.json())


// app.post('/register/:userid', (req, res) => {

//   console.log(req.body);

//   res.json({
//     message: 'Success'
//   })

// })

// const port = 'http://localhost:9000/'
// app.listen(9000, () => {
//   console.log(`your server is ${port}`);
// })


















