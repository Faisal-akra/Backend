// import express from 'express';

// const app = express();


// app.use(express.json());



// app.get('/', ((req, res) => {
//   res.json({
//     message: "success",
//     name: "Client"
//   })
// }))

// const port = "http://localhost:6000"
// app.listen(6000, () => {
//   console.log(port);
// })



//Params:

// app.put("/update/:userId", (req, res) => {

//   console.log(req.params.userId);
  

//   res.json({
//     messagae: "checking"
//   })
// })


// const port = "http://localhost:6000"
// app.listen(6000, () => {
//   console.log(port);
// })








// app.put('/faisal', (req, res) => {

//   const {limit, skip} = req.query;

//   res.json({
//     message: 'success',
//     name: 'faisal',
//     limit: limit,
//     skip: skip
//   })
// })


// app.all("*", (req, res) => {
//   res.status(404).json({
//     success: false,
//     message: "Page not found",
//   });
// });

// const port = 3000;
// app.listen(port, () => {
//   console.log(`Server is running on port http://localhost:${port}`);
// });







//Express middle wares:



// const userLogin = true;


// app.use((req, res, next) => {

//   if(userLogin) {
//     next()
//   }else{
//     res.status(404).json({
//       message: "Page not found!"
//     })
//   }
// })





// app.post('/products', (req, res) => {

//   const products = [
//     {name: "faisal", age: 21, father: "akram"},
//     {name: "zaid", age: 10, father: "ijaz-ali"},
//     {name: "horain", age: 7, father: "ijaz-ali"}

//   ]
//   res.json({
//     message: "suuess",
//     products
//   })
// })


// const port = "http://localhost:3000"
// app.listen(3000, () => {
//   console.log(port);
// })



// import express from "express";

// const app = express();

// import routerMiddle from "./routes/product.js"


// app.use('/products', routerMiddle );

// const port = "http://localhost:2000"

// app.listen(2000, () => {
//   console.log(port);
// })