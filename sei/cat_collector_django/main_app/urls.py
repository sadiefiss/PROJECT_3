#all paths specific to cat collector 
from django.urls import path
#eventually well be pointing to veiw functionality wich handles other requests

from . import views

urlpatterns = [
  path('', views.home, 
       name='home'),
  path('about/', views.about, 
       name='about'), 
]