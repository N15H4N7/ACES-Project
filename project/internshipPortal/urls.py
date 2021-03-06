from django.urls import path
from . import views


urlpatterns = [

    path('internships/<int:pg>/',                       views.Internships,
         name='internships'),
    path('my-internships/',                     views.MyInternships,
         name='my-internships'),
    path('internships/create/',
         views.InternshipCreateView,             name='internship-create'),
    path('internships/<int:pk>/details',
         views.InternshipDetailView,             name='internship-detail'),
    path('internships/<int:pk>/application/',
         views.InternshipApplicationView,        name='internship-application'),
    path('internships/<int:pk>/update/',
         views.InternshipUpdateView,             name='internship-update'),
    path('internships/<int:pk>/delete/',
         views.InternshipDeleteView,             name='internship-delete'),
    path('download/<int:pk>/',                  views.exceldownload,
         name='excel-download'),

]
