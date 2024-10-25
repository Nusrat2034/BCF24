require('dotenv').config();
const oracledb = require('oracledb');

const dbConfig = {
    user: "payment_service",
    password: "PaymentServicePass@123!",
    connectString: "localhost:1521/ORCLPDB"
    };

let connection;
async function connectToDB() {
  try {
    connection = await oracledb.getConnection(dbConfig);
    console.log('Payment Service connected to the database');
  } catch (err) {
    console.error('Error connecting to the Payment database:', err);
  }
}

async function closeDB() {
    if (connection) {
      try {
        await connection.close();
        console.log('Payment database connection closed.');
      } catch (err) {
        console.error('Error closing Payment database connection:', err);
      }
    }
  }


module.exports = {
    connectToDB,
    closeDB,
  };      



