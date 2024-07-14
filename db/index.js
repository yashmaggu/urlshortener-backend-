const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/short-url`)
        console.log("Congrats, database connected!!!", connectionInstance.connection.host);
    } catch (error) {
        console.error("MongoDB connection error", error);
        process.exit(1); // Exit the process with a failure
    }
};

module.exports = {connectDB};
