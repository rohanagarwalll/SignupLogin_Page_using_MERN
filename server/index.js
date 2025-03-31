// const express = require("express")
// const mongoose = require("mongoose")
// const cors = require("cors")
// const EmployeeModel = require('./models/Employee')

// const app = express()
// app.use(express.json())
// app.use(cors())

// mongoose.connect("mongodb://127.0.0.1:27017/employee");

// app.post('/register', (req,res) =>{
//      EmployeeModel.create(req.body)
//      .then(employees => res.json(employees))
//      .catch(err=> res.json(err))
// });

// app.listen(3001,()=>{
//     console.log("server is running");
// });

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const EmployeeModel = require('./models/Employee');

const app = express();
app.use(express.json());
app.use(cors());

// MongoDB connection with error handling
mongoose.connect("mongodb://localhost:27017/employee", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Connected to MongoDB"))
    .catch(err => {
        console.error("Failed to connect to MongoDB:", err);
        process.exit(1); // Exit the process if the connection fails
    });

// Register employee route
app.post('/register', (req, res) => {
    const { name, email, password } = req.body;

    // Validate required fields
    if (!name || !email || !password) {
        return res.status(400).json({ error: "All fields (name, email, password) are required" });
    }

    // Create a new employee
    EmployeeModel.create({ name, email, password })
        .then(employee => {
            res.status(201).json(employee); // Return created employee with 201 status code
        })
        .catch(err => {
            console.error(err); // Log the error to the server console
            res.status(500).json({ error: "Server error, could not create employee" });
        });
});

// Start the server
app.listen(3001, () => {
    console.log("Server is running on http://localhost:3001");
});
