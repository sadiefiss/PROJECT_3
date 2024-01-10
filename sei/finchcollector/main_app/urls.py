from django.urls import path
from . import views
from .views import finches_detail
	
urlpatterns = [
    path('', views.home, name='home'),  # Assuming you have a 'home' view function
    path('about/', views.about, name='about'),
    path('finches/<int:finch_id>/', finches_detail, name='finch_detail'),
    path('finches/', views.finches_index, name='finches_index'),  # New route for finches
	path('finches/<int:finch_id>/', views.finches_detail, name='finches_detail')
 ]