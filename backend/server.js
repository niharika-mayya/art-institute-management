const express =require("express")  //Framework to build backend api
const cors=require("cors") //Allows frontend to talk to backend
const connectDB = require("./config/configDB");
const authRoutes=require("./Routes/authRoutes")

connectDB()

const app= express() //Creates server application using express

//middleware
app.use(cors()) //Allows request from frontend(different port like 5173). Without this browser blocks request
app.use(express.json()) //Allows backend to read json data from the frontend

//Route
app.use("/api", authRoutes);

// Start server
app.listen(5000, () => {
  console.log("Server running on port 5000");
});