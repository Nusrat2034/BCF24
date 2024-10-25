require('dotenv').config();
const oracledb = require('oracledb');

const dbConfig = {
    user: "seat_selection",
    password: "SeatSelectPass@123!",
    connectString: "localhost:1521/ORCLPDB"
    };

let connection;
async function connectToDB() {
  try {
    connection = await oracledb.getConnection(dbConfig);
    console.log('Seat Selection Service connected to the database');
  } catch (err) {
    console.error('Error connecting to the Seat Selection Service database:', err);
  }
}

async function closeDB() {
    if (connection) {
      try {
        await connection.close();
        console.log('Seat Selection database connection closed.');
      } catch (err) {
        console.error('Error closing Seat Selection database connection:', err);
      }
    }
  }


module.exports = {
    connectToDB,
    closeDB,
  };      



