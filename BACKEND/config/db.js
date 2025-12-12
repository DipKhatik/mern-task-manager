// import mongoose from "mongoose";

// export const connectDB = async () =>{
//     try{
//         const conn = await mongoose.connect(process.env.MONGO_URI);
//         console.log(`MongoDB Connected: ${conn.connection.host}`);
//     }
//     catch(error){
//         console.log(`Error: ${error.message}`);
//         process.exit(1);
//     }
// }
import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB Connected");
  } catch (error) {
    console.error("MongoDB Error:", error.message);
    process.exit(1);
  }
};
