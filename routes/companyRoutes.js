const express = require("express");

const {
  getWelcome,
  getCompanyInfo,
  getServices,
  getEmployees,
} = require("../controllers/companyController");

const router = express.Router();

router.get("/", getWelcome);
router.get("/empresa", getCompanyInfo);
router.get("/servicios", getServices);
router.get("/empleados", getEmployees);

module.exports = router;
