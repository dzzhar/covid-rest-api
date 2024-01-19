// import PatientController
const PatientController = require("../controllers/PatientController");

// import express
const express = require("express");

// membuat object router
const router = express.Router();

/**
 * Membuat routing
 */
router.get("/", (req, res) => {
  res.send("Hello Covid API Express");
});

// get all resources
router.get("/patients", PatientController.index);

// add resource
router.post("/patients", PatientController.store);

// edit resource
router.put("/patients/:id", PatientController.update);

// delete resource
router.delete("/patients/:id", PatientController.destroy);

// get one resource
router.get("/patients/:id", PatientController.show);

// search resource
router.get("/patients/search/:name", PatientController.search);

// get positive resource
router.get("/patients/status/positive", PatientController.positive);

// get recovered resource
router.get("/patients/status/recovered", PatientController.recovered);

// get dead resource
router.get("/patients/status/dead", PatientController.dead);

// export router
module.exports = router;
