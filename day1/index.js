const express = require("express");
const mongoose = require("mongoose"); //step 1 : import mongoose 
const app = express();

app.use(express.json());

//connect to mongodb
mongoose.connect("mongodb://localhost:27017/Flipkart") //step 2 : connect to mongodb (make sure mongodb is running on your machine)
.then(() => console.log("MongoDB connected successfully"))
.catch((error) => console.error("Could not connect to MongoDB", error));



//empty schema (only for fetching)
const userSchema = new mongoose.Schema({});
//collection name
const orderSchema = new mongoose.Schema({});
//colection name
const user = mongoose.model("users", userSchema); 
const orders = mongoose.model("orders", orderSchema);
const ecommerce = mongoose.model("ecommerce", userSchema);


//basic route
app.get("/", (req, res) => {
    res.send("server is working");
});

//GET route using find() method to fetch all users from the database
    app.get("/users", async (req, res) => {
        try {

            //fetch all users from the database

            const data = await user.find({});
            //if we want to fetch specific data then:
            
            //const data = await user.find({city: "Bangalore"});
            //const data = await user.find({price: {$gt: 1000}}); fetch all products with price greater than 1000

            res.json(data);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    });


app.get("/orders", async (req, res) => {
    try {

        //fetch all orders from the database

        const data = await orders.find({});

        res.json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.get("/ecommerce", async (req, res) => {
    try {

        //fetch all ecommerce data from the database

        const data = await ecommerce.find({});

        res.json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});



app.get("/", (req, res) => {
    res.send("Devanshi");
});






app.listen(3000, () => {
    console.log("Example app listening on port 3000!");
});