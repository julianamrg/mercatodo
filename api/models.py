# This is an auto-generated Django model module.
# You'll have to do the following manually to clean this up:
#   * Rearrange models' order
#   * Make sure each model has one field with primary_key=True
#   * Make sure each ForeignKey and OneToOneField has `on_delete` set to the desired behavior
#   * Remove `managed = False` lines if you wish to allow Django to create, modify, and delete the table
# Feel free to rename the models, but don't rename db_table values or field names.
from django.db import models


class Product(models.Model):
    pro_id = models.AutoField(primary_key=True)
    pro_name = models.CharField(max_length=100)
    pro_provider = models.CharField(max_length=45)
    pro_existences = models.IntegerField()
    pro_date = models.DateField()
    pro_description = models.CharField(max_length=255)
    pro_category = models.CharField(max_length=45)

    class Meta:
        #managed = False
        db_table = 'product'
