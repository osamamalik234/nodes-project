const express = require("express");
const router = express.Router();
const {
  getContact,
  postContact,
  updateContact,
  deleteContact,
} = require("../controllers/contactController");

router.route("/").get(getContact).post(postContact);

router.route("/:id").put(updateContact).delete(deleteContact);

// GET /api/books
module.exports = router; // Don't forget to add this!
