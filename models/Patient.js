// import database
const db = require("../config/database");

// membuat class Patient
class Patient {
  // method to get all data
  static all() {
    return new Promise((resolve, reject) => {
      const sql = `SELECT * FROM patients`;

      db.query(sql, (err, results) => {
        // check for errors in data
        err ? reject(err) : resolve(results);
      });
    });
  }

  // method to add data
  static async create(data) {
    // insert data into database
    const id = await new Promise((resolve, reject) => {
      const sql = `INSERT INTO patients SET ?`;

      db.query(sql, data, (err, results) => {
        // check for error in data
        err ? reject(err) : resolve(results.insertId);
      });
    });

    // query data based on id
    const patient = this.find(id);
    return patient;
  }

  // method to find a spesific data
  static find(id) {
    return new Promise((resolve, reject) => {
      const sql = `SELECT * FROM patients WHERE id = ?`;

      db.query(sql, id, (err, results) => {
        // check for errors in data
        err ? reject(err) : resolve(results);
      });
    });
  }

  // method to edit data
  static async update(id, data) {
    await new Promise((resolve, reject) => {
      const sql = `UPDATE patients SET ? WHERE id = ?`;

      db.query(sql, [data, id], (err, results) => {
        // check for errors in data
        err ? reject(err) : resolve(results);
      });
    });

    // find newly updated data
    const patient = await this.find(id);
    return patient;
  }

  // method to delete data
  static delete(id) {
    return new Promise((resolve, reject) => {
      const sql = `DELETE FROM patients WHERE id = ?`;

      db.query(sql, id, (err, results) => {
        // check for errors in data
        err ? reject(err) : resolve(results);
      });
    });
  }

  // method to get one data
  static find(id) {
    return new Promise((resolve, reject) => {
      const sql = `SELECT * FROM patients WHERE id = ?`;

      db.query(sql, id, (err, results) => {
        const [patient] = results;
        resolve(patient);
      });
    });
  }

  // method to search data by name
  static search(name) {
    return new Promise((resolve, reject) => {
      const sql = `SELECT * FROM patients WHERE name = ?`;

      db.query(sql, name, (err, results) => {
        // check for errors in data
        err ? reject(err) : resolve(results);
      });
    });
  }

  // method to find data by status
  static findByStatus(status) {
    return new Promise((resolve, reject) => {
      const sql = `SELECT * FROM patients WHERE status = ?`;

      db.query(sql, status, (err, results) => {
        // check for errors in data
        err ? reject(err) : resolve(results);
      });
    });
  }
}

// export class Patient
module.exports = Patient;
