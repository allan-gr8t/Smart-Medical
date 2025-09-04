const express = require("express");

const app = express();
require("dotenv").config()
port = process.env.PORT

app.use(express.json());
app.get("/Test", (req,res) => {
 res.status(200).json("Tested successfully")
 console.log(req.body)
} )

app.post("/cardTap", (req,res) => {
 res.status(200).json("received successfully")
 console.log(req.body)
} )


  app.listen(port, () => {
  console.log(`server is running on port: ${port}`);
});