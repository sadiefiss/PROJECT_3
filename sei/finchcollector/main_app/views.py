# main_app/views.py

from django.shortcuts import render

finches = [
    {'name': 'Zebra Finch', 'description': 'Small and colorful bird.', 'age': 1},
    {'name': 'Gouldian Finch', 'description': 'Rainbow coloring.', 'age': 2},
    # ... Add more finch objects as needed
]
#home veiw
def home(request):
    return render(request, 'home.html')
#Finch insex
def finches_index(request):
    return render(request, 'finches/index.html', {'finches': finches})
#about view
def about(request):
    return render(request, 'about.html')
