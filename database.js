const mongoose = require("mongoose");
require("dotenv").config();
const connectDatabase = async () => {
    try {
        const connection = await mongoose.connect(process.env.DB_URL, );
        console.log(`MongoDB connected with server: ${connection.connection.host}`);
    } catch (error) {
        console.error("MongoDB connection failed:", error);
        process.exit(1); // Exit process if connection fails
    }
};
const getConnection = () => {
    return mongoose.connection.readyState === 1 ? "Connected" : "Not Connected";
};

module.exports = { connectDatabase, getConnection };
