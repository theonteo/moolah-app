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

const budgetsRoute = require('./routes/Budgets');
app.use('/budget', budgetsRoute);

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log('Moolah API is Running! 👍');
    console.log(`Sender is listening on port ${port}`)
});

export {connection};