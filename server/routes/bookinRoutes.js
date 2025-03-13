const express =require("express");
const Booking = require("../models/Booking");
const router = express.Router();


// Create a new booking
router.post("/booking", async (req ,res) => {
    try{
        const {movie , slot , seats} = req.body;
        
        const newBooking = new Booking({movie , slot , seats});
        await newBooking.save();
        // console.log("Booking saved:", newBooking);

            // Return latest booking immediately
            res.status(200).json(newBooking);
        
    }catch(err){
        console.error(" Error saving booking:", err);
        res.status(500).json({ error: "Server error" });
    }
});

// get: retrieve last booking
router.get("/booking" , async (req ,res) => {
    try{
        const lastBooking = await Booking.findOne().sort({_id: -1});

        if (lastBooking) {
            res.status(200).json(lastBooking);
        } else {
            res.status(200).json({ message: "No previous booking found" });
        }

       
    }catch(err){
        console.error(" Error fetching booking:", err);
        res.status(500).json({ error: "Server error" });
    }
})

module.exports = router;