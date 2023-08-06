const app = require("./app.js");

const dotenv = require("dotenv");
const connect_database = require("./config/database.js");

//config
dotenv.config({path: "backend/config/config.env"});
connect_database()

app.listen(process.env.PORT,()=>{
    console.log(`Server is working on http://localhost:${process.env.PORT}`);
})