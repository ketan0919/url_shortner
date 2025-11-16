const express = require("express");
const app = express();
const urlRoute = require("./routes/url");
const {connectDb} = require("./connection");

const PORT = 8001;

app.use(express.json());
//connection to Db
connectDb("mongodb://127.0.0.1:27017/url_short")
.then(()=>console.log("mongoDb connected!"))
.catch((err)=> console.log("mongo err",err));

app.use("/url",urlRoute);

app.listen(PORT,()=>console.log(`Server started at ${PORT}`));