from django.db import models

# Create your models here.

# Registering a USER   
 
class Institutions(models.Model):
    Institution_id = models.AutoField(primary_key=True)
    Name = models.CharField(max_length=255)
    BRN = models.IntegerField()
    Address = models.CharField(max_length=255)
    ContactEmail = models.EmailField()
    ContactPhone = models.IntegerField()
    CreatedAt = models.DateTimeField(auto_now_add=True)

# Declaring incident status
class IncidentStatus(models.Model):
    STATUS_ACTIVE = "A"
    STATUS_FALSE = "F"
    STATUS_RESOLVED = "R"
    
    STATUS_CHOICES = [
        (STATUS_ACTIVE, "Active"),
        (STATUS_FALSE, "False"),
        (STATUS_RESOLVED, "Resolved")
    ]

    StatusId = models.AutoField(primary_key=True)
    Status = models.CharField(max_length=1, choices=STATUS_CHOICES, default=STATUS_ACTIVE)
    # An incident's default status is active


# Reporting an Incident
class BasicInformation(models.Model):
    FI = models.CharField(max_length=255)   #Financial Institution
    Date = models.DateTimeField(auto_now=True)         #Reporting date
    RefNo = models.CharField(max_length=15, primary_key=True)    #Incident Reference Number
    Officer = models.CharField(max_length=30)   #Reporting Officer
    Designation = models.CharField(max_length=15) #Reporting officer's designation
    Department = models.CharField(max_length=25)    # Reporting officer's department
    ContactNumber = models.IntegerField()   # Reporting officer's contact number
    Email = models.EmailField()     # Reporting officer's email

class IncidentInformation(models.Model):
    DateTime = models.DateTimeField(auto_now_add=True)
    Location = models.CharField(255)
    Severity = models.CharField(5)
    DiscMethod = models.CharField(255)
    IncidentType = models.CharField(255)
    IncidentDesc = models.CharField(255)
    AffectedResc = models.CharField(255)
    FinLoss = models.IntegerField()
    DataBreach = models.BooleanField()
    
class ImpactAssessment(models.Model):
    ImpactDetails = models.CharField(255)

class IncidentRecovery(models.Model):
    Duration = models.DurationField()
    

