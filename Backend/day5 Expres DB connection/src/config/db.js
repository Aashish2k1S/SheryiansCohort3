const mongoose = require("mongoose");

const conntDB = async () => {
    try {
        await mongoose.connect(
            "mongodb+srv://aashishshaw123kolkata_db_user:cohortaashish@cohort-cluster.ijorwap.mongodb.net/",
        );
        console.log("DB connected");
    } catch (error) {
        console.log(error);
    }
};

module.exports = { conntDB };

