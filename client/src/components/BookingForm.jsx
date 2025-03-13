import React, { useState, useEffect } from "react";
import { movies, slots, seatTypes } from "../data/data";

const BookingForm = ({ setLastBooking }) => {
    const [selectedMovie, setSelectedMovie] = useState(localStorage.getItem("movie") || "");
    const [selectedSlot, setSelectedSlot] = useState(localStorage.getItem("slot") || "");
    const [seats, setSeats] = useState(
        JSON.parse(localStorage.getItem("seats")) || {}
    );


    // Load last booking on mount only
    useEffect(() => {
        const savedBooking = localStorage.getItem("lastBooking");
        if (savedBooking) {
            setLastBooking(JSON.parse(savedBooking));
        }
    }, []);

    // Save selection to localStorage((without affecting last booking))
    useEffect(() => {
        localStorage.setItem("movie", selectedMovie);
        localStorage.setItem("slot", selectedSlot);
        localStorage.setItem("seats", JSON.stringify(seats));
    }, [selectedMovie, selectedSlot, seats]);

    // Handle seat input
    const handleSeatChange = (type, value) => {
        setSeats(prev => ({
            ...prev,
            [type]: value ? parseInt(value) : 0,
        }));
    };

    // Handle form submission
    const handleSubmit = async () => {
        if (!selectedMovie || !selectedSlot || !Object.values(seats).some(seat => seat > 0)) {
            alert("Please fill all fields");
            return;
        }

        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/api/booking`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ movie: selectedMovie, slot: selectedSlot, seats }),
            });

            if (response.ok) {
                const newBooking = await response.json();
                setLastBooking(newBooking);  //Update last booking state directly using POST response
                localStorage.setItem("lastBooking", JSON.stringify(newBooking));  //Save last booking in localStorage
                alert("Booking successful!");

                // Reset state without clearing last booking
                setSelectedMovie("");
                setSelectedSlot("");
                setSeats({});
                localStorage.removeItem("movie");
                localStorage.removeItem("slot");
                localStorage.removeItem("seats");


            }
        } catch (error) {
            console.error("Error:", error);
            alert("Booking failed!");
        }
    };

    return (
        <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Select Movie:</h2>
            <div className="grid grid-cols-2 gap-4">
                {movies.map(movie => (
                    <div
                        key={movie}
                        className={`p-3 border rounded-lg text-center cursor-pointer 
                    ${selectedMovie === movie ? 'bg-blue-500 text-white' : 'bg-gray-100 hover:bg-gray-200'}`}
                        onClick={() => setSelectedMovie(movie)}
                    >
                        {movie}
                    </div>
                ))}
            </div>

            <h2 className="text-xl font-semibold mt-6 mb-4">Select Slot:</h2>
            <div className="grid grid-cols-2 gap-4">
                {slots.map(slot => (
                    <div
                        key={slot}
                        className={`p-3 border rounded-lg text-center cursor-pointer 
                    ${selectedSlot === slot ? 'bg-green-500 text-white' : 'bg-gray-100 hover:bg-gray-200'}`}
                        onClick={() => setSelectedSlot(slot)}
                    >
                        {slot}
                    </div>
                ))}
            </div>

            <h2 className="text-xl font-semibold mt-6 mb-4">Seats:</h2>
            <div className="grid grid-cols-2 gap-4">
                {seatTypes.map(type => (
                    <div key={type} className="flex items-center gap-2">
                        <label className="w-16 font-medium">{type}:</label>
                        <input
                            type="number"
                            id={`seat-${type}`}
                            className="w-20 p-2 border rounded-md focus:ring-2 focus:ring-blue-400 outline-none"
                            value={seats[type] || ""}
                            onChange={(e) => handleSeatChange(type, e.target.value)}
                            min="0"
                        />
                    </div>
                ))}
            </div>

            <button
                onClick={handleSubmit}
                className="mt-6 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
            >
                Book Now
            </button>
        </div>

    );
};

export default BookingForm;
