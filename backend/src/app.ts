import express, { Request, Response } from 'express';
import mysql from 'mysql';
import dotenv from 'dotenv';

dotenv.config();
const app = express();

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PWD,
    database: process.env.DB_NAME
});
connection.connect();

//const budgetsRoute = require('./routes/Budgets');
//app.use('/budget', budgetsRoute);

//TODO: should be abstracted to another file in routes folder
// get all
app.get('/', (req: Request, res: Response) => {
    const query = 'SELECT * FROM budgets';
    console.log("getting all")
    connection.query(query, (err, rows) => {
        if (err) throw err;

        const retVal = {
            data: rows,
            message: '',
        };
        if (rows.length === 0) {
            retVal.message = 'No records found';
        }
        res.send(rows);
    });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log('Moolah API is Running! 👍');
    console.log(`Sender is listening on port ${port}`)
});

module.exports = connection;