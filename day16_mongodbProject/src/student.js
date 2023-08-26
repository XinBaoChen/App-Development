//import module
const { stringify } = require("mocha/lib/utils")
const mongoose = require("mongoose")
const Schema = mongoose.Schema

//config the schema

const StudentSchema = new Schema({
    name: String,
    studentNumber: Number
})

//create the model schema for each student
const Student = mongoose.model("student",StudentSchema)

module.exports = Student