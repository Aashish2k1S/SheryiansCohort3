const { default: mongoose } = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect(
            "mongodb+srv://aashishshaw123kolkata_db_user:cohortaashish@cohort-cluster.ijorwap.mongodb.net/notes-app",
        );
        console.log("DB is connected");
    } catch (error) {
        console.log("error connecting DB: ", error);
    }
};

module.exports = { connectDB };
