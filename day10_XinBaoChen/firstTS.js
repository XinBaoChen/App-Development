var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
function greeter(greet) {
    console.log("Welcome to TypeScript ".concat(greet));
}
var n = 'XinBao';
greeter(n);
//implicit data
var y = -10;
y = 7;
//explicit boolean data type
var isCorrect;
isCorrect = true;
//explicita data in array
var colors = ['red', 'yellow', 'green'];
var nums = [1, 4, 3, 23, 14];
//combine data type 
var dtype = [14, 'hello', true];
//never data type
// let x:never = 14
//data type for classes
var m = 'John';
var mLen = m.length;
console.log("".concat(m, " has ").concat(mLen, " letters."));
//cast data type in an implicit
var firstName = 'Cynthia';
var lenFristName = firstName.length;
console.log("".concat(firstName, " has ").concat(lenFristName, " letters"));
//function in typescript
//return value type
function getHour() {
    return new Date().getHours(); //implicitly returns number
}
console.log("It is " + getHour());
//void fun
function greeting() {
    console.log("Welcome to Angular data type");
}
function getSum(num1, num2, name) {
    name = name + "! The sum is " + (num1 + num2);
    return name;
}
console.log(6, 10, "Man");
//three dots notation
function getAverage() {
    var n = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        n[_i] = arguments[_i];
    }
    var total = 0;
    var count = 0;
    var avg = 0;
    for (var i = 0; i < n.length; i++) {
        total += n[i];
        count++;
    }
    avg = total / count;
    return avg;
}
var Car = /** @class */ (function () {
    function Car(brand, model, yearManufacture) {
        this.brand = brand;
        this.model = model;
        this.yearManufacture = yearManufacture;
    }
    Car.prototype.year = function () {
        console.log(this.yearManufacture);
    };
    return Car;
}());
//assign values to each class
var car1 = new Car("Tesla", 'S', 2023);
console.log(car1);
//inheritance ts
//define class
var Person = /** @class */ (function () {
    function Person() {
        this.name = 'Peter Pan';
    }
    Person.prototype.save = function () {
        console.log('Registration Successful!');
    };
    return Person;
}());
var Customer = /** @class */ (function (_super) {
    __extends(Customer, _super);
    function Customer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Customer.prototype.sale = function () {
        console.log('x items sold');
    };
    return Customer;
}(Person));
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Employee.prototype.salary = function () {
        console.log('Salary paid!');
    };
    return Employee;
}(Customer));
//regular class
var person1 = new Person;
var customer1 = new Customer;
person1.save();
customer1.sale();
//inherentance class
var employee1 = new Employee;
employee1.sale();
employee1.save();
