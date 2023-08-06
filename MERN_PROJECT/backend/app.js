const express = require("express");

const app = express();

const errorMiddleware = require("./middleware/error");

//Route imports

const products = require("./routes/productRoute");

app.use(express.json());
app.use("/api/v1", products);

//Middleware for errors

app.use(errorMiddleware);


module.exports = app;



/*const express = require("express");
const app = express
app.use(express.json());

//Route imports

const products = require("./routes/productRoute");

app.use("api/v1", products);

module.exports = app*/