import React, { useState, useEffect } from "react";
import BookingDetails from "./components/BookingDetails";
import BookingForm from "./components/BookingForm";

const App = () => {

  const [lastBooking, setLastBooking] = useState(null);

  useEffect(() => {
    const fetchLastBooking = async () => {
      try {
        const response = await fetch("/api/booking");
        const data = await response.json();
        if (data && !data.message) setLastBooking(data);
      } catch (error) {
        console.error("Error fetching last booking:", error);
      }
    };

    fetchLastBooking();
  }, []);



  return (
    <div className="p-6 w-full max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold m-4 text-center">Book The Show</h1>
      <BookingForm setLastBooking={setLastBooking} />

      <BookingDetails lastBooking={lastBooking} />
    </div>
  );
};

export default App;