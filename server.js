const express = require('express');
const app = express();
const cors = require('cors');
const pg = require('pg')
const modelRoute = require('./routes');
const activitymodel = require('./activitymodel');

app.use(cors())
app.use(express.json())

const Pool = pg.Pool
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: 'galvanize',
    port: 5432,
})


app.use("/weather/", modelRoute(activitymodel(pool)))

app.listen(5003, () =>{
    console.log("Server is listening at port 5003")
})