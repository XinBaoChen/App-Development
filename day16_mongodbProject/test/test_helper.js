//import mongoose
const mongoose = require("mongoose")

//connect to database, student_test is the database
mongoose.connect("mongodb://localhost/students_test")

//check if it is connected
mongoose.connection
    //.once watches for mongoDB to connect the first time the event occurred
    .once("open",() => {console.log("\n --- Connected to mongoDB --- \n")})  
    //.on watches for error in the connection
    .on("error",(e)=>{
        console.log("Error connecting....", e)
    })
    //clear previous db actions
    beforeEach((done) =>{
        mongoose.connection.collections.students.drop()
        done()
    })
 