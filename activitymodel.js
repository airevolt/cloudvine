module.exports = (pool) => {

const db = {};

db.create = async({weather, date, activity}) => {
    return (await pool.query(`INSERT INTO weather VALUES (DEFAULT, $1, $2, $3) RETURNING id`, [weather, date, activity]))
}

db.read = async () =>{
    let res;
    res = await pool.query('SELECT * FROM weather')
    return res.rows;
}
return db;
}