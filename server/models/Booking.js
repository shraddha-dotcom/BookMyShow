const mongoose = require("mongoose");

const BookingSchema = new mongoose.Schema({
    movie:{
        type: String,
        required: true,
    },
    slot:{
        type: String,
        required: true,

    },
    seats:{
        type: Object,
        required: true,
    },
})

const Booking = mongoose.model("Booking" , BookingSchema);
module.exports = Booking;