from django.shortcuts import render, redirect
from expenses.forms import ExpenseForm
from .models import Expense

def expense_list(request):
    expenses = Expense.objects.filter(user=request.user)
    return render(request, 'expenses/expense_list.html', {'expenses': expenses})
