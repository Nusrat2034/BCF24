require('dotenv').config();
const oracledb = require('oracledb');

const dbConfig = {
    user: "train_service",
    password: "TrainServicePass@123!",
    connectString: "localhost:1521/ORCLPDB"
    };

let connection;
async function connectToDB() {
  try {
    connection = await oracledb.getConnection(dbConfig);
    console.log('Train Service connected to the database');
  } catch (err) {
    console.error('Error connecting to the TRAIN_SERVICE database:', err);
  }
}

async function closeDB() {
    if (connection) {
      try {
        await connection.close();
        console.log('TRAIN_SERVICE database connection closed.');
      } catch (err) {
        console.error('Error closing TRAIN_SERVICE database connection:', err);
      }
    }
  }


module.exports = {
    connectToDB,
    closeDB,
  };      



