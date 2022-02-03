const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const SareeRoute = require('./Routes/SareeRoute');
require('dotenv/config');
const PORT = process.env.PORT || 8000;

// DB connection
mongoose.connect(process.env.DB_CONNECTION,()=>{
    console.log("Database connected");
});


// Booting the server up
const app = express();
app.use(cors());
app.use(express.json());




app.get("/",(req,res)=>{
    res.send("Deeva Backend");
})

app.use("/api/SareeRoute",SareeRoute);

app.listen(PORT,()=>{
    console.log("Server running in port "+ PORT);
});