//assert is used to compare two boolean values.
//It is used to in mocha to test data before sending data to the db. If assert return true data will be send to db

const assert = require("assert")
const Student = require('../src/student')
//create description function
describe("Create the first data",()=>{
    it("save the student",()=>{
        // assert((2+8) === 10) check if it is true
        //create the new student
        const student1 = new Student({name:"John"})
        //read and save the student in the db
        student1.save()
        .then(()=>{
            assert(!student1.isNew)
            done()
        })
    })

    
})