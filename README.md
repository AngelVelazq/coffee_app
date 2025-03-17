# coffee_app

Coffee Shop App

A simple web application for ordering coffee online. This project consists of a frontend built with HTML, CSS, and JavaScript, and a backend powered by Express.js and Supabase.

Table of Contents

Features

Installation

Backend Setup

API Endpoints

Environment Variables

Technologies Used

License

Features

View coffee menu and available items.

Add items to a cart.

Place an order.

Fetch products from a Supabase database.

Installation

Prerequisites

Make sure you have the following installed:

Node.js (v16 or later recommended)

npm (comes with Node.js)

Clone the Repository

git clone https://github.com/yourusername/coffee_app.git
cd coffee_app

Backend Setup

Install Dependencies

npm install

Start the Server

npm start

The backend will run on http://localhost:5000 by default.

API Endpoints

Method

Endpoint

Description

GET

/api/products

Fetch all products

POST

/api/orders

Place a new order

Environment Variables

Create a .env file in the root directory and add the following:

SUPABASE_URL=your_supabase_url
SUPABASE_KEY=your_supabase_key
PORT=5000

Technologies Used

Frontend: HTML, CSS, JavaScript

Backend: Node.js, Express.js

Database: Supabase (PostgreSQL)

Other: dotenv, cors

License

This project is licensed under the MIT License.

