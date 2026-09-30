const { default: mongoose } = require("mongoose");

const connectDB = async () => {
    await mongoose.connect("");
    console.log("DB is connected");
};

module.exports = { connectDB };
