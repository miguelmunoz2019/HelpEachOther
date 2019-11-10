from django.shortcuts import render, HttpResponse
# Create your views here.

def home(request):
    name = 'Miguel Muñoz'
    args = {'myName': name,}
    return render(request, 'WMPApp/home.html', args)

def equipo(request):
    args = {"nombre": ["Camilo Suarez", "Jonathan Triana", "Pedro Rodriguez"]}
    return render(request,'WMPApp/equipo.html',args)

def valorar(request):
    name = 'Camilo Suarez'
    args = {'myName': name}
    return render(request,'WMPApp/valoracion.html',args)

def perfil(request):
    name = 'Nicolas Mesa'
    args = {'myName': name}
    return render(request,'WMPApp/perfil.html',args)
