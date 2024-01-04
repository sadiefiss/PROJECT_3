#lists are  ordered collections
#other sequence types in python include strings and tuples
colors = ['red', 'green', 'blue']
colors[-1] = 'brown'
colors.append('purple')
#if you want to add multiple items
colors.extend(['orange', 'black'])
#insert yellow after red
colors.insert(1, 'yellow') 
#remove green
colors.pop(2)
#delete yellow
del colors[1]
#remove orange
colors.remove('orange')
#clear an entire list
colors.clear()
#
print(colors)

odds = [1, 3, 5]
evens = [2, 4, 6]
nums = odds + evens 

colors = ['red', 'green', 'blue']
# for color in colors:
#     print( color)
#what os ypi need the index?
    #not the best practice

idx = 0
for color in colors:
    print(idx, color)
    #idx += 1 
#acsess the inddex of an item while iterating over a list use built- in enumerate()
 #this is the best practice if you need acess to the index of the iteration
for idx, color in enumerate(colors):
    #print(idx, color )

    #pt4 Define a list named scores that contains a dictionary with the following shape:
   scores = [
   {
     'name': 'Julia',
     'points': 25  # points the player scored
   }
 ]  
   #append scores
   scores.append({
   'name': 'Seline',
    'points': 30
       
   }) 
   #iterate over
   for score in scores:
       #print formatted string f string
       #all we have acsess to is score one of the  dictionarys the item in the list
       #acess the name with the ['name']
       # <name> scored <points> points
       print(f"{score['name']} scored {score['points']} points")
       

#pt 5
nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


squares = [num * num for num in nums]

even_square =[n * n for n in nums if(n * n % 2 == 0)]
    
print(squares)
print(even_square)
print(squares == even_square)

#colors = tuple instead of a list
#the , commas are actually what creates a tuple
colors =('red','green','blue')
#unpacking tuplse
r, g, b = colors
print(colors)
print(r,g, b) 

#slice (create copies)
#the [0:4] is the starting index and ending index
short_name = 'Alexandria' [0:4]
#create tht copy!
print(short_name)

#slice Assingment in Lists
chars = ['a', 'b', 'x', 'y', 'd']
#replace the 'x' and 'y' characters with 'c' like this:
chars[2:4] = 'c'
print(chars)