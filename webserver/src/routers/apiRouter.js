const express = require("express");

const maidController = require("../controllers/maidController");

const router = express.Router();

// posts
router.post("/signup", maidController.signup);
router.post("/login", maidController.login);

// gets
router.get("/maids", maidController.listAll);
router.get("/:id", maidController.maidProfile);

// updates
router.put("/:id", maidController.updateProfile);

module.exports = router;
