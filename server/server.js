const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const mysql = require("mysql2");
const PORT = process.env.PORT || 5000;

app.use(cors({ origin: "http://localhost:3000" }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "syshone",
  database: "pokemon_type",
});

// データを取得する(get メソッド)
app.get("/api/get/:name", (req, res) => {
  const { name } = req.params;
  const sqlSelect = "SELECT * FROM type WHERE name = ?";
  connection.query(sqlSelect, name, (error, result) => {
    if (error) throw error;
    res.status(200).json(result);
  });
});

app.listen(PORT, () => {
  console.log(`サーバー起動中 : Server started on port:${PORT}`);
});
