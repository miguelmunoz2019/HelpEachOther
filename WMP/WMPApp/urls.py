from django.urls import path
from . import views
from django.contrib.auth.views import LoginView

urlpatterns = [
    path(r'', views.home),
    path(r'login/', LoginView.as_view(template_name='WMPApp/login.html')),
    path(r'gerente/', views.gerente),
    path(r'empleado/', views.empleado),
    path(r'equipo/', views.equipo),
    path(r'valorar/', views.valorar),
]
