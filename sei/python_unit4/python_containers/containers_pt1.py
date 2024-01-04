student = {
  'name': 'Maria',
  'course': 'SEI',
  'current_week': 7
} 


name = student ['name']
student['name'] = 'Tina'
#the get() method
#if you print this code the nested dictionary {'HTML': 5, 'JAVASCRIPT':4} will show up
print(student.get('skills',{ 
    'HTML': 5, 
    'JAVASCRIPT':4 
})   )