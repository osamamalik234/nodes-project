const express = require("express");
const errorHandler = require("./middleware/errorHandler");
const dotevn = require("dotenv").config();
const app = express();

const port = process.env.PORT || 5000;

app.use(express.json());
app.use("/contacts", require("./Router/router"));
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server is running on port no ${port}`);
});
