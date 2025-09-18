// server.js
const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();
app.use(cors()); // allow cross-origin
app.use(express.json());

const db = mysql.createConnection({
  host: "bwsum0kbtkqy7wkzfgoh-mysql.services.clever-cloud.com",
  user: "u6tpwotrgptbldm7",
  password: "ieONBTdUgl098p1egPR9",
  database: "bwsum0kbtkqy7wkzfgoh"
});

app.get("/applicants/:nom", (req, res) => {
	const nom = req.params.nom;
  db.query("SELECT * FROM Applicants where nom = ? ORDER BY ID desc LIMIT 1",[nom], (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

app.get("/applicants/:nom/all", (req, res) => {
	const nom = req.params.nom;
  db.query("SELECT * FROM Applicants where nom = ? ORDER BY ID desc",[nom], (err, results) => {
    if (err) throw err;
    res.json(results);
	app.listen(3000, () => console.log("API running at"+results[1].Nom));
  });
});

app.get("/applicants/:id/:nom", (req, res) => {
	const id = req.params.id;
	const nom = req.params.nom;
  db.query("SELECT * FROM Applicants where id = ? and nom = ? ORDER BY ID desc",[id,nom], (err, results) => {
	  
    if (err) throw err;
    res.json(results);
	app.listen(3000, () => console.log("API running at http://localhost:3000"));
  });
});

app.get("/applicants", (req, res) => {
  db.query("SELECT * FROM Applicants ", (err, results) => {
    if (err) throw err;
    res.json(results);
	app.listen(3000, () => console.log("API running at "+results[results.length-1].Prenom));
  });
});

app.listen(3000, () => console.log("API running at http://localhost:3000"));
