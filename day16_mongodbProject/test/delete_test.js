const assert = require("assert")
const Student = require("../src/student")

describe("Delte the records",()=>{
    let student1

    beforeEach(() =>{
        student1 = new Student({name: "John"})
        student1.save()
        .then(()=>done())
    })

    it("Delete by id", done=>{
        Student.findByIdAndDelete(student1._id)
        .then(()=>Student.findOne({name:"John"}))
        .then((student)=>{
            assert(student === null)
            done()
        })
    })

    it("Delete by name", done=>{
        Student.findOneAndDelete({name:"John"})
        .then(()=>Student.findOne({_id:student1._id}))
        .then((student)=>{
            assert(student === null)
            done()
        })
    })

    it("Delete John", done=>{
        Student.deleteOne({name:"John"})
        .then(()=>Student.findOne({_id:student1._id}))
        .then((student)=>{
            assert(student === null)
            done()
        })
    })

    //delete by name
    // it("Delete by name", done =>{
    //     Student.findOneAndDelete({name:"John"})
    //     .then(()=>Student.findOne({_id:student1._id}))
    //     .then((student) =>{
    //         assert(student === null)
    //         done()
    //     })
    // })
})