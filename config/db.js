import mongoose from "mongoose";
import colors from "colors";

const connectDB = async () => {
  try {
    const password = process.env.PASSWORD;
    const con = await mongoose.connect(`mongodb+srv://rajsumit1793:${password}@cluster1.8ixsrpo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1`);
    console.log(
      `Connected to Database Successfully ${con.connection.host}`.bgBlue.white
    );
  } catch (error) {
    console.log(`Error in database ${error}`.bgYellow.white);
  }
};
export default connectDB;
