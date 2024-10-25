require('dotenv').config();
const oracledb = require('oracledb');

const dbConfig = {
    user: "otp_service",
    password: "OTPServicePass@123!",
    connectString: "localhost:1521/ORCLPDB"
    };

let connection;
async function connectToDB() {
  try {
    connection = await oracledb.getConnection(dbConfig);
    console.log('OTP Service connected to the database');
  } catch (err) {
    console.error('Error connecting to the OTP database:', err);
  }
}

async function closeDB() {
    if (connection) {
      try {
        await connection.close();
        console.log('OTP database connection closed.');
      } catch (err) {
        console.error('Error closing OTP database connection:', err);
      }
    }
  }


module.exports = {
    connectToDB,
    closeDB,
  };      



