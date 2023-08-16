const {Client} = require('pg')
const db = new Client({
  user: "bssg",
  host: "localhost",
  database: "attendance",
  password: "div3",
  port: 5432,
});

module.exports =db
