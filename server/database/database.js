const pool = require('pg').Pool;

require('dotenv').config();

const database = new pool({
    connectionString : `${process.env.DATABASE_URL}`,
    ssl : {
        rejectUnauthorized : false
    }
})

async function createTable() {

    try {
        const client = await database.connect();
        // let query = `CREATE TABLE posts (
        //             PID SERIAL PRIMARY KEY,
        //             USER_ID INT REFERENCES htusers(ID) ON DELETE CASCADE,
        //             POST TEXT,
        //             PUBLISHED BOOLEAN DEFAULT FALSE,
        //             CREATED DATE DEFAULT CURRENT_DATE,
        //             LAST_EDIT TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        //         );`
        // let results = await client.query(query);

        let query = `CREATE TABLE htusers (
                ID SERIAL PRIMARY KEY,
                USERNAME VARCHAR(50) UNIQUE NOT NULL,
                EMAIL VARCHAR(100) UNIQUE NOT NULL
            )`

        let results = await client.query(query);

        await client.release();

        return 0;
    } catch (error) {
        console.log(error);
        return -1;
    }
}

// createTable();

async function addUserToDB(data){
    try {
        const client = await database.connect();
        const query = `INSERT INTO htusers (USERNAME, EMAIL) 
                        VALUES ($1, $2)
                        ON CONFLICT (EMAIL) DO NOTHING;`
        const values = [data.username, data.email]

        const results = await client.query(query, values);
        await client.release();
        
        return 0;
    } catch (error) {
        console.log(error);
        return -1;
    }
}

module.exports = { addUserToDB }
