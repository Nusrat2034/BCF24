require('dotenv').config();
const oracledb = require('oracledb');

const dbConfig = {
    user: "notification_service",
    password: "NotificationPass@123!",
    connectString: "localhost:1521/ORCLPDB"
    };

let connection;
async function connectToDB() {
  try {
    connection = await oracledb.getConnection(dbConfig);
    console.log('Notification Service connected to the database');
  } catch (err) {
    console.error('Error connecting to the Notification database:', err);
  }
}

async function closeDB() {
    if (connection) {
      try {
        await connection.close();
        console.log('Notification database connection closed.');
      } catch (err) {
        console.error('Error closing Notification database connection:', err);
      }
    }
  }


module.exports = {
    connectToDB,
    closeDB,
  };      



