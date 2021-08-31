from django.contrib.auth import get_user_model
from django.db import models

# Create your models here.
User = get_user_model()


class Product(models.Model):
    id = models.IntegerField(primary_key=True)
    title = models.CharField(max_length=200)
    brand = models.CharField(max_length=50, default='AmerIslam')

    def __str__(self):
        return f'{self.title} - {self.brand}'


class Capital(models.Model):
    description = models.CharField(max_length=100, default='Investment')
    amount = models.FloatField()


class Transaction(models.Model):
    class Type(models.TextChoices):
        SALE = 'Sale'
        PURCHASE = 'Purchase'
        EXPENSE = 'Expense'

    description = models.CharField(max_length=200, blank=True, default='miscellaneous')
    type = models.CharField(max_length=20, choices=Type.choices, default=Type.EXPENSE)
    amount = models.FloatField()

    def __str__(self):
        return f'{self.description}'


class Vendor(models.Model):
    title = models.CharField(max_length=100)
    user = models.OneToOneField(User, default=1, on_delete=models.CASCADE)

    def __str__(self):
        return self.title


class Purchase(models.Model):
    vendor = models.ForeignKey(Vendor, on_delete=models.PROTECT)
    reference = models.CharField(max_length=30, null=True, blank=True)
    updated_at = models.DateField(auto_now=True)
    created_at = models.DateField(auto_now_add=True)
    transaction = models.OneToOneField(Transaction, on_delete=models.PROTECT)

    def __str__(self):
        return f'{self.vendor} - {self.reference}'


class PurchaseEntry(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    quantity = models.IntegerField(default=1)
    cost = models.FloatField(default=0)
    retail = models.FloatField(default=0)
    whole_sale = models.FloatField(default=0)
    invoice = models.ForeignKey(Purchase, on_delete=models.CASCADE)

    def __str__(self):
        return f'{self.product.title} - {self.quantity} - {self.cost}'
