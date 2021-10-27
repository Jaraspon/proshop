const mysql = require('mysql2/promise');
import { DATABASE } from 'server.config'
const pool = mysql.createPool(DATABASE);


async function query(sql: any, params: any) {
  const [rows, fields] = await pool.execute(sql, params);
  return rows;
}




module.exports = {
  query
}