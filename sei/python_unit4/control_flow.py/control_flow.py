print('python script is running')

# JS - how to convert a value into a Boolean ? Boolean() or !!
# Truthy - any non empty string, positive or negative numbers (floats or int), boolean true, complex [] {}

#python - ? 
# None - falsy
# False - falsy
# 0 - falsy 
# NaN - Float??? float accepts a case insensitive nan?  
# empty sequences are falsy - "" , [], {}, (), range()
example = []
example = bool(example)
# print(example)

# python > comparisons -> python does not have 'strict equality' because python does not automatically cast values (coerce) to other types 

# print("lalalal" + str(37))

print("logical or>>>", "Tacos" or "Example")

# when using the logical or -> the first value to evaluate to True is returned 
# if first operand is truthy -> return the first value / expression 
# otherwise second value (either true or false)

print("logical and", not (0 and "yolo"))
# python + js  logical operator and && 

best_food = "cake"

if best_food == "tacos": print('yum')
    # pass # pass can be used to close a conditional or function scope 
    # with if elif else statements: scoping is defined through indentation
    # with an if statement elif -> some code to evaluate otherwise an syntax error 
elif best_food == 'cake': print('ouch')
else: print('not for me')

# color = input('Enter "green", "yellow", "red": ').lower()
color = 'tree'
# store the string input from a user after prompting them with a formatted message
# create a new string from the user imput as all lowercase characters

# a guess - input is blocking the execution of the rest of the code until a user provides a string 
print(f'The user entered {color}')
if color == 'green':
    print('Go!')
elif color == 'yellow':
    print('Slow Down!')
elif color == 'red':
    print('Stop!')    
else: print('Bogus!')

best_foods = ['tacos', 'cake', 'fruit', 'steak', ]
# iteration is very similar to the for of in JS 

# for f in best_foods:
#     num = 1
#     print(f'{num}. favorite food: {f}')
#     num+=1
#     #  1. favorite food: {food}
#     #  JS -> i 


start = 10

# while start > 0:
#     print(start)
#     start -= 1
#     if start == 0 : print('blast off!')

print(best_foods[-2])
print(list(range(-4,4, 2)))
for position in range(-4,4):

    print('food at', best_foods[position],  "current position", position)

print(list(range(4)))