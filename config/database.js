const moogoose = require("mongoose");
const connectDB = async () => {
  try {
    const conn = await moogoose.connect(process.env.DB_connection);
    console.log(`mongodb connected : ${conn.connection.host}`);
  } catch (error) {
    console.log(err);
    process.exit(1);
  }
};
module.exports = connectDB;
