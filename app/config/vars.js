require("dotenv").config();

const db_host = process.env.HOST;
const db_name = process.env.DB_NAME;
const db_port = process.env.PORT;

module.exports = { db_host, db_name, db_port };
