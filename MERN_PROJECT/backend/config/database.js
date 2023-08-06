const mongoose = require("mongoose");
const connect_database = () => {
    mongoose.connect(process.env.DB_URI).then((data) => {
        console.log(`MongoDB Connected with Server: ${data.connection.host}`);
    }).catch((err) => {
        console.log(err);
    });
};

module.exports = connect_database;
