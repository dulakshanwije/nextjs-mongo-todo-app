import mongoose from "mongoose";

const connectDB = () => {
    try {
        mongoose.connect(process.env.MONGO_URI);
        console.log("Connected Succesfully");
    } catch (error) {
        console.error(error);
    }
}

export default connectDB;