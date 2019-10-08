from django.shortcuts import render, HttpResponse

# Create your views here.


def home(request):
    numbers = [1,2,3,4,5]
    name = 'Miguel Muñoz'

    args = {'myName': name, 'numbers': numbers}
    return render(request, 'WMPApp/home.html', args)


def gerente(request):
    file = open('WMPApp/docs/Empleados.txt','r')
    archivo = file.read()
    file.close()
    empleados=archivo.split(';')
    name = 'Miguel Muñoz'
    cargo='Gerente'

    args = {'myName': name,  'miCargo': cargo, 'employees': empleados}
    return render(request,'WMPApp/Gerente.html',args)

def prueba(request):
    numbers = [1,2,3,4,5]
    name = 'Miguel Muñoz'

    args = {'myName': name, 'numbers': numbers}
    return render(request, 'WMPApp/bootstrap-calendar/src/index.html', args)