import express, { Request, Response } from 'express';
import mysql from 'mysql';
import dotenv from 'dotenv';

dotenv.config();
const app = express();

const connectionString = process.env.DATABASE_URL || '';
// TODO: write inside the .env file and use the connectionString var
const connection = mysql.createConnection({
    host: 'us-cdbr-east-04.cleardb.com',
    user: 'b6ce105c12adf5',
    password: 'fe7ea5b6',
    database: 'heroku_58f13569eb38541'
});
connection.connect();

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