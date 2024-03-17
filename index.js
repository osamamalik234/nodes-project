const express = require("express");
const dotevn = require("dotenv").config();
const app = express();

const port = process.env.PORT || 5000;

app.use("/contacts", require("./Router/router"));

app.listen(port, () => {
  console.log(`Server is running on port no ${port}`);
});
