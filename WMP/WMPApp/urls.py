from django.urls import path
from . import views
from django.contrib.auth.views import LoginView

urlpatterns = [
    path(r'', views.home),
    path(r'login/', LoginView.as_view(template_name='WMPApp/login.html')),
    path(r'gerente/', views.gerente),
    path(r'prueba/', views.prueba),

]
