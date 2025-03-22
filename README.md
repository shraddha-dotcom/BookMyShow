# BookMyShow

This is a full-stack movie booking application built using:

Frontend: React (Vite) with Tailwind CSS

Backend: Express.js

Database: MongoDB

The application allows users to select movies, choose show slots and seat types, and confirm their bookings. The last booking details are also stored and retrieved for reference.


## Tech Stack

Frontend:

React (Vite)

Tailwind CSS

LocalStorage (for temporary data persistence)

Backend:

Express.js

MongoDB (for storing bookings)

CORS (for cross-origin requests handling)

dotenv (for environment variable management)


## Features

1- Movie selection from a predefined list

2- Slot and seat selection

3- Booking confirmation with backend storage

4- Display of the last booking details

5- LocalStorage integration for user selections

6- Optimized API calls and resource management

7- Proxying for smooth API requests from frontend to backend


## Installation

1. Clone the Repository:

      git clone https://github.com/shraddha-dotcom/BookMyShow.git

2. Setup Backend (Express & MongoDB):

        cd server
        npm install

. Create a .env file inside the server/ folder and add your MongoDB connection string:

        MONGO_URI=your_mongodb_connection_string
        PORT=your_port_number

. Start the backend server:

        npm start

3. Setup Frontend (React Vite)

        cd client
        npm install

. Start the React frontend:

      npm run dev
    
## Usage  Guide

1. Select a movie, show slot, and seat type.

2. Click the Book Now button to confirm your selection.

3. The booking will be saved in the database.

4. Refresh the page to view your last booking details.
 
# API Reference

## API Endpoints:

### Booking API

1. Create a Booking

Endpoint: POST /api/booking

Description: Saves a new booking in the database.

Request Body:

{
    "movie": "Movie Name",
    "slot": "Slot Time",
    "seats": "Seat Type"
}

Response:

{
  "message": "Booking successful"
}

2. Retrieve Last Booking

Endpoint: GET /api/booking

Description: Retrieves the last booking made.

Response (if booking exists):

{
  "movie": "Movie Name",
  "slot": "Slot Time",
  "seats": "Seat Type"
}

Response (if no booking exists):

{
  "message": "No previous booking found"
}

## Project Structure

      bookMyShow/
      │── client/  # Frontend (React Vite)
      │   ├── src/
      │   ├── public/
      │   ├── index.html
      │   ├── package.json
      │── server/           # Backend (Express.js)
      │   ├── models/       # MongoDB models
      │   ├── routes/       # API routes
      │   ├── server.js     # Express server setup
      │   ├── package.json  
      │── README.md         # Project Documentation
