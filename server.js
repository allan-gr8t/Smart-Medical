const express = require("express");

const app = express();

const mongoose = require("mongoose");

require("dotenv").config();
const port = process.env.PORT;
const connection_string = process.env.CONNECTION_STRING;
app.use(express.json());
app.use("/api", signUpRoute);


mongoose
  .connect(connection_string)
  .then(() => {
    console.log("Successfully connected to the Database OK");
  })
  .catch((error) => {
    console.log("Failed to connect to the Database", error);
    console.log(`your connection string is:`, connection_string);
  });

  server.listen(port, () => {
  console.log(`server is running on port: ${port}`);
});