const assert = require("assert")
const Student = require("../src/student")

describe("Read data", ()=>{
    let student1, student2, student3
    beforeEach((done)=>{
        student1 = new Student({name: "John"})
        student2 = new Student({name: "Maria"})
        student3 = new Student({name: "John"})
        student1.save()
        student2.save()
        student3.save()
        .then(()=>{done()})
    })
    // it("Find all student with name John", async () =>{
    //     const students = await Student.find({name:"John"})
    //     assert(students[1]._id.toString() === student1._id.toString())
    // })
    //search through the name
    it("Find one person with name John", async() =>{
        const students = await Student.findOne({_id:student1.id})
        // console.log(students)
        // console.log(student1._id)
        assert(students.name ===  "John")
    })
})