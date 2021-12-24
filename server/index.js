const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "password",
  database: "project",
});

app.post("/createPatient", (req, res) => {
  const name = req.body.name;
  const age = req.body.age;
  const address = req.body.address;
  const mobile_no = req.body.phone;
  const cnic = req.body.cnic;
  const password=req.body.password;

  {/*inserting tuple into patient table  */}
  db.query(
    "INSERT INTO patient (name, age, address, mobile_no, cnic, password) VALUES (?,?,?,?,?,?)",
    [name, age, address, mobile_no, cnic, password],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        
        res.send("Insert Query run");
      }
    }
  );
});


{/* creating an entry in doctors table*/}
app.post("/createDoctor", (req, res) => {
  const name = req.body.name;
  const age = req.body.age;
  const address = req.body.address;
  const mobile_no = req.body.phone;
  const cnic = req.body.cnic;
  const password=req.body.password;

  {/*inserting tuple into patient table  */}
  db.query(
    "INSERT INTO doctor (name, age, address, mobile_no, cnic, password) VALUES (?,?,?,?,?,?)",
    [name, age, address, mobile_no, cnic, password],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        
        res.send("Insert Query run");
      }
    }
  );
});




{/*reading all patients record for doctor or admin */}
app.get("/readallPatients", (req, res) => {
  const cnic = Number(req.query.cnic);
  const password= (req.query.password);


  db.query("SELECT  patient.name, patient.patient_id, doctor.name as dname FROM patient inner join doctor_patient on patient.patient_id=doctor_patient.patient_id inner join doctor on doctor_patient.doctor_id=doctor.doctor_id where doctor.cnic = ? and doctor.password = ? ",[cnic,password], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      console.log(result);
      res.send(result);
    }
  });
});

{/*reading all patients doctors for patient or admin */}
app.get("/readallDoctors", (req, res) => {
  db.query("SELECT * FROM doctor", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});



{/* reading single patient record*/}
app.get("/readPatient", (req, res) => {
  console.log(req.query);
  
    const cnic = Number(req.query.cnic);
    const password = req.query.password ;
    const classification= req.query.classification;
    
    

  

    
   // SELECT * FROM ?? inner join record on record.patient_id=patient.patient_id inner join vital_sign on record.record_id=vital_sign.record_id where cnic= ? and password= ?
    db.query("SELECT patient.patient_id,patient.name,patient.address,patient.mobile_no,patient.age,patient.cnic,patient.gender,vital_sign.height,vital_sign.weight,vital_sign.temperature,vital_sign.blood_pressure,vital_sign.pulse_rate,vital_sign.date,medication_profile.drug,medication_profile.physician,medication_profile.started,medication_profile.ended FROM patient inner join record on record.patient_id=patient.patient_id inner join vital_sign on record.record_id=vital_sign.record_id inner join medication_profile on medication_profile.record_id=record.record_id where cnic= ? and password= ? ",[cnic,password], (err, result) => {
      if (err) {
        console.log(err);
      } else {
        console.log(result);
        res.send(result);
      }
    });
  });


  {/* updating patient tuple */}
app.put("/update", (req, res) => {
  const id = req.body.id;
  const wage = req.body.wage;
  db.query(
    "UPDATE patient SET wage = ? WHERE id = ?",
    [wage, id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});


{/* deleting patient tuple */}
app.delete("/delete/:id", (req, res) => {
  const id = req.params.id;
  db.query("DELETE FROM patient WHERE id = ?", id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.listen(3001, () => {
  console.log("Yey, your server is running on port 3001")
})