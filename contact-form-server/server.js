const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// MySQL connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'admin',
    password: 'admin6969',
    database: 'contact_db'
});

db.connect((err) => {
    if (err) throw err;
    console.log('Connected to MySQL database.');
});

// Route to handle form submission
app.post('/submit', (req, res) => {
    const { name, email, message } = req.body;
    const sql = 'INSERT INTO contacts (name, email, message) VALUES (?, ?, ?)';
    db.query(sql, [name, email, message], (err, result) => {
        if (err) throw err;
        res.send('Contact information saved.');
    });
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});