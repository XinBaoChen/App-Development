const assert = require("assert")
const Student = require("../src/student")

describe("Updating records",()=>{
    let student1, student2
    beforeEach((done)=>{
        student1 = new Student({name:"John", studentNumber: 123})
        student2 = new Student({name:"John", studentNumber: 144})
        student1.save()
        student2.save()
        .then(()=>{done()})
    })

    it("Update the student number of all the John",async()=>{
        const student = await Student.updateMany({name:"John"}, {studentNumber:110})
        const response = await Student.find({})
        assert(response[0].studentNumber === 110 && response[1].studentNumber === 110)

    })
    /*
        it("Set and Save", done =>{
            student1.set("name","Ann")
            student1.save()
            .then(() =>Student.find({}))
            
            .then((students)=>{
                assert(students[0].name === "Ann")
                done()
            })
            
        })
        */
})