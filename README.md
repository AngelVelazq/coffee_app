# Coffee Shop App

## A simple web application for ordering coffee online. This project consists of a frontend built with HTML, CSS, and JavaScript, and a backend powered by Express.js and Supabase.



### Table of Contents

* Features
* Installation
* Backend Setup
* API Endpoints 
* Environment Variables
* Technologies used
* License 

## Features
* View coffee menu and available items.
* Add items to a cart for easy ordering.
* Place an order through the app.
* Fetch products from a Supabase database.

![This is an alt text.](/images/logo.png)

# Installation
## Prerequisites
* Node.js (v16 or later recommended)
* npm (comes with Node.js)
* Git (to clone the repository)

## Clone Repository
```
git clone https://github.com/AngelVelazq/coffee_app
cd coffee_app
```

# Backend Setup
## Install Dependencies
```
~/coffee_app$ npm install
```
## Start the Server
```
npm run start
```
### The backend will run on http://localhost:5000 by default.


## API Endpoints

| Method  | Endpoint | Description | Example Response |
| ------- | -------- | ----------- | ---------------- |
| GET     | /api/products | Fetch all products | [{ id: 1, name: 'Latte', price: 5.0 }, {...}]
| POST | /api/orders | Place a new order | { orderId: 123, status: 'pending' } |



# Environment Variables
## .env (/coffee_app/.env)
```
SUPABASE_URL=your_supabase_url
SUPABASE_KEY=your_supabase_key
```
## Call Method (backend/db/supabaseClient.js)
#### In your backend, you load the environment variables like this:
```
require('dotenv').config();  
```
#### (This will load the variables from the .env file into your application.)


# Technologies Used
* Frontend: **HTML, CSS, JavaScript**

* Backend: **Node.js, Express.js**

* Database: Supabase **(PostgreSQL)**

* Environment Management: **dotenv**
* Cross-Origin Resource Sharing (CORS): **cors**
