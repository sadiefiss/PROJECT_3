# main_app/views.py

from django.shortcuts import get_object_or_404, render
from .models import Finch

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
    finches = Finch.objects.all()
    return render(request, 'finches/index.html', {'finches': finches})
#about view
def about(request):
    return render(request, 'about.html')

# FINCH DETAIL
# finch_id is the parameter name we specified in urls.py
def finches_detail(request, finch_id):
    finch = get_object_or_404(Finch, pk=finch_id)
    #finch = Finch.objects.get(id=finch_id)
    return render(request, 'finches/detail.html', { 'finch': finch })
