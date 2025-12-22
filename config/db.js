import mysql from 'mysql2';
import dotenv from 'dotenv';

dotenv.config();

//prtimtah membuat koneksi ke database
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

//jalakan koneksi ke database
db.connect((err) => {
  if (err) {
    console.error('Error koneksi database:', err);
    return;
  }

  //jika berhasil
  console.log("mysql berhasil conect!");
});

export default db;