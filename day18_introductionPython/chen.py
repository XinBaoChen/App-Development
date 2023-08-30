# XinBao Chen,
# Tuesday, Aug 29


#Function
print("User defined functions")
def myFunction():
    print("my function code")

myFunction()

print("\n function with parameters")
def my_name(fname):
    print(f"Welcome to python coding {fname}")

my_name("Peter")

name = input("Enter a name: ")
my_name(name)

#Dictionary
# print("Dictionary")
# car = {
#     "brand": "Ford",
#     "model": "Mustand",
#     "year": 1964
# }
# print("\n{car}")
# print(f"model = {car['model']}")
# print("\n--- Loop each key in the dictionary -- \n")
# for k in car: 
#     print(f'key = {k}')
#     print(f"value = {car[k]}")
# lenCar = len(car)
# print(f"The size of the dictionary is {lenCar}")



#Loops
# n = 0
# while n< 6:
#     print(f"n = {n}")
#     n += 1

# print("\n Use while loop to check if a number is between 0 and 10 \n")
# num = int(input("Enter a number:"))
# while (num < 0 or num > 10):
#     num = int(input("Enter a number that is between 0 and 10:"))
# else:
#     print(f"Number entered is {num}")

# print("Use while loop as a validation program")
# while True:
#     conf = input("Do you want to contine? (y/n)")
#     if conf == "N" or conf == "n":
#         break
# print("Thank you for visiting!")

# for i in range(11):
#     if i == 5:
#         print(f"Now counting 5. Loop will break")
#         break
#     print(i)

# for i in range(11):
#     if i == 5:
#         print(f"Now counting 5. Loop will skip")
#         continue
#     print(i)

# print("for-else loop")
# for n in range(6):
#     print(f"n = {n}")
# else:
#     print("Finish!")

# print("\nloop through a list")
# colors = ["orange","blue","green","yellow","red"]
# for c in colors:
#     print(c)

# print("setpup a counter with increment of 3")
# for counter in range(-10,10,3):
#     print(f"Counting now = {counter}")

# print("Stepdown counter")
# for x in range(5,-2,-1):
#     print(f"Counting now = {x}")



#check if a user is an adult
# age = int(input("Enter an age: "))
# print(f"Age {age}")

# if age>= 21:
#     print(f"{age} is an adult age!")
# else:
#     print(f"{age} is under age")

# #logical operators and or not
# gender = input("Enter a gender: ")
# kidAge = int(input("Enter an age: "))

# if((gender =='m' or gender =='b') and kidAge >2  and kidAge < 12):
#     print(f"For a boy of {kidAge} should eat more broccoli")
# elif((gender == 'm' or gender =='b') and kidAge >= 12 and kidAge <= 18):
#     print(f"For a teen of {kidAge} should play some sport")
# elif((gender == 'f' or gender == 'g') and kidAge >2  and kidAge < 12):
#     print(f"For a girl of {kidAge} should eat more fruit")
# elif((gender == 'f' or gender == 'g') and kidAge >= 12 and kidAge <= 18):
#     print(f"For a teen of {kidAge} should learn to play an instrument")
# else:
#     print(f"No coments for age {kidAge} ")