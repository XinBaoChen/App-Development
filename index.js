const express = require("express")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
const req = require("express/lib/request")

//create app using express
const app = express()
app.use(bodyParser.json())
app.use(express.static("public"))
app.use(bodyParser.urlencoded({extended: true}))

//connect database
mongoose.connect("mongodb://localhost/userlogin",{useNewUrlParser: true, useUnifiedTopology: true})

//check connection
const db= mongoose.connection
db.once("open",()=>{console.log("Connected to mongodb...")})
db.on("error",(error)=>{console.log("Error connecting...",error)})

//create loading page
app.get("/",(req,res)=>{
    res.redirect("index.html")
}).listen(3000)

//posting the form
app.post("/login",(request, response)=>{
    try{
        //get data from index html
        const username = request.body.username
        const password = parseInt(request.body.password)
        //test that the app is reading the username and password
        console.log(`entered username = ${username} entered password ${password}`)

        // get data from database
        const usermail = db.collection("users").findOne({username:username},(err,res)=>{
            if(response === null){
                response.send("Information does not match")
            }
            else if(err){
                throw err
            }
            if(res.password === password){
                console.log("Login successful!")
                return response.redirect("login.html")
            }
            else{
                console.log("Password doesn't match")
                response.send("PASSWORD DOESN'T MATCH")
            }
        })
    } catch(error){
        console.log("Invalid information")
    }
})