const express = require("express");
const dotevn = require("dotenv").config();
const app = express();

const port = process.env.PORT || 5000;

app.get("/contacts", (req, res) => {
  res.status(200).json({
    message: "I am osama malik",
  });
});

app.listen(port, () => {
  console.log(`Server is running on port no ${port}`);
});

