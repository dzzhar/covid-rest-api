// import Model Patient
const Patient = require("../models/Patient");

// buat class PatientController
class PatientController {
  // index method
  async index(req, res) {
    const patient = await Patient.all();

    // if data is available
    if (patient.length > 0) {
      const data = {
        message: "Get All Resources",
        data: patient,
      };

      return res.status(200).json(data);
    }

    // else
    const data = {
      message: `Data is Empty`,
    };

    return res.status(200).json(data);
  }

  // store method
  async store(req, res) {
    const { name, phone, address, status, in_date_at, out_date_at } = req.body;

    // if any data is empty, send response error
    if (!name || !phone || !address || !status || !in_date_at || !out_date_at) {
      const data = {
        message: "All Fields Must be Filled Correctly",
      };

      return res.status(422).json(data);
    }

    // if it contains letter, send response error
    else if (isNaN(phone)) {
      const data = {
        message: `Phone Number Must be Number`,
      };

      return res.status(422).json(data);
    }

    // else
    const patient = await Patient.create(req.body);

    const data = {
      message: `Resources is Added Successfully`,
      data: patient,
    };

    return res.status(201).json(data);
  }

  // update method
  async update(req, res) {
    const { id } = req.params;
    const patient = await Patient.find(id);

    // if data exist, then update data
    if (patient) {
      const patient = await Patient.update(id, req.body);

      const data = {
        message: `Resource is Update Successfully`,
        data: patient,
      };

      return res.status(200).json(data);
    } else {
      const data = {
        message: `Resource Not Found`,
      };

      return res.status(404).json(data);
    }
  }

  // delete method
  async destroy(req, res) {
    const { id } = req.params;
    const patient = await Patient.find(id);

    // if data available
    if (patient) {
      await Patient.delete(id);
      const data = {
        message: `Resource is Deleted Successfully`,
      };

      return res.status(200).json(data);
    } else {
      const data = {
        message: `Resource Not Found`,
      };

      return res.status(404).json(data);
    }
  }

  // show method
  async show(req, res) {
    const { id } = req.params;
    const patient = await Patient.find(id);

    // if data is available
    if (patient) {
      const data = {
        message: `Get Detail Resource`,
        data: patient,
      };

      return res.status(200).json(data);
    } else {
      const data = {
        message: `Resources Not Found`,
      };

      return res.status(404).json(data);
    }
  }

  // search by name
  async search(req, res) {
    const { name } = req.params;
    const patient = await Patient.search(name);

    // if data is available
    if (patient.length > 0) {
      const data = {
        message: `Get Searched Resource`,
        data: patient,
      };

      return res.status(200).json(data);
    } else {
      const data = {
        message: `Resource Not Found`,
      };

      return res.status(404).json(data);
    }
  }

  // find status = positive
  async positive(req, res) {
    const status = `positive`;
    const patient = await Patient.findByStatus(status);

    // if data is available
    if (patient.length > 0) {
      const data = {
        message: `Get Positive Resource`,
        total: patient.length,
        data: patient,
      };

      return res.status(200).json(data);
    } else {
      const data = {
        message: `Resource Not Found`,
      };

      return res.status(404).json(data);
    }
  }

  // find status = recovered
  async recovered(req, res) {
    const status = `recovered`;
    const patient = await Patient.findByStatus(status);

    // if data is available
    if (patient.length > 0) {
      const data = {
        message: `Get Recovered Resource`,
        total: patient.length,
        data: patient,
      };

      return res.status(200).json(data);
    } else {
      const data = {
        message: `Resource Not Found`,
      };

      return res.status(404).json(data);
    }
  }

  // find status = dead
  async dead(req, res) {
    const status = `dead`;
    const patient = await Patient.findByStatus(status);

    // if data is available
    if (patient.length > 0) {
      const data = {
        message: `Get Dead Resource`,
        total: patient.length,
        data: patient,
      };

      return res.status(200).json(data);
    } else {
      const data = {
        message: `Resource Not Found`,
      };

      return res.status(404).json(data);
    }
  }
}

// membuat object PatientController
const object = new PatientController();

// export object PatientController
module.exports = object;
