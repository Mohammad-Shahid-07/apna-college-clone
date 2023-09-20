import mongoose from "mongoose";

let isConnected = false;

export const connectToDatabase = async () =>{
    mongoose.set('strictQuery', true);

    if (isConnected) {
        console.log("Mongodb is already connected");
        return
    }
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
          dbName: "apnaCollege",
          useNewUrlParser: true,
          useUnifiedTopology: true, 
        })
     isConnected = true;   
     console.log("Mongodb Is connected");
    } catch (error) {
        console.log("Mongodb Is not connected", error);
    }
}