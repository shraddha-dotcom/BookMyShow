const mongoose = require("mongoose");
require("dotenv").config();

const connectDb = async () =>{
    try{

        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
          });
        // await mongoose.connect(process.env.MONGO_URI, {
        //     useNewUrlParser: true,
        //      useUnifiedTopology: true,
        // });
        console.log(` MongoDB connected to: ${conn.connection.host}`);
    }catch(err) {
        console.error("MongoDB connection error:", err);
         process.exit(1);
    }
}

module.exports = connectDb;