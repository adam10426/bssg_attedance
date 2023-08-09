const db = require("../config/db.config");

const getAll = async () => {
    try {
        const records = await db.query("SELECT * FROM members");
        return records.rows
    }
    catch (err) { 
        throw err
    }
}

const getOne = async (id) => { 
    try {
        const record = await db.query(`SELECT * FROM members WHERE user_id=${id}`)
        return record.rows
    }
    catch (err) { 
        throw err;
    }
}
 
module.exports = {
    getAll,
    getOne
}