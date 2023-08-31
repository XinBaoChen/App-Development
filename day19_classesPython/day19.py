# XinBao Chen
# Aug 31, Python classes

print("\n -----Class Person----- \n")

#create class. Class name is always Capitalized
class MyClass:
    num =5

#create an object for class Myclass
p1 = MyClass()
# print(p1)
print(f"\nObject num = {p1.num}")

class Person:
    def __init__(self,name,age):
        self.name = name
        self.age = age
    # object method
    def printObject(self):
        print(f"Hello! my name is {self.name}")
#create object with inital value
person1  = Person("John", 14)
print(f"Object nane = {person1.name} and object age is {person1.age}")
print(f"\n{person1.printObject()}")

#delte properties using del keyword
print(f"name = {person1.name}")
del person1.name

#pass statement is used to pass an empty class
class House:
    pass

print(f"print {House}")
print("\n -----Class chair----\n")

class Chair:
    #access properties
    chair_color = "brown"
    def __init__(self,height,width,length):
        self.height = height
        self.__width = width #__ make it very private properties
        self.length = length
        self.length *= 2
    #print the length
    def print_result(self):
        print(f"The height of the chair is: {self.length}")

    #pass the height
    def get_height(self):
        return self.height
    
    #pass the accesssible property
    def get_color(self):
        return self.chair_color
    
    #update class values
    def set_price(self,price):
        self._price = price
#initialize an obejct for class chair
chair1 = Chair(20, 10,30)
chair1.print_result()

print(f"The chair height {chair1.get_height()}")
print(f"\nThe chair color is {chair1.chair_color} ")
#update price data
chair1.set_price(25)
print(f"Chair price is {chair1._price}")
#print(f"\nVery private width = ")