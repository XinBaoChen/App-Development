function greeter(greet:string){
    console.log(`Welcome to TypeScript ${greet}`)
}
let n = 'XinBao'
greeter(n)
//implicit data
let y = -10
y = 7

//explicit boolean data type
let isCorrect:boolean
isCorrect = true

//explicita data in array

let colors:string[] = ['red', 'yellow','green']
let nums:Array<number> = [1,4,3,23,14]

//combine data type 
let dtype:[number,string,boolean] = [14,'hello',true]

//never data type
// let x:never = 14

//data type for classes

let m:string = 'John'
let mLen = m.length
console.log(`${m} has ${mLen} letters.`)

//cast data type in an implicit
let firstName = 'Cynthia'
let lenFristName = firstName.length
console.log(`${firstName} has ${lenFristName} letters`)

//function in typescript
//return value type
function getHour():number{
    return new Date().getHours() //implicitly returns number
}
console.log("It is " + getHour())

//void fun
function greeting():void{
    console.log("Welcome to Angular data type")
}

function getSum(num1:number, num2:number, name:string):string{
    name = name + "! The sum is " + (num1 + num2)
    return name
}

console.log(6,10,"Man")

//three dots notation

function getAverage(...n:number[]):number{
    let total = 0
    let count = 0
    let avg = 0
    for(let i=0; i<n.length; i++){
        total += n[i]
        count++
    }
    avg = total / count
    return avg
}
class Car{
    brand:string
    model:string
    yearManufacture:number
    constructor(brand, model, yearManufacture){
        this.brand = brand
        this.model = model
        this.yearManufacture = yearManufacture
    }
    year(){
        console.log(this.yearManufacture)
    }
}
//assign values to each class
let car1 = new Car("Tesla",'S',2023)
console.log(car1)
//inheritance ts
//define class
class Person{
    private name:string = 'Peter Pan'
    save(){
        console.log('Registration Successful!')
    }
}
class Customer extends Person{
    sale(){
        console.log('x items sold')
    }
}
class Employee extends Customer{
    salary(){
        console.log('Salary paid!')
    }
}
//regular class
let person1 = new Person
let customer1 = new Customer
person1.save()
customer1.sale()


//inherentance class
let employee1 = new Employee
employee1.sale()
employee1.save()