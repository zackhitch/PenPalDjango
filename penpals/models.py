from django.db import models
from uuid import uuid4
from django.contrib.auth.models import User


class Address(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid4, editable=False)
    street_address = models.CharField(max_length=20)
    city = models.CharField(max_length=40)
    state = models.CharField(max_length=2)
    zipcode = models.CharField(max_length=5)
    notes = models.TextField(blank=True)

    def __str__(self):
        
        return "%s\n%s, %s, %s\n%s" %(self.street_address, self.city, self.state, self.zipcode, self.notes)

    


class PenPal(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid4, editable=False)
    name = models.CharField(max_length=200)
    address = models.OneToOneField(Address, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        return self.name


class Letter(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid4, editable=False)
    date = models.DateTimeField()
    outbound = models.BooleanField()
    penpal = models.ForeignKey(PenPal, on_delete=models.CASCADE)


# class User(models.Model):
#     id = models.UUIDField(primary_key=True, default=uuid4, editable=False)
#     username = models.CharField(max_length=50)
#     password = models.CharField(max_length=100)
#     penpals = models.ForeignKey(PenPal, on_delete=models.CASCADE)
#     letters = models.ForeignKey(Letter, on_delete=models.CASCADE)
