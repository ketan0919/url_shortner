const mongoose = require("mongoose");

async function connectDb(url){
    return mongoose.connect(url);
}

//always export functions in object form
module.exports = {connectDb};