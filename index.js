const express = require("express");
const dotenv = require("dotenv");
const { connectDB } = require("./db/index.js");
dotenv.config();
const URL=require('./models/url.models.js')
const app = express();
const PORT = process.env.PORT || 8000;
const path=require("path")
// Middleware to parse JSON bodies
app.use(express.json());


app.set("view engine","ejs");
app.set("views",path.resolve("./views"))




const urlRoute = require('./routes/url.route.js');

// Call the connectDB function to establish the database connection
connectDB().then(() => {
    console.log("Database connected !!!!!");
}).catch(error => {
    console.error("Failed to connect to the database:", error);
});

// Use routes only after the database is connected
app.use("/url", urlRoute);


app.get("/test",async(req,res)=>{
    const allUrls=await URL.find({});
    return res.render('home')
})








app.listen(PORT, () => {
    console.log(`Listening at Port ${PORT}`);
});
