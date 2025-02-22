import express from "express";

const routes = express.Router();

routes.post("/allProducts", (req, res) => {
  const products = [
    { name: "faisal", age: 21, father: "akram" },
    { name: "zaid", age: 10, father: "ijaz-ali" },
    { name: "horain", age: 7, father: "ijaz-ali" },
  ];
  res.json({
    message: "success",
    status: "true",
    products
  });
});


export default routes;