const express = require("express");
const router = express.Router();

router.route("/").get((req, res) => {
    res.status(200).json({ message: "Welcome to the API!" });
});

router.route("/").post((req, res) => {
    res.status(200).json({ message: "Route has been created" });
});
  
router.route("/:id").put((req, res) => {
    res.status(200).json({ message: `Update route ${req.params.id}`});
});

router.route("/:id").delete((req, res) => {
    res.status(200).json({ message: `Delete route at ${req.params.id}`});
});

  
  
// GET /api/books
module.exports = router;  // Don't forget to add this!

