import React from "react";

const BookingDetails = ({ lastBooking }) => {
    if (!lastBooking || Object.keys(lastBooking).length === 0) {
        return (
            <div className="p-4 border rounded-lg w-full bg-gray-50 mt-4">
                <h2 className="text-xl font-bold mb-2">Last Booking Details</h2>
                <p>No previous booking found.</p>
            </div>
        );
    }


    return (
        <div className="p-4 border rounded-lg w-full bg-gray-50 mt-4">
            <h2 className="text-xl font-bold mb-2">Last Booking Details</h2>
            <p><strong>Movie:</strong> {lastBooking.movie || "N/A"}</p>
            <p><strong>Slot:</strong> {lastBooking.slot || "N/A"}</p>
            <p><strong>Seats:</strong></p>
            <ul>
                {lastBooking.seats && Object.entries(lastBooking.seats).length > 0 ? (
                    Object.entries(lastBooking.seats).map(([seatType, count]) => (
                        <li key={seatType}>{seatType}: {count}</li>
                    ))
                ) : (
                    <p>No seats selected.</p>
                )}
            </ul>
        </div>
    );
};

export default BookingDetails;
