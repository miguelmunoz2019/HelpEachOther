from django.shortcuts import render, HttpResponse
# Create your views here.

def home(request):
    numbers = [1,2,3,4,5]
    name = 'Miguel Muñoz'

    args = {'myName': name, 'numbers': numbers}
    return render(request, 'WMPApp/home.html', args)

def gerente(request):
    name = 'Miguel Muñoz'
    cargo='Gerente'

    args = {'myName': name,  'miCargo': cargo}
    return render(request,'WMPApp/Gerente.html',args)

def empleado(request):
    name = 'Manuel Vallejo'
    cargo ='Code Developer'

    args = {'myName': name,  'miCargo': cargo}
    return render(request,'WMPApp/empleado.html',args)

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
    return render(request,'WMPApp/Perfil.html',args)
