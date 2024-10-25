require('dotenv').config();
const oracledb = require('oracledb');

const dbConfig = {
    user: "user_auth",
    password: "UserAuthPass@123!",
    connectString: "localhost:1521/ORCLPDB"
    };

let connection;
async function connectToDB() {
  try {
    connection = await oracledb.getConnection(dbConfig);
    console.log('User Authentication Service connected to the database');
  } catch (err) {
    console.error('Error connecting to the USER_AUTH database:', err);
  }
}

async function closeDB() {
    if (connection) {
      try {
        await connection.close();
        console.log('USER_AUTH database connection closed.');
      } catch (err) {
        console.error('Error closing USER_AUTH database connection:', err);
      }
    }
  }


module.exports = {
    connectToDB,
    closeDB,
  };      



