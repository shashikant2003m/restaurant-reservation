import mongoose from "mongoose";

export const dbConnection = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      dbName: "restaurant",
    })
    .then(async () => {
      console.log("Connected to database!");
      
      try {
 
        await mongoose.connection.createCollection("reservations");
        
      } catch (error) {
        console.log(`Error creating collection: ${error}`);
      }
    })
    .catch((err) => {
      console.log(`Some error occurred while connecting to the database: ${err}`);
    });
};
