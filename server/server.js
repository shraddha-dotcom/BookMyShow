const express = require("express")
const cors = require("cors");
const connectDb = require("./config/connection");
const bookingRoutes = require("./routes/bookinRoutes");

require("dotenv").config();


const app = express();

// middleware
app.use(cors({
    origin: ["https://bookmyshow-front.netlify.app"], // Allow requests only from your Netlify frontend URL
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"]
  }));
app.use(express.json());
app.use("/api", bookingRoutes)

//start Server
const PORT = process.env.PORT || 8080 ;
connectDb();
app.listen(PORT , () => console.log(`Server running on port ${PORT}`))