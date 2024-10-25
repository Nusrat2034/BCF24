require('dotenv').config();
const oracledb = require('oracledb');

const dbConfig = {
    user: "booking_service",
    password: "BookingServicePass@123!",
    connectString: "localhost:1521/ORCLPDB"
    };

let connection;
async function connectToDB() {
  try {
    connection = await oracledb.getConnection(dbConfig);
    console.log('BOOKING Service connected to the database');
  } catch (err) {
    console.error('Error connecting to the BOOKING Service database:', err);
  }
}

async function closeDB() {
    if (connection) {
      try {
        await connection.close();
        console.log('BOOKING Service database connection closed.');
      } catch (err) {
        console.error('Error closing BOOKING Service database connection:', err);
      }
    }
  }


module.exports = {
    connectToDB,
    closeDB,
  };      



