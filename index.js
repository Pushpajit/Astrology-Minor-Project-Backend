const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require('cors');
const panjiRoute = require("./view/routes");


const app = express();
dotenv.config();


// Connect database
async function connectToDatabase(){
    try{
        const connection = await mongoose.connect(process.env.MONGODB_URL);
        console.log("Connected to the database!");
    }catch(err){
        console.log(`[ERROR]: ${err}`);
    }
    
}connectToDatabase();


// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());


// Use your route for panjiData
app.use('/api', panjiRoute);


app.listen(5000, () => {
    console.log("Backend server started localhost:5000");
})