from django.urls import path,include
from . import  views  
from .views import expense_list

urlpatterns = [
    path('', expense_list, name='expense-list'),
]

