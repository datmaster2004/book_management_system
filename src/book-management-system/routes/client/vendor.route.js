const express = require("express");
const router = express.Router();
const controller = require("../../controllers/client/home.controller");

router.get("/", controller.getAllVendors);

router.get("/:vendorName", controller.getVendorByName);

module.exports = router;
