const express = require("express");
const app = express();
const urlRoute = require("./routes/url");
const {connectDb} = require("./connection");
const URL = require("./models/url");

const PORT = 8001;

app.use(express.json());
//connection to Db
connectDb("mongodb://127.0.0.1:27017/url_short")
.then(()=>console.log("mongoDb connected!"))
.catch((err)=> console.log("mongo err",err));

app.use("/url",urlRoute);

app.get("/:shortId",async(req,res)=>{
    const shortId = req.params.shortId;
    const entry = await URL.findOneAndUpdate({shortId},{
        $push:{
            visitHistory:{
                timestamp: Date.now(), 
            },
        }
    })
    res.redirect(entry.redirectURL);
});
app.listen(PORT,()=>console.log(`Server started at ${PORT}`));